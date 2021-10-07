import React from 'react'
import Triangle from '../../shared/Triangle'

const Background: React.FC = () => (
  <div>
    {/* bottom left */}
    <Triangle
      color="backgroundDark"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
      invertY
      invertX
    />

    {/* top right */}
    <Triangle
      color="secondary"
      height={['35vh', '60vh']}
      width={['95vw', '60vw']}
      invertX
    />

    {/* left */}
    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    {/* top left */}
    <Triangle
      color="primaryDark"
      height={['20vh', '15vh']}
      width={['98vw', '90vw']}
    />

    {/* bottom left */}
    <Triangle
      color="primaryDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
)

export default Background
