import React from "react"
import { graphql } from "gatsby"
import "../styles/posts.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        author
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
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export default Post
