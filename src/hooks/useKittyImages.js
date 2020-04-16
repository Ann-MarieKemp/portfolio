import { graphql, useStaticQuery } from "gatsby"

const useKittyImages = () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      Images: allFile(filter: { relativeDirectory: { eq: "kittyPhotos" } }) {
        nodes {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
            id
          }
        }
      }
    }
  `)
  console.log(data.Images.nodes)
  return data.Images.nodes
}

export default useKittyImages
