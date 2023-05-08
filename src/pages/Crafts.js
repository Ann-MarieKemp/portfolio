import React from "react"
import ProjectLink from "../components/ProjectLink"
import Layout from "../components/Layout"
import useCrafts from "../hooks/useCrafts"
import { GatsbyImage } from "gatsby-plugin-image"

const Crafts = () => {
  const images = useCrafts()

  const linkStyle = {
    margin: 0,
  }
  return (
    <Layout>
      <div className="main-page-container">
        <p className="page-header crafts">Craft Projects</p>
        <div className="mainpage-project-link-container">
          <div className="craft-category-div">
            <ProjectLink
              style={linkStyle}
              linkTo="/PaperCrafts"
              linkText="Paper/Other"
            />
            <GatsbyImage
              alt="wedding table sign"
              image={images[0].image}
              className="craft-category-image"
            />
          </div>
          <div className="craft-category-div">
            <ProjectLink
              style={linkStyle}
              linkTo="/BakingWeeks"
              linkText="52 Weeks of Baking"
            />
            <GatsbyImage
              alt="wedding table sign"
              image={images[2].image}
              className="craft-category-image"
            />
          </div>

          <div className="craft-category-div">
            <ProjectLink
              style={linkStyle}
              linkTo="/Knitting"
              linkText="Knitting"
            />
            <GatsbyImage
              alt="wedding table sign"
              image={images[3].image}
              className="craft-category-image"
            />
          </div>
          <div className="craft-category-div">
            <ProjectLink
              style={linkStyle}
              linkTo="/Crochet"
              linkText="Crochet"
            />
            <GatsbyImage
              alt="wedding table sign"
              image={images[4].image}
              className="craft-category-image"
            />
          </div>
          <div className="craft-category-div">
            <ProjectLink
              style={linkStyle}
              linkTo="/Spinning"
              linkText="Spinning"
            />
            <GatsbyImage
              alt="spinning wheel bobbin"
              image={images[1].image}
              className="craft-category-image"
            />
          </div>
          <div className="craft-category-div">
            <ProjectLink
              style={linkStyle}
              linkTo="/Weaving"
              linkText="Weaving"
            />
            <GatsbyImage
              alt="woven blanket"
              image={images[0].image}
              className="craft-category-image rotate"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Crafts
