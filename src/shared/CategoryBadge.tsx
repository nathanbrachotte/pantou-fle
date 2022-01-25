import React from 'react'
import { Badge } from '../components/Badge'
import { getActivityTypeLabel } from '../helpers'
import { ActivityType } from '../types'

interface CategoryBadgeProps {
  text: ActivityType
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ text }) => {
  return <Badge text={getActivityTypeLabel(text)} />
}

export default CategoryBadge
