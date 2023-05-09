import React from "react"
import "../styles/AboutMe.css"
import ProjectLink from "../components/ProjectLink"
import Layout from "../components/Layout"
import usePortfolioPhoto from "../hooks/usePortfolioPhoto"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

export default () => {
  const portfolioPhoto = usePortfolioPhoto()
  return (
    <Layout>
      <div className="main-page-container" >
        <h1 className="main-page-header ">Hello, my name is Ann-Marie Kemp</h1>
        <div className="about-me-tag index">
          <p>
            I am a <span className="fade-in">Full Stack Software Developer</span> who enjoys <span className="fade-in">troubleshooting</span>, <span className="fade-in">testing</span> and <span className="fade-in">documentation</span>.
          </p>
          <div className="mainpage-project-link-container">
            <ProjectLink
              linkTo="/AboutMe"
              linkText="About Ann-Marie"
            />
            <ProjectLink
              linkTo="/Projects"
              linkText="Projects"
            />
            <ProjectLink
              linkTo="/Crafts"
              linkText="Crafts"
            />
            {/* <ProjectLink
              linkTo="/ContactInfo"
              linkText="Contact Info"
            /> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}
