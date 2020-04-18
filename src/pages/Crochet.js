import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import useCrochet from "../hooks/useCrochet"
import "../styles/BakingWeeks.css"
import { Link } from "gatsby"
import PostInfo from "../components/PostInfo"

const Crochet = () => {
  const posts = useCrochet()
  return (
    <Layout>
      <div className="main-page-container">
        <div className="baking-page">
          <p className="page-header">Crochet Projects</p>
          {posts.length ? (
            <PostInfo posts={posts} />
          ) : (
            <p className="sub-header">
              Sorry, there are no posts to display right now
            </p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Crochet
