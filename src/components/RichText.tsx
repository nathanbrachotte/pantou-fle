import React, { ReactNode } from 'react'

import { BLOCKS, INLINES, MARKS, Document } from '@contentful/rich-text-types'
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

export const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <span className="font-bold">{text}</span>,
  },
  renderNode: {
    // [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: AnimatedLink,
    [BLOCKS.EMBEDDED_ENTRY]: AnimatedLink,
    [INLINES.HYPERLINK]: AnimatedLink,
    // [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    // [BLOCKS.EMBEDDED_ENTRY]: (node) => {
    //   const { title, description } = node.data.target.fields
    //   return <CustomComponent title={title} description={description} />
    // },
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
