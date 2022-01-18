import React from 'react'
import DownloadButton from '../shared/DownloadButton'

interface PDFProps {
  title: string
  url: string
}

const PDF: React.FC<PDFProps> = ({ title, url }) => {
  return (
    <div className="mx-auto w-full md:w-2/3 max-w-screen-md">
      <div className="relative pb-[141%]">
        <iframe
          title={title}
          src={`${url}#toolbar=0`}
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
