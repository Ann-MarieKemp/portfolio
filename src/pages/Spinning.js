import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import useSpinning from "../hooks/useSpinning"
import "../styles/BakingWeeks.css"
import { Link } from "gatsby"

const Spinning = () => {
  const posts = useSpinning()
  return (
    <Layout>
      <div className="main-page-container">
        <div className="baking-page">
          <p className="page-header">Spinning Projects</p>

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
        </div>
      </div>
    </Layout>
  )
}

export default Spinning
