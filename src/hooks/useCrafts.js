import { graphql, useStaticQuery } from "gatsby"

const useCrafts = () => {
  const data = useStaticQuery(graphql`
    query crafts {
      allMdx(filter: { frontmatter: { id: { eq: 1 } } }) {
        nodes {
          frontmatter {
            image {
              childImageSharp {
                fluid {
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allMdx.nodes.map(post => ({
    image: post.frontmatter.image.childImageSharp.fluid,
  }))
}

export default useCrafts
