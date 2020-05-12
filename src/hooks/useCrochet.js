import { graphql, useStaticQuery } from "gatsby"

const useCrochet = () => {
  const data = useStaticQuery(graphql`
    query crochet {
      allMdx(filter: { frontmatter: { category: { eq: "crochet" } } }) {
        nodes {
          frontmatter {
            rotate
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
export default useCrochet
