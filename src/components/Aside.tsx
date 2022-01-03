import React from 'react'
import RoundButton from './RoundButton'

interface AsideProps {}

const Aside: React.FC<AsideProps> = ({}) => {
  return (
    <aside className="bg-red-500 px-4">
      <RoundButton label="facebook" link="/a1" />
    </aside>
  )
}

export default Aside
