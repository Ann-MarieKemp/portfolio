import React from "react"
import Layout from "../components/Layout"
import useKnitting from "../hooks/useKnitting"
import "../styles/BakingWeeks.css"
import PostInfo from "../components/PostInfo"

const Knitting = () => {
  const posts = useKnitting()
  return (
    <Layout>
      <div className="main-page-container">
        <div className="baking-page">
          <p className="page-header">Knitting Projects</p>

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

export default Knitting
