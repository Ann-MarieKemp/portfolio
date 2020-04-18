import React from "react"
import "../styles/BakingWeeks.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const PostInfo = ({ posts }) => {
  return (
    <>
      {posts.map(post => {
        return (
          <div className="weeks-of-baking-container">
            <div className="post-preview-container" key={post.title}>
              <Image className="post-preview-image" fluid={post.image} />
              <Link className="category-link" to={`/${post.slug}`}>
                {post.title}
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default PostInfo
