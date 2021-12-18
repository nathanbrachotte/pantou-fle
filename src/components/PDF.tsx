import React from 'react'
import styled from 'styled-components'

interface PDFProps {
  title: string
  url: string
}

const IFrame = styled.iframe`
  width: 100%;
  min-height: 675px;
`

const PDF: React.FC<PDFProps> = ({ title, url }) => {
  return (
    <IFrame
      title={title}
      src={`${url}#toolbar=0`}
      // style={{ pointerEvents: 'none' }}
    />
  )
}

export default PDF
