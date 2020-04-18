import { graphql, useStaticQuery } from "gatsby"

const usePaper = () => {
  const data = useStaticQuery(graphql`
    query paper {
      allMdx(filter: { frontmatter: { category: { eq: "paper" } } }) {
        nodes {
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                fluid {
                  src
                  srcSet
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
export default usePaper
