import React, { useRef } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import DownloadButton from '../shared/DownloadButton'

interface PDFProps {
  title: string
  url: string
}

const PDF: React.FC<PDFProps> = ({ title, url }) => {
  const iframeRef = useRef(null)
  const { width } = useWindowSize()

  return (
    <div className="mx-auto w-full md:w-2/3 max-w-screen-md">
      <div className="relative pb-[148%]">
        <iframe
          key={width}
          ref={iframeRef}
          title={title}
          src={`${url}#toolbar=1&navpanels=0`}
          width={width}
          // To center a container: mx-auto
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute bottom-4 right-4">
          <DownloadButton url={url} />
        </div>
      </div>
    </div>
  )
}

export default PDF
