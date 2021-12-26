import React from 'react'
import { Heading, Text } from 'rebass/styled-components'
import styled from 'styled-components'
import ImageSubtitle from './ImageSubtitle'
import { Card } from './Card'

const WORD_PER_MINUTE = 200

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`

interface SharedArticleProps {
  title: string
  text: string
  image: string
  date: string
}

interface InternalArticleProps extends SharedArticleProps {
  onClick: () => void
}

const CoverImage = styled.img`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`

export const Article: React.FC<InternalArticleProps> = ({
  title,
  text,
  image,
  onClick,
  date,
}) => (
  <Card pb={4} onClick={onClick}>
    <EllipsisHeading m={3} p={1} color="text">
      {title}
    </EllipsisHeading>
    {image && <CoverImage src={image} height="200px" alt={title} />}
    <Text m={3} color="textLight">
      {text}
    </Text>
    <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
      {`${new Date(date).toLocaleDateString()} - ${Math.ceil(
        text?.length / WORD_PER_MINUTE,
      )} min`}
    </ImageSubtitle>
  </Card>
)
