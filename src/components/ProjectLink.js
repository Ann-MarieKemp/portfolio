import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/ProjectLink.css"

const ProjectLink = props => {
  const [hover, setHover] = useState(false)
  const { linkTo, linkText } = props

  return (
    <button
      tabIndex={-1}
      className="link-container"
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      {hover ? (
        <Link className="category-link" to={linkTo}>
          {linkText}
        </Link>
      ) : (
        <Link className="category-link" to={linkTo}>
          {linkText}
        </Link>
      )}
    </button>
  )
}

export default ProjectLink
