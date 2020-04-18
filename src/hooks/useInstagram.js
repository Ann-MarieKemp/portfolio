import { graphql, useStaticQuery } from "gatsby"

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query instaPhotos {
      images: allInstaNode {
        nodes {
          localFile {
            childImageSharp {
              fluid(maxHeight: 300, maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return data.images.nodes
}

export default useInstagram
