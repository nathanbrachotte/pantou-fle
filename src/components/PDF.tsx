import React from 'react'

interface PDFProps {
  title: string
  url: string
}

const PDF: React.FC<PDFProps> = ({ title, url }) => {
  return (
    <iframe
      title={title}
      src={`${url}#toolbar=0`}
      // To center a container: mx-auto
      className="mx-auto pointer-events-none w-full bg-red-600"
    />
  )
}

export default PDF
