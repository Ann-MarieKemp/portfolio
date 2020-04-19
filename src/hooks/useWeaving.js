import { graphql, useStaticQuery } from "gatsby"

const useWeaving = () => {
  const data = useStaticQuery(graphql`
    query weaving {
      allMdx(filter: { frontmatter: { category: { eq: "weaving" } } }) {
        nodes {
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
    image: post.frontmatter.image.childImageSharp.fluid,
  }))
}
export default useWeaving
