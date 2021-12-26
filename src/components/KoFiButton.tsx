import React from 'react'

const KoFiButton: React.FC = () => {
  // let kofiWidgetOverlay: any

  return (
    <iframe
      id="kofiframe"
      src="https://ko-fi.com/pantou_fle/?hidefeed=true&widget=true&embed=true&preview=true"
      // style="border:none;width:100%;padding:4px;background:#f9f9f9;"
      height="712"
      title="pantou_fle"
    />
  )
}

export default KoFiButton
