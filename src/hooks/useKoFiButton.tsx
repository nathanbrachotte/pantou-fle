import { useEffect } from 'react'

function useKoFiButton(): void {
  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'
    scriptTag.addEventListener('load', (e) => {
      kofiWidgetOverlay.draw('pantou_fle', {
        type: 'floating-chat',
        'floating-chat.donateButton.text': 'Nous soutenir',
        'floating-chat.donateButton.background-color': '#1C1E52',
        'floating-chat.donateButton.text-color': '#F9FAFF',
      })
    })
    document.body.appendChild(scriptTag)
  }, [])
}

export default useKoFiButton
