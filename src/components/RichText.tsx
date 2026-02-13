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
      <div className="w-2/3 my-4 mx-auto">
        <iframe
          className="rounded-lg z-10 aspect-video w-full"
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
      className="text-secondary-dark underline hover:text-secondary-light transition-colors"
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
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
      [MARKS.ITALIC]: (text) => <i>{text}</i>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.CODE]: (text) => <code>{text}</code>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: Node): ReactNode => {
        const id = node.data.target?.sys?.id;
        if (!id) return null;

        const asset = getAssetFromId(references, id);
        if (!asset) return null;

        switch (asset.file?.contentType) {
          case "application/pdf":
            return (
              <div className="w-full my-4 mx-auto">
                <iframe
                  title={asset.file.fileName}
                  src={`${asset.file.url}#toolbar=1&navpanels=0`}
                  className="w-full aspect-[3/4]"
                />
              </div>
            );
          case "image/png":
            return (
              <img
                src={asset.file.url}
                alt={asset.file.fileName}
                className="rounded-lg aspect-video w-1/2 my-4 mx-auto"
              />
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
        <p>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (_: Node, children: ReactNode): ReactNode => (
        <span className="text-primary-dark font-extrabold py-1 text-xl md:text-2xl">
          {children}
        </span>
      ),
      [BLOCKS.HEADING_2]: (_: Node, children: ReactNode): ReactNode => (
        <p className="text-primary-dark font-bold py-1 text-lg md:text-xl">
          {children}
        </p>
      ),
      [BLOCKS.HEADING_3]: (_: Node, children: ReactNode): ReactNode => (
        <p className="text-base md:text-lg text-primary-dark font-semibold">
          {children}
        </p>
      ),
      [BLOCKS.HEADING_4]: (_: Node, children: ReactNode): ReactNode => (
        <h4>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (_: Node, children: ReactNode): ReactNode => (
        <h5>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (_: Node, children: ReactNode): ReactNode => (
        <h6>{children}</h6>
      ),
      [BLOCKS.UL_LIST]: (_: Node, children: ReactNode): ReactNode => (
        <ul>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_: Node, children: ReactNode): ReactNode => (
        <ol>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_: Node, children: ReactNode): ReactNode => (
        <li className="ml-8 list-outside list-disc marker:text-primary-dark">
          {children}
        </li>
      ),
      [BLOCKS.QUOTE]: (_: Node, children: ReactNode): ReactNode => (
        <blockquote className="p-2 bg-primary-light mt-2 mb-2 border-l-4 border-primary-dark italic">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr />,
      [BLOCKS.TABLE]: (_: Node, children: ReactNode): ReactNode => (
        <table>
          <tbody>{children}</tbody>
        </table>
      ),
      [BLOCKS.TABLE_ROW]: (_: Node, children: ReactNode): ReactNode => (
        <tr>{children}</tr>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (
        _: Node,
        children: ReactNode,
      ): ReactNode => <th>{children}</th>,
      [BLOCKS.TABLE_CELL]: (_: Node, children: ReactNode): ReactNode => (
        <td>{children}</td>
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
    <div>{documentToReactComponents(data, getOptions(description.references || []))}</div>
  );
}
