import styled from 'styled-components'
import { Color } from '../../colors'

interface TriangleProps {
  color: string
  height: string[]
  width: string[]
  invertX?: boolean
  invertY?: boolean
}

const Triangle = styled.div<TriangleProps>`
  position: absolute;
  width: 0;
  height: 0;
  z-index: -2;

  ${(props) => {
    const color = props.theme.colors[props.color as Color] || props.color
    const border = `${props.height[0]} solid ${color};`
    return props.invertY
      ? `border-bottom: ${border}; bottom: 0;`
      : `border-top: ${border};`
  }}

  ${(props) => {
    const border = `${props.width[0]} solid transparent;`
    return props.invertX
      ? `border-left: ${border}; right: 0;`
      : `border-right: ${border};`
  }}


  @media only screen and (min-width: 768px) {
    ${(props) => {
      const height = props.height[1]
      return props.invertY
        ? `border-bottom-width: ${height};`
        : `border-top-width: ${height};`
    }}

    ${(props) => {
      const width = props.width[1]
      return props.invertX
        ? `border-left-width: ${width};`
        : `border-right-width: ${width};`
    }};
  }
`

export default Triangle
