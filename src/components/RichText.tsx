import React, { ReactNode } from 'react'

import {
  BLOCKS,
  INLINES,
  MARKS,
  Document,
  Inline,
  Node,
} from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'

// https://www.npmjs.com/package/@contentful/rich-text-react-renderer

// const CustomComponent: React.FC<{ title: any; description: any }> = ({
//   title,
//   description,
// }) => (
//   <div>
//     <h2>{title}</h2>
//     <p>{description}</p>
//   </div>
// )

const Bold: React.FC = ({ children }) => {
  console.log({ children })
  return <span className="bold">{children}</span>
}

// const Text: React.FC = ({ children }) => (
//   <span className="align-center">{children}</span>
// )

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

const AnimatedLink: React.FC = (node, children) => {
  console.log({ node })
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
      type: {node.nodeType} id: {node.data.target.sys.id}
    </span>
  )
}

export const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <span className="font-bold">{text}</span>,
    [MARKS.ITALIC]: (text: string) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text: string) => <u>{text}</u>,
    [MARKS.CODE]: (text: string) => <code>{text}</code>,
  },
  renderNode: {
    // [BLOCKS.EMBEDDED_ASSET]: (node: Node, next) => {
    //   // find the asset in the assetMap by ID
    //   const asset = assetMap.get(node.data.target.sys.id)

    //   switch (asset.contentType) {
    //     case 'video/mp4':
    //       return (
    //         <video width="100%" height="100%" controls>
    //           <source src={asset.url} type="video/mp4" />
    //         </video>
    //       )
    //     case 'image/png':
    //       return (
    //         <img
    //           src={asset.url}
    //           height={asset.height}
    //           width={asset.width}
    //           alt={asset.description}
    //         />
    //       )
    //     default:
    //       return 'Nothing to see here...'
    //   }
    // },
    [INLINES.HYPERLINK]: AnimatedLink,
    [BLOCKS.DOCUMENT]: (_: Node, children: JSX.Element): ReactNode => children,
    [BLOCKS.PARAGRAPH]: (_: Node, children: JSX.Element): ReactNode => (
      <p>{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_: Node, children: JSX.Element): ReactNode => (
      <h1>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_: Node, children: JSX.Element): ReactNode => (
      <h2>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_: Node, children: JSX.Element): ReactNode => (
      <h3>{children}</h3>
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
      <blockquote className="p-2 bg-primary-light mb-4 border-l-4 border-primary-dark italic">
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
}

interface DocType {
  description: {
    raw: string
  }
}

export const richText = (text: DocType): ReactNode | null => {
  const description = text?.description?.raw
  const data = description && JSON.parse(description)

  return description ? documentToReactComponents(data, options) : null
}
