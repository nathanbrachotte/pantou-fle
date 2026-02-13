import * as contentful from "contentful";

const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

export interface ContentfulActivity {
  title: string;
  slug: string;
  pdf?: {
    fields: {
      file: {
        contentType: string;
        fileName: string;
        url: string;
      };
    };
  };
  level: {
    fields: {
      title: string;
    };
  };
  createdAt: string;
  description?: {
    raw: string;
    references: ContentfulReference[];
  };
  preview?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  price?: {
    fields: {
      paymentType: "subscription" | "setPrice" | "free";
    };
  };
  priceAmount?: number;
  activityType?: {
    fields: {
      type: string;
    };
  };
  previewDescription?: string;
}

export interface ContentfulReference {
  contentful_id: string;
  createdAt: string;
  file: {
    contentType: "image/png" | "application/pdf";
    details: { image: { height: number; width: number } };
    fileName: string;
    url: string;
  };
  id: string;
}

export interface ContentfulGame {
  title: string;
  link: string;
  level: {
    fields: {
      title: string;
    };
  };
  createdAt: string;
  slug: string;
  description?: {
    raw: string;
  };
  preview?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

/** Normalized types matching the old Gatsby shape for easy component reuse */
export interface Activity {
  level: { id?: string; title: string };
  pdf?: {
    id?: string;
    file: {
      contentType: string;
      fileName: string;
      url: string;
    };
  };
  slug: string;
  title: string;
  createdAt: string;
  description?: {
    raw: string;
    references: Reference[];
  };
  preview?: {
    file: { url: string };
  };
  price?: {
    paymentType: "subscription" | "setPrice" | "free";
  };
  priceAmount?: number;
  activityType?: {
    type: string;
  };
  previewDescription?: string;
}

export interface Reference {
  contentful_id: string;
  createdAt?: string;
  file: {
    contentType: "image/png" | "application/pdf";
    details: { image: { height: number; width: number } };
    fileName: string;
    url: string;
  };
  id?: string;
}

export interface Game {
  createdAt: string;
  level: { title: string };
  description?: { raw: string };
  link: string;
  slug: string;
  title: string;
  preview?: { file: { url: string } };
}

/**
 * Safely extract embedded asset references from rich text content,
 * walking through all nested content nodes (Contentful rich text can be deeply nested).
 */
function extractReferences(content: any[]): Reference[] {
  const references: Reference[] = [];

  function walk(nodes: any[]) {
    if (!Array.isArray(nodes)) return;
    for (const node of nodes) {
      if (
        node.nodeType === "embedded-asset-block" &&
        node.data?.target?.sys
      ) {
        const target = node.data.target;
        const file = target.fields?.file;
        if (file) {
          references.push({
            contentful_id: target.sys.id,
            file: {
              contentType: file.contentType || "",
              details: file.details || { image: { height: 0, width: 0 } },
              fileName: file.fileName || "",
              url: file.url || "",
            },
            id: target.sys.id,
          });
        }
      }
      if (node.content) {
        walk(node.content);
      }
    }
  }

  walk(content);
  return references;
}

/**
 * Strip circular references from a Contentful rich text document
 * by rebuilding just the data we need (nodeType, content, data, value, marks).
 */
function sanitizeRichText(doc: any): any {
  if (!doc || typeof doc !== "object") return doc;

  function sanitizeNode(node: any): any {
    if (!node || typeof node !== "object") return node;

    const cleaned: any = {};
    if (node.nodeType) cleaned.nodeType = node.nodeType;
    if (node.value !== undefined) cleaned.value = node.value;
    if (node.marks) cleaned.marks = node.marks;
    if (node.data) {
      // Only keep the target sys.id for references, drop the full resolved object
      if (node.data.target?.sys?.id) {
        cleaned.data = { target: { sys: { id: node.data.target.sys.id } } };
      } else if (node.data.uri) {
        cleaned.data = { uri: node.data.uri };
      } else {
        cleaned.data = {};
      }
    }
    if (Array.isArray(node.content)) {
      cleaned.content = node.content.map(sanitizeNode);
    }
    return cleaned;
  }

  return sanitizeNode(doc);
}

function normalizeActivity(entry: contentful.Entry<any>): Activity {
  const fields = entry.fields as any;
  const sys = entry.sys;

  const descriptionField = fields.description;
  let normalizedDescription: Activity["description"] | undefined;

  if (descriptionField && descriptionField.nodeType) {
    // Extract references BEFORE sanitizing (we need the full resolved objects)
    const references = extractReferences(descriptionField.content || []);

    // Sanitize the rich text to remove circular references, then serialize
    const sanitized = sanitizeRichText(descriptionField);
    const raw = JSON.stringify(sanitized);

    normalizedDescription = { raw, references };
  }

  return {
    level: {
      id: fields.level?.sys?.id,
      title: fields.level?.fields?.title || "",
    },
    pdf: fields.pdf
      ? {
        id: fields.pdf.sys?.id,
        file: {
          contentType: fields.pdf.fields?.file?.contentType || "",
          fileName: fields.pdf.fields?.file?.fileName || "",
          url: fields.pdf.fields?.file?.url || "",
        },
      }
      : undefined,
    slug: fields.slug || "",
    title: fields.title || "",
    createdAt: sys.createdAt,
    description: normalizedDescription,
    preview: fields.preview
      ? { file: { url: fields.preview.fields?.file?.url || "" } }
      : undefined,
    price: fields.price
      ? { paymentType: fields.price.fields?.paymentType || "free" }
      : undefined,
    priceAmount: fields.priceAmount,
    activityType: fields.activityType
      ? { type: fields.activityType.fields?.type || "" }
      : undefined,
    previewDescription: fields.previewDescription,
  };
}

export async function getAllActivities(): Promise<Activity[]> {
  const entries = await client.getEntries({
    content_type: "ficheExercice",
    order: ["-sys.createdAt"],
    limit: 1000,
    include: 3,
  });

  return entries.items.map(normalizeActivity);
}

export async function getAllGames(): Promise<Game[]> {
  const entries = await client.getEntries({
    content_type: "game",
    order: ["-sys.createdAt"],
    limit: 1000,
    include: 2,
  });

  return entries.items.map((entry: contentful.Entry<any>) => {
    const fields = entry.fields as any;
    const sys = entry.sys;

    return {
      createdAt: sys.createdAt,
      level: { title: fields.level?.fields?.title || "" },
      description: fields.description
        ? { raw: JSON.stringify(fields.description) }
        : undefined,
      link: fields.link || "",
      slug: fields.slug || "",
      title: fields.title || "",
      preview: fields.preview
        ? { file: { url: fields.preview.fields?.file?.url || "" } }
        : undefined,
    };
  });
}
