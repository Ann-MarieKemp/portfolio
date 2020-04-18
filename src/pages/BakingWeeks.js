import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import usePosts from "../hooks/usePosts"
import "../styles/BakingWeeks.css"
import { Link } from "gatsby"
import PostInfo from "../components/PostInfo"

const BakingWeeks = () => {
  const posts = usePosts()
  return (
    <Layout>
      <div className="main-page-container">
        <div className="baking-page">
          <p className="page-header">52 Weeks of Baking 2015</p>
          <p className="description-text baking">
            In 2015 Ann-Marie participated in a reddit challenge where she baked
            a different dessert every week for a year. These are the posts she
            made on reddit from that year.
          </p>
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

export default BakingWeeks
