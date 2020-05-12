import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/Posts.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import ProjectLink from "../components/ProjectLink"

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
        category
        rotate
      }
      body
    }
  }
`
const Post = ({ data: { mdx: post } }) => {
  let imageClass = "post-image"
  let newCategory = post.frontmatter.category
  let display = post.frontmatter.category
  if (post.frontmatter.category === "baking") {
    newCategory = "BakingWeeks"
    display = "All Bakes"
  } else if (post.frontmatter.category === "paper") {
    newCategory = "PaperCrafts"
    display = "All Paper/Other"
  } else if (post.frontmatter.category === "weaving") {
    newCategory = "Weaving"
    display = "All Weaving"
  } else if (post.frontmatter.category === "spinning") {
    newCategory = "Spinning"
    display = "All Spinning"
  } else if (post.frontmatter.category === "crochet") {
    newCategory = "Crochet"
    display = "All Crochet"
  } else if (post.frontmatter.category === "knitting") {
    newCategory = "Knitting"
    display = "All Knitting"
  }
  if (post.frontmatter.rotate && post.frontmatter.rotate === true) {
    imageClass = "post-image-rotate"
  }
  return (
    <Layout>
      <Image
        className={imageClass}
        fluid={post.frontmatter.image.childImageSharp.fluid}
      />
      <MDXRenderer>{post.body}</MDXRenderer>

      {post.frontmatter.images !== null && (
        <Carousel images={post.frontmatter.images} />
      )}
      <ProjectLink
        className="category-link"
        linkTo={`/${newCategory}`}
        linkText={`Back to ${display}`}
      />
    </Layout>
  )
}

export default Post
