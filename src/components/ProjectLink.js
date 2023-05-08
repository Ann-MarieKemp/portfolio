import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/ProjectLink.css"

const ProjectLink = ({ linkTo, linkText}) => {
  return (
    <Link className="category-link" to={linkTo}>
      <button
        tabIndex={-1}
        className="link-container fade-in"
      >{linkText}
      </button>
    </Link>
  )
}

export default ProjectLink
