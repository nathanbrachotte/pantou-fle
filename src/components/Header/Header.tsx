import React, { Fragment } from 'react'
import Headroom from 'react-headroom'
import FontAwesomeIcon from 'react-fontawesome'
import { navigate } from 'gatsby'
import { Flex } from 'rebass/styled-components'
import styled from 'styled-components'
import { SectionLinks } from 'react-scroll-section'

import DarkModeToggle from './DarkModeToggle'
import RouteLink from '../RouteLink'
import useTheme from '../../hooks/useTheme'
// import Logo from '../Logo/Contenful.svg'

const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1)

const HeaderContainer = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`

interface Link {
  onClick: () => void
  isSelected: boolean
}

const formatLinks = (allLinks: unknown): unknown =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home'
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          }
    },
    { links: [], home: null },
  )

const Header: React.FC = () => {
  const theme = useTheme()

  return (
    <HeaderContainer>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}>
        <SectionLinks>
          {/* TODO: Type react-scroll-section SectionLinks component */}
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks) as {
              home: Link
              links: {
                name: string
                value: Link
              }[]
            }

            const homeLink = home ? (
              <FontAwesomeIcon
                name="home"
                size="2x"
                onClick={home.onClick}
                style={{
                  color: theme.colors.alwaysWhite,
                  cursor: 'pointer',
                }}
              />
            ) : (
              <FontAwesomeIcon
                name="home"
                size="2x"
                onClick={() => navigate('/')}
                style={{
                  color: theme.colors.alwaysWhite,
                  cursor: 'pointer',
                }}
              />
            )

            const navLinks = links.map(({ name, value }) => (
              <RouteLink
                key={name}
                onClick={value.onClick}
                isSelected={value.isSelected}
                name={name}
              />
            ))

            return (
              <Fragment>
                {homeLink}
                <Flex mb={10} mr={[0, 3, 5]}>
                  {navLinks}
                </Flex>
                <DarkModeToggle />
              </Fragment>
            )
          }}
        </SectionLinks>
      </Flex>
    </HeaderContainer>
  )
}

export default Header
