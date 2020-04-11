import React from "react"
import SingleProject from "../components/SingleProject"
import "../styles/Projects.css"

const Projects = props => {
  return (
    <div className="all-projects-box">
      <SingleProject projectName={"Dot Eater"} />
      <SingleProject projectName={"Recipix"} />
      <SingleProject projectName={"Violet Vines"} />
    </div>
  )
}

export default Projects
