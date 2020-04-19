import React from "react"
import { graphql } from "gatsby"
import "../styles/Posts.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            id
          }
        }
        images {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        author
        title
      }
      body
    }
  }
`
const Post = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <Image
        className="post-image"
        fluid={post.frontmatter.image.childImageSharp.fluid}
      />
      <MDXRenderer>{post.body}</MDXRenderer>
      {console.log(post.frontmatter.images)}
      {post.frontmatter.images.length && (
        <Carousel images={post.frontmatter.images} />
      )}
    </Layout>
  )
}

export default Post
