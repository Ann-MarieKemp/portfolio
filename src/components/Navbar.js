import React from "react"
import { Link } from "gatsby"
import "../styles/Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFileDownload } from "@fortawesome/free-solid-svg-icons"

const Navbar = props => {
  return (
    <nav role="navigation" id="nav-bar-container">
      <div>
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
      </div>
      <div className="icons-box">
        <FontAwesomeIcon className="site-icons" icon={faGithub} />
        <FontAwesomeIcon className="site-icons" icon={faLinkedin} />
        <FontAwesomeIcon className="site-icons" icon={faFileDownload} />
      </div>
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
    </nav>
  )
}

export default Navbar
