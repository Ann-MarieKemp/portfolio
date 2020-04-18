import { graphql, useStaticQuery } from "gatsby"

const useKittyImages = () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      Images: allFile(filter: { relativeDirectory: { eq: "kittyPhotos" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
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
