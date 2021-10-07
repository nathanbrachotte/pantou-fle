import React from 'react'
import { Heading, Text, Flex, Box } from 'rebass/styled-components'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import ImageSubtitle from '../ImageSubtitle'
import Section from '../Section'
import { CardContainer, Card } from '../Card'

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
  time: number
}

interface ExternalArticleProps extends SharedArticleProps {
  url: string
}

interface InternalArticleProps extends SharedArticleProps {
  onClick: () => void
}

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const ExternalArticle: React.FC<ExternalArticleProps> = ({
  title,
  text,
  image,
  url,
  date,
  time,
}) => (
  <a
    href={url}
    target="__blank"
    title={title}
    style={{ textDecoration: 'none' }}>
    <Card pb={4} onClick={() => null}>
      <EllipsisHeading m={3} p={1} color="text">
        {title}
      </EllipsisHeading>
      {image && <CoverImage src={image} height="200px" alt={title} />}
      <Text m={3} color="text">
        {text}
      </Text>
      <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
        {`${date} - ${Math.ceil(time)} min`}
      </ImageSubtitle>
    </Card>
  </a>
)

export const InternalArticle: React.FC<InternalArticleProps> = ({
  title,
  text,
  image,
  onClick,
  date,
  time,
}) => (
  <Card pb={4} onClick={onClick}>
    <EllipsisHeading m={3} p={1} color="text">
      {title}
    </EllipsisHeading>
    {image && <CoverImage src={image} height="200px" alt={title} />}
    <Text m={3} color="text">
      {text}
    </Text>
    <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
      {`${date} - ${Math.ceil(time)} min`}
    </ImageSubtitle>
  </Card>
)
