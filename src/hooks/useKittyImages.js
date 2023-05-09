import { graphql, useStaticQuery } from "gatsby"

const useKittyImages = () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
  Images: allFile(filter: {relativeDirectory: {eq: "kittyPhotos"}}) {
    nodes {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          transformOptions: {cropFocus: CENTER}
        )
      }
    }
  }
}
  `)
  return data.Images.nodes
}

export default useKittyImages
