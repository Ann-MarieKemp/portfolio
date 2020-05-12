import React from "react"
import ProjectLink from "../components/ProjectLink"
import Layout from "../components/Layout"
import useCrafts from "../hooks/useCrafts"
import Image from "gatsby-image"

const Crafts = () => {
  const images = useCrafts()
  console.log(images)
  return (
    <Layout>
      <div className="main-page-container">
        <p className="page-header crafts">Craft Projects</p>
        <div className="mainpage-project-link-container">
          <div>
            <Image fluid={images[0].image} className="craft-category-image" />
            <ProjectLink linkTo="/PaperCrafts" linkText="Paper/Other" />
          </div>
          <ProjectLink linkTo="/BakingWeeks" linkText="52 Weeks of Baking" />
          <ProjectLink linkTo="/Knitting" linkText="Knitting" />
          <ProjectLink linkTo="/Crochet" linkText="Crochet" />
          <ProjectLink linkTo="/Spinning" linkText="Spinning" />
          <ProjectLink linkTo="/Weaving" linkText="Weaving" />
        </div>
      </div>
    </Layout>
  )
}

export default Crafts
