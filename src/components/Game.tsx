import React from 'react'

interface GameProps {
  link: string
}

const Game: React.FC<GameProps> = ({ link }) => {
  return (
    <iframe
      className="rounded-lg z-10 aspect-video w-full"
      title="iframe"
      src={link}
      allowFullScreen={false}
      scrolling="yes"
      frameBorder="0"
    />
  )
}

export default Game
