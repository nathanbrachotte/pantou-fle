import React, { Fragment } from 'react'
import Headroom from 'react-headroom'
import FontAwesomeIcon from 'react-fontawesome'
import { navigate } from 'gatsby'
import { Flex } from 'rebass/styled-components'
import styled from 'styled-components'
import { SectionLinks } from 'react-scroll-section'

import DarkModeToggle from './DarkModeToggle'
import useTheme from '../../hooks/useTheme'

const HeaderContainer = styled(Headroom)`
  background-color: ${(props) => props.theme.colors.primaryDark};
  width: 100%;
`

const Header: React.FC = () => {
  const theme = useTheme()

  const homeLink = (
    <FontAwesomeIcon
      name="arrow-left"
      size="2x"
      onClick={() => navigate('/')}
      style={{
        color: theme.colors.alwaysWhite,
        cursor: 'pointer',
      }}
    />
  )

  return (
    <HeaderContainer disable>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}>
        <SectionLinks>
          {() => {
            return (
              <Fragment>
                {homeLink}
                <Flex mb={10} mr={[0, 3, 5]} />
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
