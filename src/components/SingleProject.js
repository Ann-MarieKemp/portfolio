import React from "react"
import "../styles/SingleProject.css"

const SingleProject = ({ video, ...props }) => {
  return (
    <div className="single-project-box">
      <div className="link-title-align">
        <p className="sub-header-red-large">{props.projectName}</p>
        <div className="project-link-container">
          {props.github ? (
            <a
              className="project-github"
              target="_blank"
              rel="noopener noreferrer"
              href={props.github}
            >
              Github
            </a>
          ) : null}
        </div>
      </div>
      <p className="project-github">{props.description}</p>
      {props.additionalText ? props.additionalText.map(description => {
     return <p className="project-github">- {description}</p>
      })
 : null}
      { props.src ? <iframe width="560" height="315" src={props.src}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="video youtube-embed"></iframe> : null }
    </div>
  )
}
export default SingleProject
