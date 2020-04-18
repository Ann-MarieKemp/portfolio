import { graphql, useStaticQuery } from "gatsby"

const usePortfolioPhoto = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      image: imageSharp(
        fluid: { originalName: { eq: "mainPortfolioImage.JPG" } }
      ) {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return data.image.fluid
}

export default usePortfolioPhoto
