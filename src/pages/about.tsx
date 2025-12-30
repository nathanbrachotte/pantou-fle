import React from 'react'
import { Link, PageProps } from 'gatsby'
import { LinkedInIcon, TwitterIcon } from '../components/icons'
import { N8Logo } from '../../assets/N8Logo'
import Heading2 from '../shared/Heading2'
import Heading1 from '../shared/Heading1'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const AboutPage: React.FC<PageProps> = ({ uri }) => {
  return (
    <Layout uri={uri}>
      <SEO
        title="À propos de nous"
        description="Rencontrez Cathy et Nate, les co-fondateurs passionnés derrière Pantou-fle."
        enableAds={false}
      />
      <div className="flex w-full justify-center items-center">
        <div className="container flex justify-center flex-col items-center max-w-3xl">
          <Heading1>Qui sommes-nous ?</Heading1>
          <div className="grid md:grid-cols-2 gap-12 mt-2 md:mt-8 justify-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
              <div className="relative h-80 w-full">
                <img
                  src="/cathy.webp"
                  alt="Cathy"
                  className="h-full w-full object-cover object-center"
                />
                <Link
                  className="absolute bottom-2 right-2 h-10 hover:scale-105"
                  to="https://www.linkedin.com/in/cathy-nguyen-014b8ba2/">
                  <LinkedInIcon className="h-10 w-10 bg-white rounded-lg" />
                </Link>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Cathy</h2>
                <p className="text-gray-600 mb-4">Co-founder</p>
                <p className="text-gray-800">
                  {`Professeure française originaire de Lyon. Après l'obtention du master en "Sciences de l'éducation" et en "Didactique du français langue étrangère" (FLE), j'ai travaillé pour plusieurs académies de langue et en Alliance Française auprès de différents publics : enfants, adolescents et adultes allant du niveau A1 au niveau B2. 
Passionnée par la conception pédagogique, j'ai crée le site pédagogique Pantou-fle.fr à la fois pour les professeurs et les apprenants qui propose des ressources adaptées, motivantes et contemporaines.`}
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
              <div className="relative h-80 w-full">
                <img
                  src="/nate.webp"
                  alt="Nathan"
                  className="h-full w-full object-cover object-center"
                />
                <Link
                  className="absolute bottom-2 right-2 h-10 hover:scale-105"
                  to="https://www.linkedin.com/in/nathan-brachotte/">
                  <LinkedInIcon className="h-10 w-10 bg-white rounded-lg" />
                </Link>
                <Link
                  className="absolute bottom-2 right-14 h-10 w-10 bg-gray-50 rounded-lg p-2 hover:scale-105"
                  to="https://twitter.com/nathanbrachotte">
                  <TwitterIcon className="h-full w-full" />
                </Link>
                <Link
                  className="absolute bottom-2 left-2 h-10 hover:scale-105"
                  to="https://nathanbrachotte.dev">
                  <N8Logo className="h-10 w-10 bg-white rounded-lg" />
                </Link>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Nathan</h2>
                <p className="text-gray-600 mb-4">Co-founder</p>
                <p className="text-gray-800">
                  {`Software Engineer à Berlin, spécialisé dans les frameworks
                  JavaScript. Nous avons construit ce site web parce que l'accès
                  à des ressources gratuites et de haute qualité pour apprendre
                  est très important pour nous. En tant qu'ingénieur logiciel,
                  j'ai eu la chance d'avoir eu accès à des ressources gratuites
                  et de haute qualité pour apprendre tout au long de ma
                  carrière. Notre objectif est de créer une plateforme qui soit
                  rend la pareil à toute personne souhaitant apprendre le
                  français.`}
                </p>
              </div>
            </div>
          </div>
          <section className="mt-8 sm:mt-16 mb-8">
            <Heading2>Notre vision pour Pantou-fle</Heading2>
            <p className="text-lg">
              Nous voulons créer une plateforme éducative innovante qui rend
              l&apos;apprentissage du français accessible à tous, en combinant
              l&apos;expertise pédagogique et la technologie. Nous aspirons à
              offrir des ressources gratuites, adaptées et motivantes,
              permettant aux apprenants du monde entier de progresser dans leur
              maîtrise du français.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
