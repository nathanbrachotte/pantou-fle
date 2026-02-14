/**
 * Central site configuration.
 * All site-wide settings live here so they can be referenced everywhere.
 */
export const SITE_CONFIG = {
  name: "Pantou-FLE",
  url: "https://pantou-fle.fr",
  contactEmail: "cathy.nguyen.fle@gmail.com",

  /** People who receive operational notifications (new subscribers, etc.) */
  adminEmails: [
    "nathan.brachotte.pro+pantoufle@gmail.com",
    "cathy.nguyen.fle@gmail.com",
  ],

  newsletter: {
    /** Set to false to hide the form and disable the API endpoint */
    enabled: true,

    /** Sender email for notification emails (must be verified in Resend) */
    senderEmail: "pantou-fle@n8js.com",

    /** Sender display name */
    senderName: "Pantou-FLE Newsletter",
  },

  ads: {
    /**
     * Set to false to stop rendering manual AdSense ad-slot components.
     * The global adsbygoogle.js script (needed for Auto Ads & consent)
     * keeps loading regardless of this flag.
     */
    manualSlots: false,
  },
} as const;
