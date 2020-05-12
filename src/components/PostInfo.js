import React from "react"
import "../styles/BakingWeeks.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const PostInfo = ({ posts }) => {
  return (
    <>
      {posts.map(post => {
        let imageClass = "post-preview-image"
        if (post.rotate && post.rotate === true) {
          imageClass = "post-preview-image rotate"
        }
        return (
          <div className="weeks-of-baking-container">
            <div className="post-preview-container" key={post.title}>
              <Image className={imageClass} fluid={post.image} />
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
