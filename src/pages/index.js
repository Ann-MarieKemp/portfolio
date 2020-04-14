import React from "react"
import Navbar from "../components/Navbar"
import Projects from "./Projects"
import AboutMe from "./AboutMe"
import "../styles/AboutMe.css"
import ProjectLink from "../components/ProjectLink"

export default () => (
  <>
    <Navbar />
    <div className="main-page-container">
      <p className="page-header main-name">Ann-Marie Kemp</p>
      <div className="about-me-tag">
        <p>Full Stack Software Engineer based in New York City.</p>
      </div>
    </div>
    <div>
      <ProjectLink
        linkTo="/AboutMe"
        linkText="About Ann-Marie"
        imgSrc="../../static/projectImages/portfolioImage.jpg"
        altText="photo of A-M"
      />
    </div>
  </>
)
