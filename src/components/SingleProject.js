import React from "react"
import "../styles/SingleProject.css"

const SingleProject = props => {
  return (
    <div className="single-project-box">
      <h1>{props.projectName}</h1>
    </div>
  )
}
export default SingleProject
