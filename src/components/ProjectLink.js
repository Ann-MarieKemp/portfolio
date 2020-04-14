import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/ProjectLink.css"

const ProjectLink = props => {
  const [hover, setHover] = useState(false)
  const { hoverText, linkTo, linkText } = props

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
        <p>{hoverText}</p>
      ) : (
        <Link className="category-link" to={linkTo}>
          {linkText}
        </Link>
      )}
    </div>
  )
}

export default ProjectLink
