import React, { FunctionComponent } from 'react'
import Slide from 'react-reveal/Slide'
import { Section } from 'react-scroll-section'
import { Heading } from 'rebass/styled-components'
import styled from 'styled-components'
import LinkAnimated from './LinkAnimated'
import { breakpoints } from '../styles/sizes'
import Spacer from '../shared/Spacer'

const SectionContainer = styled.div`
  min-height: 70vh;
  /* min-height: 100vh; */
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;

  ${breakpoints.xs} {
    padding: 2em 1em;
  }
`

const DefaultBackground = () => <div />

interface ContainerProps {
  id: string
  Background: FunctionComponent
}

const Container: React.FC<ContainerProps> = ({
  id,
  children,
  Background = DefaultBackground,
}) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background />
    <SectionContainer>
      <Spacer />
      {children}
      <Spacer />
    </SectionContainer>
  </Section>
)

interface HeaderProps {
  name: string
  icon?: string
  label?: string
}

const Header: React.FC<HeaderProps> = ({ name, icon = '', label = '' }) => {
  return (
    <Slide left>
      <Heading fontSize={[3, 4, 5]} color="textDark" mb={4}>
        <LinkAnimated color="secondaryDark" selected>
          {name}
          {icon && (
            <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
              {icon}
            </span>
          )}
        </LinkAnimated>
      </Heading>
    </Slide>
  )
}

export default {
  Container,
  Header,
}
