import { graphql, useStaticQuery } from "gatsby"

const useKittyImages = () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      Images: allFile(filter: { relativeDirectory: { eq: "kittyPhotos" } }) {
        nodes {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed_withWebp
            }
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  return data.Images.nodes
}

export default useKittyImages
