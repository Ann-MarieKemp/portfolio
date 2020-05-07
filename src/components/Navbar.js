import React from "react"
import { Link } from "gatsby"
import "../styles/Navbar.css"
import github from "../../static/GitHub-Mark-32px.png"
import linkedin from "../../static/LI-In-Bug.png"
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
        About
      </Link>
      <Link className="page-link" to="/Crafts">
        Crafts
      </Link>
      <Link className="page-link" to="/ContactInfo">
        Contact
      </Link>
      {/* <Link className="page-link" to="/Resume">
        Resume
      </Link> */}
      {/* <div className="link-logos-box">
        <a
          className="page-link"
          href="https://github.com/Ann-MarieKemp"
          target="_blank"
        >
          <img alt="github-mark" src={github}></img>
        </a>
        <a
          className="page-link"
          href="https://www.linkedin.com/in/ann-mariekemp/"
          target="_blank"
        >
          <img alt="linkedIn logo" src={linkedin}></img>
        </a>
      </div> */}
    </div>
  )
}

export default Navbar
