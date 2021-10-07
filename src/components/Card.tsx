import styled from 'styled-components'
import { Card as CardRebass } from 'rebass/styled-components'
import { breakpoints } from '../styles/sizes'

interface CardContainerProps {
  minWidth?: string
}

export const CardContainer = styled.div<CardContainerProps>`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.minWidth || '300px'}, 1fr)
  );
  justify-items: center;
  ${breakpoints.xs} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`

interface CardProps {
  onClick?: () => void
}

export const Card = styled(CardRebass).attrs({
  bg: 'white',
  boxShadow: 0,
})<CardProps>`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  border-radius: 8px;
  height: 100%;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`

export default Card
