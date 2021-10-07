import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { withTheme } from 'styled-components'

interface Props {
  theme?: Record<any, any>
}

const Helmet: React.FC<Props> = ({ theme = {} }) => null

export default withTheme(Helmet as any)
