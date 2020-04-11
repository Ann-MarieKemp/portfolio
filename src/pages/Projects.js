import React from "react"
import SingleProject from "../components/SingleProject"
import "../styles/Projects.css"
import Navbar from "../components/Navbar"

const Projects = props => {
  return (
    <>
      <Navbar />
      <h1 id="all-projects-header">Projects</h1>
      <div className="all-projects-box">
        <SingleProject projectName={"Dot Eater"} />
        <SingleProject projectName={"Recipix"} />
        <SingleProject projectName={"Violet Vines"} />
      </div>
    </>
  )
}

export default Projects
