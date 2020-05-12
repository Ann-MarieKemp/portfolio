import React from "react"
import ProjectLink from "../components/ProjectLink"
import Layout from "../components/Layout"
import useCrafts from "../hooks/useCrafts"
import Image from "gatsby-image"

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
            <Image
              alt="wedding table sign"
              fluid={images[0].image}
              className="craft-category-image"
            />
          </div>
          <div className="craft-category-div">
            <ProjectLink
              style={linkStyle}
              linkTo="/BakingWeeks"
              linkText="52 Weeks of Baking"
            />
            <Image
              alt="wedding table sign"
              fluid={images[3].image}
              className="craft-category-image"
            />
          </div>

          <div className="craft-category-div">
            <ProjectLink
              style={linkStyle}
              linkTo="/Knitting"
              linkText="Knitting"
            />
            <Image
              alt="wedding table sign"
              fluid={images[4].image}
              className="craft-category-image"
            />
          </div>
          <div className="craft-category-div">
            <ProjectLink
              style={linkStyle}
              linkTo="/Crochet"
              linkText="Crochet"
            />
            <Image
              alt="wedding table sign"
              fluid={images[5].image}
              className="craft-category-image"
            />
          </div>
          <div className="craft-category-div">
            <ProjectLink
              style={linkStyle}
              linkTo="/Spinning"
              linkText="Spinning"
            />
            <Image
              alt="spinning wheel bobbin"
              fluid={images[1].image}
              className="craft-category-image"
            />
          </div>
          <div className="craft-category-div">
            <ProjectLink
              style={linkStyle}
              linkTo="/Weaving"
              linkText="Weaving"
            />
            <Image
              alt="spinning wheel bobbin"
              fluid={images[2].image}
              className="craft-category-image rotate"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Crafts
