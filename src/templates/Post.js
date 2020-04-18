import React from "react"
import { graphql } from "gatsby"
import "../styles/posts.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"
import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid {
              src
              srcSet
            }
            id
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
      <h1>{post.frontmatter.title}</h1>
      <p>post by {post.frontmatter.author} </p>
      <Image fluid={post.frontmatter.image.childImageSharp.fluid} />
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export default Post
