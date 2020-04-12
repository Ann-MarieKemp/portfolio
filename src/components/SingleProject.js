import React from "react"
import "../styles/SingleProject.css"

const SingleProject = props => {
  return (
    <div className="single-project-box">
      <p className="sub-header">{props.projectName}</p>
      <a className="project-github" href={props.github}>
        Github
      </a>
      <p className="project-text">{props.description}</p>
    </div>
  )
}
export default SingleProject
