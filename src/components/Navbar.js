import React from "react"
import { Link } from "gatsby"
import "../styles/Navbar.css"

const Navbar = props => {
  return (
    <div id="nav-bar-container">
      <Link className="page-link" to="/">
        Home
      </Link>
      <Link className="page-link" to="/Projects">
        Projects
      </Link>
      <Link className="page-link" to="/AboutMe">
        Bio
      </Link>

      <a className="page-link" href="https://github.com/Ann-MarieKemp">
        Github
      </a>

      <a
        className="page-link"
        href="https://www.linkedin.com/in/ann-mariekemp/"
      >
        {" "}
        LinkedIn
      </a>
    </div>
  )
}

export default Navbar
