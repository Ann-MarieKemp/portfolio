import React from "react"
import Layout from "../components/Layout"
import usePaper from "../hooks/usePaper"
import "../styles/BakingWeeks.css"
import PostInfo from "../components/PostInfo"

const PaperCrafts = () => {
  const posts = usePaper()
  return (
    <Layout>
      <div className="main-page-container">
        <div className="baking-page">
          <p className="page-header">Paper/Other Materials</p>

          <div className="baking-box">
            {posts.length ? (
              <PostInfo posts={posts} />
            ) : (
              <p className="sub-header">
                Sorry, there are no posts to display right now
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PaperCrafts
