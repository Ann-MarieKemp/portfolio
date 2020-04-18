import React from "react"
import ProjectLink from "../components/ProjectLink"
import Layout from "../components/Layout"

const Crafts = () => {
  return (
    <Layout>
      <div className="main-page-container">
        <p className="page-header crafts">Craft Projects</p>
        <div className="mainpage-project-link-container">
          <ProjectLink linkTo="/PaperCrafts" linkText="Paper Crafts" />
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
