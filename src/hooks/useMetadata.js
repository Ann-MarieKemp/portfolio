import { graphql, useStaticQuery } from "gatsby"

const useMetadata = () => {
  const data = useStaticQuery(graphql`
    query metadata {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)
  return {
    description: data.site.siteMetadata.description,
    title: data.site.siteMetadata.title,
  }
}

export default useMetadata
