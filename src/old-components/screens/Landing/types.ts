interface Links {
  id: number
  fontAwesomeIcon: string
  name: string
  url: string
}

interface CentralInfoProps {
  name: string
  roles: string[]
  socialLinks: Links[]
}
