import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/ProjectLink.css"

const ProjectLink = props => {
  const [hover, setHover] = useState(false)
  const { linkTo, linkText } = props

  return (
    <div
      role="link"
      tabIndex={0}
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
    </div>
  )
}

export default ProjectLink
