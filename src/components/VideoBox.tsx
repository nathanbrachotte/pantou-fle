import React from 'react'
import { Box } from 'rebass/styled-components'

interface VideoBoxProps {
  video: string
  title: string
}

const VideoBox: React.FC<VideoBoxProps> = ({ video, title }) => {
  // console.log({ video, title })

  return (
    <Box
      sx={{
        width: '100%',
        height: 0,
        paddingBottom: `${900 / 16}%`,
        position: 'relative',
        overflow: 'hidden',
        '& > iframe': {
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          bottom: 0,
          left: 0,
          border: 0,
        },
      }}>
      <iframe
        title={title}
        width="560"
        height="315"
        src={video}
        // src="https://www.youtube.com/embed/64h3TKCx0jY"
        // src="https://www.youtube.com/embed/GNCd_ERZvZM"
        frameBorder="0"
        allowFullScreen
      />
    </Box>
  )
}

export default VideoBox
