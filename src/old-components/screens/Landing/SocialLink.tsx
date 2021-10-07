import React from 'react'

import FontAwesomeIcon from 'react-fontawesome'
import { Box, Flex, Link } from 'rebass/styled-components'
import styled from 'styled-components'
import { Tooltip } from '../../../shared/Tooltip'

import { Color } from '../../../typings/colors'

interface SocialLinkProps {
  fontAwesomeIcon: string
  name: string
  url: string
  color?: Color
}

interface IconLinkProps {
  style: {
    color?: Color
  }
}

const IconLink = styled(Link)<IconLinkProps>`
  transition: color 0.5s;
  color: ${(props) => {
    return props.style.color
      ? props.theme.colors[props.style.color]
      : props.theme.colors.primaryDark
  }};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`

export const SocialLink: React.FC<SocialLinkProps> = ({
  fontAwesomeIcon,
  name,
  url,
  color,
}) => (
  <Tooltip content={name}>
    <IconLink
      href={url}
      target="_blank"
      style={{ color }}
      rel="noreferrer"
      aria-label={name}>
      <FontAwesomeIcon name={fontAwesomeIcon} />
    </IconLink>
  </Tooltip>
)

export const SocialLinksWrapper = ({
  socialLinks,
}: {
  socialLinks: Links[]
}) => (
  <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
    {socialLinks.map(({ id, ...rest }) => (
      <Box mx={3} fontSize={[5, 6, 6]} key={id}>
        <SocialLink {...rest} />
      </Box>
    ))}
  </Flex>
)
