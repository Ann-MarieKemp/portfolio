import React from "react"
import "../styles/SingleProject.css"
import Video from './Video'

const SingleProject = props => {
  return (
    <div className="single-project-box">
      <p className="sub-header">{props.projectName}</p>
      <div className="project-link-container">
        <a className="project-github" href={props.github}>
          Github
        </a>
        <a className="project-github" href={props.deployLink}>
          {props.linkText}
        </a>
      </div>
      <p className="project-github">{props.description}</p>
  <Video />
    </div>
  )
}
export default SingleProject
