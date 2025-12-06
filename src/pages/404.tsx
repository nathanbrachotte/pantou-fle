import { PageProps, Link } from 'gatsby'
import React from 'react'
import clsx from 'clsx'
import Layout from '../components/Layout'

const NotFoundPage: React.FC<PageProps> = ({ uri }) => (
  <Layout uri={uri} enableAds={false}>
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-600 mb-6">
        Page non trouvée
      </h2>
      <p className="text-gray-500 text-center mb-8 max-w-md">
        Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        className={clsx(
          'text-white hover:scale-105 bg-primary-dark',
          'my-2 border-2 border-background flex-none rounded-xl inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary-dark py-2 px-3 z-10',
          'transition-all duration-150',
        )}>
        Retour à l&apos;accueil
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
