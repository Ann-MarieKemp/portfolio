import { graphql, useStaticQuery } from "gatsby"
import { getImage } from 'gatsby-plugin-image'

const useCrafts = () => {
  console.log('in use crafts')
  const data = useStaticQuery(graphql`
    query crafts {
  allMdx(filter: {}) {
    nodes {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}
  `)
  return data.allMdx.nodes.map(post => getImage(post.frontmatter.image.childImageSharp.gatsbyImageData))
}

export default useCrafts
