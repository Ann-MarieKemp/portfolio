import { graphql, useStaticQuery } from "gatsby"

const useKnitting = () => {
  const data = useStaticQuery(graphql`
    query knitting {
      allMdx(filter: { frontmatter: { category: { eq: "knitting" } } }) {
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
export default useKnitting
