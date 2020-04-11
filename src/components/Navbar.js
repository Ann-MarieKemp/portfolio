import React from "react"
import { Link } from "gatsby"
import "../styles/Navbar.css"

const Navbar = props => {
  return (
    <div id="nav-bar-container">
      <Link className="page-link" to="/Projects">
        Projects
      </Link>
      <Link className="page-link" to="/">
        Home
      </Link>
    </div>
  )
}

export default Navbar
