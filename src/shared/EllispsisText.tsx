import styled from 'styled-components'

const EllipsisText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export default EllipsisText
