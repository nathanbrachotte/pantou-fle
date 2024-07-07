import React from 'react'
import { Book } from '../../assets'
import { colors } from '../colors'

interface EmptyStateProps {
  title?: string
  description?: string
  icon?: React.ReactNode
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'Aucun contenu disponible pour le moment',
  description = "Il n'y a pas encore de contenu disponible pour cette section. Revenez plus tard ! 😊",
  icon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[300px] rounded-lg">
      <div className="mb-4">
        {icon || <Book color={colors['primary-dark']} size={64} />}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 max-w-sm">{description}</p>
    </div>
  )
}

export default EmptyState
