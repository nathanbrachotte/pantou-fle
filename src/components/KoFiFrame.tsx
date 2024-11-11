import React from 'react'
import { routes } from '../routes'

const KoFiFrame: React.FC = () => {
  return (
    <iframe
      id="kofiframe"
      src={`${routes.kofi}?hidefeed=true&widget=true&embed=true&preview=true`}
      className="mt-8 w-full"
      height="662" // 630 + pt-8
      title="pantou_fle"
    />
  )
}

export default KoFiFrame
