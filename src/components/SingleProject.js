import React from "react"
import "../styles/SingleProject.css"
import Video from "./Video"

const SingleProject = ({ video, ...props }) => {
  return (
    <div className="single-project-box">
      <p className="sub-header">{props.projectName}</p>
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
        <a
          className="project-github"
          target="_blank"
          rel="noopener noreferrer"
          href={props.deployLink}
        >
          {props.linkText}
        </a>
      </div>
      <p className="project-github">{props.description}</p>
      {/* {video && (
        <Video
          videoSrcURL={`https://www.youtube.com/embed/${video.videoId}`}
          videoTitle={video.title}
        />
      )} */}
    </div>
  )
}
export default SingleProject
