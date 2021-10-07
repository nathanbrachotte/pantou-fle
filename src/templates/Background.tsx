import React from 'react'
import Triangle from '../shared/Triangle'

const Background: React.FC = () => (
  <>
    <Triangle
      color="secondaryLight"
      height={['3vh', '10vh']}
      width={['100vw', '100vw']}
    />
    <Triangle
      color="primaryLight"
      height={['2vh', '8vh']}
      width={['70vw', '70vw']}
      invertX
    />
    <Triangle
      color="secondary"
      height={['5vh', '10vh']}
      width={['70vw', '40vw']}
      invertY
    />
    <Triangle
      color="primaryDark"
      height={['5vh', '5vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </>
)

export default Background
