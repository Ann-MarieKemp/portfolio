import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import usePosts from "../hooks/usePosts"
import "../styles/BakingWeeks.css"
import { Link } from "gatsby"

const BakingWeeks = () => {
  const posts = usePosts()
  return (
    <Layout>
      <div className="main-page-container">
        {posts.map(post => {
          return (
            <div className="post-preview-container" key={post.title}>
              <Image className="post-preview-image" fluid={post.image} />
              <Link className="category-link" to={`/${post.slug}`}>
                {post.title}
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BakingWeeks
