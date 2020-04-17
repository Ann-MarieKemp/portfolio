import React from "react"
import Navbar from "../components/Navbar"
import Projects from "./Projects"
import AboutMe from "./AboutMe"
import "../styles/AboutMe.css"
import ProjectLink from "../components/ProjectLink"
import useInstagram from "../hooks/useInstagram"

export default () => (
  <>
    {console.log(useInstagram())}
    <Navbar />
    <div className="main-page-container">
      <p className="page-header main-name">Ann-Marie Kemp</p>
      <div className="about-me-tag index">
        <p>
          Full Stack Software Engineer based in New York City with a passion for
          front-end development and debugging weird issues.
        </p>
        <div className="mainpage-project-link-container">
          <ProjectLink linkTo="/AboutMe" linkText="About Ann-Marie" />
          <ProjectLink linkTo="/Projects" linkText="Projects" />
          {/* <ProjectLink linkTo="/Crafts" linkText="Crafts" />
          <ProjectLink linkTo="/ContactInfo" linkText="Contact Info" /> */}
        </div>
      </div>
    </div>
  </>
)
