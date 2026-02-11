import * as React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/Layout'

const PrivacyPolicy: React.FC<PageProps> = ({ uri }) => {
  return (
    <Layout
      uri={uri}
      enableAds={false}
      title="Politique de Confidentialité"
      description="Politique de confidentialité de Pantou-fle. Découvrez comment nous protégeons vos données personnelles.">
      <div className="flex w-full justify-center items-center">
        <div className="container flex justify-center flex-col items-center max-w-3xl">
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <article className="prose prose-slate lg:prose-lg mx-auto">
              <h1 className="text-3xl font-bold mb-8">
                Politique de Confidentialité
              </h1>
              <p className="text-gray-600 mb-8">
                Date d&apos;entrée en vigueur : 10 Novembre 2024
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  Bienvenue sur Pantou-fle ! Nous respectons votre vie privée et
                  nous nous engageons à protéger les informations personnelles
                  que vous nous fournissez. Cette Politique de Confidentialité
                  décrit comment nous collectons, utilisons et protégeons vos
                  informations lorsque vous utilisez notre site web.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  2. Informations que Nous Collectons
                </h2>
                <p>
                  Nous pouvons recueillir les types d&apos;informations suivants
                  :
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>
                    Informations personnelles : Cela inclut des données telles
                    que votre adresse IP ou votre localisation, qui peuvent être
                    collectées par l&apos;utilisation de cookies sur notre site.
                  </li>
                  <li>
                    Informations non personnelles : Nous collectons également
                    des données non identifiables afin de mieux comprendre
                    comment les visiteurs utilisent notre site.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  3. Cookies et Technologies de Suivi
                </h2>
                <p>
                  Nous utilisons des cookies pour améliorer votre expérience sur
                  notre site et pour afficher des publicités pertinentes. Les
                  cookies sont de petits fichiers texte stockés sur votre
                  appareil. Le seul fournisseur tiers de cookies sur ce site est
                  Google AdSense.
                </p>
                <p className="mt-4">Cookies Utilisés :</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    Google AdSense : Google AdSense place des cookies sur notre
                    site pour diffuser des publicités adaptées à vos centres
                    d&apos;intérêt. Pour plus d&apos;informations sur la manière
                    dont Google utilise les données collectées via AdSense,
                    veuillez visiter le site des Règles de Confidentialité de
                    Google.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  4. Comment Nous Utilisons Vos Informations
                </h2>
                <p>
                  Les informations que nous recueillons sont utilisées pour :
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>
                    Afficher des publicités personnalisées via Google AdSense
                  </li>
                  <li>
                    Améliorer la fonctionnalité du site et l&apos;expérience
                    utilisateur
                  </li>
                  <li>
                    Surveiller les performances et l&apos;utilisation du site
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  5. Gestion des Préférences de Cookies
                </h2>
                <p>
                  Lors de votre première visite sur notre site, une bannière de
                  cookies vous permet d&apos;accepter ou de refuser les cookies.
                  Vous pouvez modifier vos préférences de cookies à tout moment
                  en visitant notre page de préférences de cookies (ou en
                  supprimant vos cookies et en revenant sur notre site).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  6. Liens Vers des Sites Tiers
                </h2>
                <p>
                  Notre site peut contenir des liens vers des sites web tiers.
                  Nous ne sommes pas responsables des pratiques de
                  confidentialité ou du contenu de ces sites. Nous vous
                  encourageons à consulter les politiques de confidentialité des
                  sites tiers que vous visitez.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  7. Protection des Données
                </h2>
                <p>
                  Nous prenons la protection des données au sérieux et utilisons
                  des mesures de sécurité pour protéger vos informations
                  personnelles contre tout accès, modification ou divulgation
                  non autorisé(e).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  8. Confidentialité des Enfants
                </h2>
                <p>
                  Notre site n&apos;est pas destiné aux enfants de moins de 13
                  ans. Nous ne recueillons pas intentionnellement
                  d&apos;informations personnelles auprès des enfants. Si nous
                  apprenons que des informations sur un enfant ont été
                  collectées, nous prendrons des mesures pour les supprimer.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  9. Modifications de Cette Politique de Confidentialité
                </h2>
                <p>
                  Nous pouvons mettre à jour cette Politique de Confidentialité
                  de temps en temps. Nous vous informerons de toute modification
                  en publiant la nouvelle Politique de Confidentialité sur cette
                  page. Nous vous recommandons de consulter cette page
                  régulièrement pour prendre connaissance des éventuelles mises
                  à jour.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  10. Nous Contacter
                </h2>
                <p>
                  Si vous avez des questions concernant cette Politique de
                  Confidentialité, veuillez nous contacter à
                  <a
                    href="mailto:cathy.nguyen.fle@gmail.com"
                    className="text-primary-dark hover:underline">
                    cathy.nguyen.fle@gmail.com
                  </a>
                  .
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
