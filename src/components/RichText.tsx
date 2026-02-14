import type { ReactNode } from "react";
import richTextTypes from "@contentful/rich-text-types";
const { BLOCKS, INLINES, MARKS } = richTextTypes;
type Node = richTextTypes.Node;
type Inline = richTextTypes.Inline;
import richTextRenderer from "@contentful/rich-text-react-renderer";
const { documentToReactComponents } = richTextRenderer;
type Options = richTextRenderer.Options;
import type { Reference } from "@/lib/contentful";

function AnimatedLink(node: Node, children: ReactNode): ReactNode {
  const isGenially =
    node.data.uri?.includes("view.genial.ly") ||
    node.data.uri?.includes("educaplay");

  if (isGenially) {
    return (
      <div className="w-full sm:w-2/3 my-6 mx-auto">
        <iframe
          className="rounded-xl z-10 aspect-video w-full shadow-sm border border-gray-100"
          title="iframe"
          src={node.data.uri}
          allowFullScreen={false}
          scrolling="yes"
        />
      </div>
    );
  }

  return (
    <a
      href={node.data.uri}
      target="_blank"
      rel="noreferrer"
      className="text-secondary-dark underline decoration-secondary-dark/30 underline-offset-2 hover:text-secondary-light hover:decoration-secondary-light/50 transition-colors"
    >
      {children}
    </a>
  );
}

function defaultInline(type: string, node: Node): ReactNode {
  return (
    <span key={node.data.target?.sys?.id}>
      {`type: ${node.nodeType} id: ${node.data.target?.sys?.id}`}
    </span>
  );
}

function getAssetFromId(
  references: Reference[],
  id: string,
): Reference | undefined {
  return references.find((ref) => ref.contentful_id === id);
}

function getOptions(references: Reference[]): Options {
  return {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <strong className="font-bold text-primary-dark">{text}</strong>
      ),
      [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
      [MARKS.UNDERLINE]: (text) => (
        <u className="underline underline-offset-2 decoration-primary/30">
          {text}
        </u>
      ),
      [MARKS.CODE]: (text) => (
        <code className="bg-primary-light/50 text-primary-dark px-1.5 py-0.5 rounded-md text-sm font-mono">
          {text}
        </code>
      ),
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: Node): ReactNode => {
        const id = node.data.target?.sys?.id;
        if (!id) return null;

        const asset = getAssetFromId(references, id);
        if (!asset) return null;

        switch (asset.file?.contentType) {
          case "application/pdf": {
            const pdfUrl = asset.file.url.startsWith("//")
              ? `https:${asset.file.url}`
              : asset.file.url;
            const pdfViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
            return (
              <div className="w-full max-w-2xl my-6 mx-auto rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                {/* Download bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-primary-dark">
                  <span className="text-sm font-medium text-white truncate opacity-90">
                    {asset.file.fileName}
                  </span>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-primary-dark bg-white rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Télécharger
                  </a>
                </div>
                <iframe
                  title={asset.file.fileName}
                  src={pdfViewerUrl}
                  className="w-full aspect-[3/4] border-0"
                />
              </div>
            );
          }
          case "image/png":
            return (
              <figure className="my-6 mx-auto w-full sm:w-2/3">
                <img
                  src={asset.file.url}
                  alt={asset.file.fileName}
                  className="rounded-xl w-full shadow-sm border border-gray-100"
                />
              </figure>
            );
          default:
            return null;
        }
      },
      [INLINES.HYPERLINK]: AnimatedLink as any,
      [BLOCKS.DOCUMENT]: (_: Node, children: ReactNode): ReactNode => (
        <>{children}</>
      ),
      [BLOCKS.PARAGRAPH]: (_: Node, children: ReactNode): ReactNode => (
        <p className="text-gray-700 leading-relaxed mb-4 last:mb-0">
          {children}
        </p>
      ),
      [BLOCKS.HEADING_1]: (_: Node, children: ReactNode): ReactNode => (
        <h1 className="text-xl md:text-2xl font-extrabold text-primary-dark mt-8 mb-4 first:mt-0">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (_: Node, children: ReactNode): ReactNode => (
        <h2 className="text-lg md:text-xl font-bold text-primary-dark mt-6 mb-3 first:mt-0">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (_: Node, children: ReactNode): ReactNode => (
        <h3 className="text-base md:text-lg font-semibold text-primary-dark mt-5 mb-2 first:mt-0">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (_: Node, children: ReactNode): ReactNode => (
        <h4 className="text-base font-semibold text-primary-dark mt-4 mb-2 first:mt-0">
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (_: Node, children: ReactNode): ReactNode => (
        <h5 className="text-sm font-semibold text-primary-dark mt-4 mb-2 first:mt-0">
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (_: Node, children: ReactNode): ReactNode => (
        <h6 className="text-sm font-medium text-primary mt-3 mb-2 first:mt-0">
          {children}
        </h6>
      ),
      [BLOCKS.UL_LIST]: (_: Node, children: ReactNode): ReactNode => (
        <ul className="my-4 space-y-1.5">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_: Node, children: ReactNode): ReactNode => (
        <ol className="my-4 space-y-1.5 list-decimal">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_: Node, children: ReactNode): ReactNode => (
        <li className="ml-6 list-outside list-disc marker:text-secondary-dark text-gray-700 leading-relaxed">
          {children}
        </li>
      ),
      [BLOCKS.QUOTE]: (_: Node, children: ReactNode): ReactNode => (
        <blockquote className="my-6 pl-4 py-3 pr-4 bg-primary-light/40 rounded-r-xl border-l-4 border-primary-dark italic text-primary-dark/80">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => (
        <hr className="my-8 border-t border-gray-200" />
      ),
      [BLOCKS.TABLE]: (_: Node, children: ReactNode): ReactNode => (
        <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <tbody>{children}</tbody>
          </table>
        </div>
      ),
      [BLOCKS.TABLE_ROW]: (_: Node, children: ReactNode): ReactNode => (
        <tr className="border-b border-gray-100 last:border-b-0">
          {children}
        </tr>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (
        _: Node,
        children: ReactNode,
      ): ReactNode => (
        <th className="px-4 py-3 text-left text-xs font-bold text-primary-dark uppercase tracking-wider bg-primary-light/30">
          {children}
        </th>
      ),
      [BLOCKS.TABLE_CELL]: (_: Node, children: ReactNode): ReactNode => (
        <td className="px-4 py-3 text-gray-700">{children}</td>
      ),
      [INLINES.ASSET_HYPERLINK]: (node: Node): ReactNode =>
        defaultInline(INLINES.ASSET_HYPERLINK, node as Inline),
      [INLINES.ENTRY_HYPERLINK]: (node: Node): ReactNode =>
        defaultInline(INLINES.ENTRY_HYPERLINK, node as Inline),
      [INLINES.EMBEDDED_ENTRY]: (node: Node): ReactNode =>
        defaultInline(INLINES.EMBEDDED_ENTRY, node as Inline),
    },
  };
}

interface RichTextProps {
  description: {
    raw: string;
    references: Reference[];
  };
}

export default function RichText({ description }: RichTextProps) {
  if (!description?.raw) return null;

  const data =
    typeof description.raw === "string"
      ? JSON.parse(description.raw)
      : description.raw;

  return (
    <div className="rich-text">
      {documentToReactComponents(data, getOptions(description.references || []))}
    </div>
  );
}
