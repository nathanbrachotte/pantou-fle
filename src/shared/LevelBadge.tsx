import React from 'react'
import { Badge } from '../components/Badge'
import { Level } from '../types'

interface LevelBadgeProps {
  text: Level
}

const LevelBadge: React.FC<LevelBadgeProps> = ({ text }) => {
  return <Badge text={text} extraStyle="bg-secondary-dark text-whitish" />
}

export default LevelBadge
