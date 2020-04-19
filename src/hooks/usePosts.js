import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query baking {
      allMdx(
        filter: { frontmatter: { category: { eq: "baking" } } }
        sort: { fields: fileAbsolutePath, order: ASC }
      ) {
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

export default usePosts
