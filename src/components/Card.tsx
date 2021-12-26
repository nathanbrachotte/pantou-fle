import styled from 'styled-components'
import { Card as CardRebass } from 'rebass/styled-components'
import { breakpoints, sizeUpperBand } from '../styles/sizes'
import { BORDER_RADIUS } from './constants'

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
`

interface CardProps {
  onClick?: () => void
}

export const Card = styled(CardRebass).attrs({
  bg: 'white',
  boxShadow: 0,
})<CardProps>`
  position: relative;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  top: 0;
  border-radius: ${BORDER_RADIUS};
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    top: -20px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
  width: 100%;
`

export default Card
