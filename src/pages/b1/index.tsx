import React from 'react'
import { StaticQuery, graphql, PageProps } from 'gatsby'
import Root from '../../components/Root'

const A1Page: React.FC<PageProps> = ({ uri }) => {
  return (
    <Root uri={uri}>
      <StaticQuery
        query={graphql`
          query AllB1Query {
            allContentfulFicheExercice(
              filter: { level: { title: { eq: "B1" } } }
            ) {
              edges {
                node {
                  pdf {
                    id
                    file {
                      url
                    }
                  }
                  level {
                    title
                  }
                }
              }
            }
            allContentfulGame(filter: { level: { title: { eq: "B1" } } }) {
              edges {
                node {
                  title
                  link
                  level {
                    title
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          console.log({ data })
          return <span>yooo B1</span>
        }}
      />
      <p><strong><span style="font-size: 13px; color: rgb(0, 0, 0);">4. Il est en train de _____________ .</span></strong></p><p><span style="color: rgb(0, 0, 0);"><span style="font-size: 13px;"><strong><input type="checkbox"></strong><span style="font-family: sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;"><strong>nager</strong></span></span></span></p><p><span style="color: rgb(0, 0, 0);"><span style="font-size: 13px;"><strong><input type="checkbox">se mettre</strong></span></span></p><p><span style="color: rgb(0, 0, 0);"><span style="font-size: 13px;"><strong><input type="checkbox"></strong></span></span><strong><span style="color: rgb(0, 0, 0); font-size: 13px;">se baigner</span></strong></p>
    </Root>
  )
}

export default A1Page
