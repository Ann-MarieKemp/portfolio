import { graphql, useStaticQuery } from "gatsby"

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
  return data.allMdx.nodes.map(post => ({
    image: post.frontmatter.image.childImageSharp.gatsbyImageData,
  }))
}

export default useCrafts
