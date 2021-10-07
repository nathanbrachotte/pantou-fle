import React from 'react'
import { Image, Text, Flex, Box } from 'rebass/styled-components'
import styled from 'styled-components'
import { Card } from '../../components/Card'
import { SocialLink } from '../Landing/SocialLink'
import ImageSubtitle from '../../components/ImageSubtitle'
import Hide from '../../components/Hide'
import { breakpoints } from '../../../styles/sizes'

const CARD_HEIGHT = '200px'

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${breakpoints.xs} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${breakpoints.xs} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${breakpoints.xs} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(-${CARD_HEIGHT} - 3.5px);

  ${breakpoints.xs} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`

interface ProjectProps {
  name: string
  description: string
  projectUrl: string
  repositoryUrl: string
  type: string
  publishedDate: string
  logo: {
    image: {
      src: string
    }
    title: string
  }
}

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  projectUrl,
  repositoryUrl,
  type,
  publishedDate,
  logo,
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="text">
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }} color="text">
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage src={logo.image.src} alt={logo.title} />
        <ProjectTag>
          <Flex
            style={{
              float: 'right',
            }}>
            <Box mx={1} fontSize={5}>
              <SocialLink
                name="Check repository"
                fontAwesomeIcon="github"
                url={repositoryUrl}
              />
            </Box>
            <Box mx={1} fontSize={5}>
              <SocialLink
                name="See project"
                fontAwesomeIcon="globe"
                url={projectUrl}
              />
            </Box>
          </Flex>
          <ImageSubtitle bg="primary" color="white" y="bottom" x="right" round>
            {type}
          </ImageSubtitle>
          <Hide query={breakpoints.xs}>
            <ImageSubtitle bg="backgroundDark">{publishedDate}</ImageSubtitle>
          </Hide>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </Card>
)

export default Project
