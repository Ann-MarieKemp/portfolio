import React from "react"
import Layout from "../components/Layout"
import usePosts from "../hooks/usePosts"
import "../styles/BakingWeeks.css"
import PostInfo from "../components/PostInfo"

const BakingWeeks = () => {
  const posts = usePosts()
  return (
    <Layout>
      <div className="main-page-container">
        <div className="baking-page baking-links">
          <p className="page-header">52 Weeks of Baking 2015</p>
          <p className="description-text baking">
            In 2015 Ann-Marie participated in a reddit challenge where she baked
            a different dessert every week for a year. These are the posts she
            made on reddit from that year.
          </p>

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

export default BakingWeeks
