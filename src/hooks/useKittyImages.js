import { graphql, useStaticQuery } from "gatsby"

const useKittyImages = () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      Image: file(relativePath: { eq: "portfolioImage.JPG" }) {
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
  `)
  return data.Image.childImageSharp.fixed
}

export default useKittyImages
