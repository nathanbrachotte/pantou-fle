import React from 'react'

const KoFiFrame: React.FC = () => {
  return (
    <iframe
      id="kofiframe"
      src="https://ko-fi.com/pantou_fle/?hidefeed=true&widget=true&embed=true&preview=true"
      className="mt-8 w-full"
      height="662" // 630 + pt-8
      title="pantou_fle"
    />
  )
}

export default KoFiFrame
