import { graphql, useStaticQuery } from "gatsby"

const useResume = () => {
  const data = useStaticQuery(graphql`
    query myQuery {
      imageSharp(
        fluid: { originalName: { eq: "Ann-MarieKemp_ResumeJPG.jpg" } }
      ) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return data.imageSharp.fluid
}

export default useResume
