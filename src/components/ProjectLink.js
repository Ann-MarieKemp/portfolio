import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/ProjectLink.css"

const ProjectLink = props => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="link-container"
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      {hover ? (
        <p>Learn more about Ann-Marie</p>
      ) : (
        <Link className="page-link" to="/AboutMe">
          About Ann-Marie
        </Link>
      )}
    </div>
  )
}

export default ProjectLink
