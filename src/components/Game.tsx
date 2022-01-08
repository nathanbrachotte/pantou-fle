import React from 'react'
import styled from 'styled-components'

interface GameProps {
  link: string
}

const IFrameWrapper = styled.div`
  /* height: 0.7 vh; */
  min-height: 675px;
`
const IFrame = styled.iframe`
  width: 100%;
  min-height: 300px;
`

const Game: React.FC<GameProps> = ({ link }) => {
  return (
    <IFrameWrapper>
      <IFrame
        className="rounded-lg z-10  aspect-video"
        title="iframe"
        src={link}
        allowFullScreen={false}
        scrolling="yes"
        frameBorder="0"
      />
    </IFrameWrapper>
  )
}

export default Game
