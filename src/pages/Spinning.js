import React from "react"
import Layout from "../components/Layout"
import useSpinning from "../hooks/useSpinning"
import "../styles/BakingWeeks.css"
import PostInfo from "../components/PostInfo"

const Spinning = () => {
  const posts = useSpinning()
  return (
    <Layout>
      <div className="main-page-container">
        <div className="baking-page">
          <p className="page-header">Spinning Projects</p>

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

export default Spinning
