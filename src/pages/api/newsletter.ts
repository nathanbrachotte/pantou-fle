import type { APIRoute } from "astro";
import { SITE_CONFIG } from "@/config";

export const prerender = false;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request, locals }) => {
  console.log("[newsletter] POST request received");

  if (!SITE_CONFIG.newsletter.enabled) {
    console.log("[newsletter] Newsletter is disabled");
    return jsonResponse(
      { error: "La newsletter est actuellement désactivée." },
      503,
    );
  }

  const { env } = locals.runtime;
  const db = env.DB;
  const resendApiKey = env.RESEND_API_KEY;

  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString().trim().toLowerCase();
    const firstName = formData.get("first_name")?.toString().trim() || null;

    console.log(`[newsletter] Subscription attempt — email: ${email}, firstName: ${firstName}`);

    if (!email || !EMAIL_REGEX.test(email)) {
      console.log(`[newsletter] Invalid email: ${email}`);
      return jsonResponse({ error: "Adresse email invalide." }, 400);
    }

    // Check if already subscribed
    const existing = await db
      .prepare("SELECT id, is_active FROM subscribers WHERE email = ?")
      .bind(email)
      .first<{ id: number; is_active: number }>();

    if (existing) {
      if (existing.is_active) {
        console.log(`[newsletter] Already subscribed: ${email}`);
        return jsonResponse(
          { error: "Vous êtes déjà inscrit(e) !" },
          409,
        );
      }

      // Reactivate a previously unsubscribed user
      console.log(`[newsletter] Reactivating subscriber: ${email}`);
      await db
        .prepare(
          "UPDATE subscribers SET is_active = 1, first_name = ?, unsubscribed_at = NULL WHERE email = ?",
        )
        .bind(firstName, email)
        .run();
    } else {
      console.log(`[newsletter] Inserting new subscriber: ${email}`);
      await db
        .prepare("INSERT INTO subscribers (email, first_name) VALUES (?, ?)")
        .bind(email, firstName)
        .run();
    }

    // Send notification emails (fire-and-forget, don't block the response)
    if (resendApiKey && SITE_CONFIG.adminEmails.length > 0) {
      console.log(`[newsletter] Sending notification email for: ${email}`);
      sendNotificationEmails(resendApiKey, email, firstName).catch((err) =>
        console.error("[newsletter] Failed to send notification email:", err),
      );
    } else {
      console.log("[newsletter] Skipping notification — no API key or no admin emails configured");
    }

    console.log(`[newsletter] Subscription successful: ${email}`);
    return jsonResponse({
      success: true,
      message: "Inscription réussie ! 🎉",
    });
  } catch (error) {
    console.error("[newsletter] Subscription error:", error);
    return jsonResponse(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      500,
    );
  }
};

async function sendNotificationEmails(
  apiKey: string,
  subscriberEmail: string,
  firstName: string | null,
) {
  const nameDisplay = firstName
    ? `${firstName} (${subscriberEmail})`
    : subscriberEmail;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: `${SITE_CONFIG.newsletter.senderName} <${SITE_CONFIG.newsletter.senderEmail}>`,
      // to: [...SITE_CONFIG.adminEmails],
      to: SITE_CONFIG.adminEmails[0],
      subject: `📫 Nouvel abonné newsletter : ${nameDisplay}`,
      html: `
        <h2>Nouvel abonné à la newsletter Pantou-FLE !</h2>
        <p><strong>Email :</strong> ${subscriberEmail}</p>
        ${firstName ? `<p><strong>Prénom :</strong> ${firstName}</p>` : ""}
        <p><strong>Date :</strong> ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</p>
      `,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Resend API error (${response.status}): ${text}`);
  }
}

function jsonResponse(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
