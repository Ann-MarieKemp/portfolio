import React from "react"
import "../styles/AboutMe.css"
import ProjectLink from "../components/ProjectLink"
import Layout from "../components/Layout"
import usePortfolioPhoto from "../hooks/usePortfolioPhoto"
import Image from "gatsby-image"

export default () => {
  const portfolioPhoto = usePortfolioPhoto()
  console.log(portfolioPhoto)
  return (
    <Layout>
      <div className="main-page-container">
        <Image className="portfolio-photo" fluid={portfolioPhoto} />
        <p className="main-page-header ">Ann-Marie Kemp</p>
        <div className="about-me-tag index">
          <p>
            Full Stack Software Engineer based in New York City with a passion
            for front-end development and debugging weird issues.
          </p>
          <div className="mainpage-project-link-container">
            <ProjectLink linkTo="/AboutMe" linkText="About Ann-Marie" />
            <ProjectLink linkTo="/Projects" linkText="Projects" />
            <ProjectLink linkTo="/Crafts" linkText="Crafts" />
            <ProjectLink linkTo="/ContactInfo" linkText="Contact Info" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
