import React, { ReactNode } from 'react'

import {
  BLOCKS,
  INLINES,
  MARKS,
  Document,
  Inline,
  Node,
} from '@contentful/rich-text-types'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'
import Heading1 from '../shared/Heading1'
import Heading2 from '../shared/Heading2'
import Heading3 from '../shared/Heading3'
import PDF from './PDF'
import { Reference } from '../types'
import Game from './Game'

const StyledLink = styled.a`
  display: inline-block;
  transition: color 250ms, text-shadow 250ms;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:after {
    position: absolute;
    z-index: -1;
    bottom: 1px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 100%;
    height: 3px;
    transition: all 250ms;
  }

  &:hover {
    color: white;

    &::after {
      height: 110%;
      width: 110%;
    }
  }
`

const AnimatedLink = (node: Node, children: JSX.Element): ReactNode => {
  const isGenially = node.data.uri.includes('view.genial.ly')

  if (isGenially) {
    return (
      <div className="w-2/3 my-4 mx-auto">
        <Game link={node.data.uri} />
      </div>
    )
  }

  return (
    <StyledLink
      href={node.data.uri}
      target="_blank"
      rel="noreferrer"
      className="text-secondary-dark after:bg-secondary-dark">
      {children}
    </StyledLink>
  )
}

function defaultInline(type: string, node: Node): ReactNode {
  return (
    <span key={node.data.target.sys.id}>
      {`type: ${node.nodeType} id: ${node.data.target.sys.id}`}
    </span>
  )
}

function getAssetFromId(
  references: Reference[],
  id: string,
): Reference | undefined {
  const matchingRef = references.find((ref) => {
    return ref.contentful_id === id
  })

  return matchingRef
}

export const getOptions: (references: Reference[]) => Options = (
  references: Reference[],
) => ({
  renderMark: {
    [MARKS.BOLD]: (text: string): ReactNode => (
      <span className="font-bold">{text}</span>
    ),
    [MARKS.ITALIC]: (text: string): ReactNode => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text: string): ReactNode => <u>{text}</u>,
    [MARKS.CODE]: (text: string): ReactNode => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: Node): ReactNode =>
      defaultInline(INLINES.ASSET_HYPERLINK, node as Inline),
    [BLOCKS.EMBEDDED_ASSET]: (node: Node): ReactNode => {
      const { id } = node.data.target.sys

      const asset = getAssetFromId(references, id)

      if (!asset) {
        return null
      }

      switch (asset.file.contentType) {
        case 'application/pdf':
          return (
            <div className="w-2/3 my-4 mx-auto">
              <PDF url={asset.file.url} title={asset.file.fileName} />
            </div>
          )
        case 'image/png':
          return (
            <img
              src={asset.file.url}
              alt={asset.file.fileName}
              className="rounded-lg aspect-video w-1/2 my-4 mx-auto"
            />
          )
        default:
          return 'Nothing to see here...'
      }
    },
    [INLINES.HYPERLINK]: AnimatedLink,
    [BLOCKS.DOCUMENT]: (_: Node, children: JSX.Element): ReactNode => children,
    [BLOCKS.PARAGRAPH]: (_: Node, children: JSX.Element): ReactNode => (
      <p>{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_: Node, children: JSX.Element): ReactNode => (
      <Heading1>{children}</Heading1>
    ),
    [BLOCKS.HEADING_2]: (_: Node, children: JSX.Element): ReactNode => (
      <Heading2>{children}</Heading2>
    ),
    [BLOCKS.HEADING_3]: (_: Node, children: JSX.Element): ReactNode => (
      <Heading3>{children}</Heading3>
    ),
    [BLOCKS.HEADING_4]: (_: Node, children: JSX.Element): ReactNode => (
      <h4>{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (_: Node, children: JSX.Element): ReactNode => (
      <h5>{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (_: Node, children: JSX.Element): ReactNode => (
      <h6>{children}</h6>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (_: Node, children: JSX.Element): ReactNode => (
      <div>{children}</div>
    ),
    [BLOCKS.UL_LIST]: (_: Node, children: JSX.Element): ReactNode => (
      <ul>{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_: Node, children: JSX.Element): ReactNode => (
      <ol>{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_: Node, children: JSX.Element): ReactNode => (
      <li className="ml-8 list-outside list-disc">{children}</li>
    ),
    [BLOCKS.QUOTE]: (_: Node, children: JSX.Element): ReactNode => (
      <blockquote className="p-2 bg-primary-light mt-2 mb-2 border-l-4 border-primary-dark italic">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.TABLE]: (_: Node, children: JSX.Element): ReactNode => (
      <table>
        <tbody>{children}</tbody>
      </table>
    ),
    [BLOCKS.TABLE_ROW]: (node: Node, children: JSX.Element): ReactNode => (
      <tr>{children}</tr>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (
      node: Node,
      children: JSX.Element,
    ): ReactNode => <th>{children}</th>,
    [BLOCKS.TABLE_CELL]: (node: Node, children: JSX.Element): ReactNode => (
      <td>{children}</td>
    ),
    [INLINES.ASSET_HYPERLINK]: (node: Node): ReactNode =>
      defaultInline(INLINES.ASSET_HYPERLINK, node as Inline),
    [INLINES.ENTRY_HYPERLINK]: (node: Node): ReactNode =>
      defaultInline(INLINES.ENTRY_HYPERLINK, node as Inline),
    [INLINES.EMBEDDED_ENTRY]: (node: Node): ReactNode =>
      defaultInline(INLINES.EMBEDDED_ENTRY, node as Inline),
  },
})

interface DocType {
  description: {
    raw: string
    references: Reference[]
  }
  [key: string | number]: any
}

export const richText = (text: DocType): ReactNode | null => {
  const description = text?.description?.raw
  const references = text?.description?.references
  const data = description && JSON.parse(description)

  return description
    ? documentToReactComponents(data, getOptions(references))
    : null
}

export const poorText = (text: DocType): ReactNode | null => {
  const description = text?.description?.raw
  const data = description && JSON.parse(description)

  // https://www.npmjs.com/package/@contentful/rich-text-react-renderer
  return description ? documentToReactComponents(data) : null
}
