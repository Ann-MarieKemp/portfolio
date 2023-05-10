import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/ProjectLink.css"

const ProjectLink = ({ linkTo, linkText, last}) => {
  return (
    <Link className="category-link" to={linkTo}>
      <button
        tabIndex={-1}
        className={last ? "link-container fade-in last-row" : "link-container fade-in"}
      >{linkText}
      </button>
    </Link>
  )
}

export default ProjectLink
