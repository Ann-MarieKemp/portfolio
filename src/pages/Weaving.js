import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import useWeaving from "../hooks/useWeaving"
import "../styles/BakingWeeks.css"
import { Link } from "gatsby"

const Weaving = () => {
  const posts = useWeaving()
  return (
    <Layout>
      <div className="main-page-container">
        <div className="baking-page">
          <p className="page-header">Weaving Projects</p>

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

export default Weaving
