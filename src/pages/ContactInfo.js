import React from "react"
import Navbar from "../components/Navbar"

const ContactInfo = props => {
  return (
    <>
      <Navbar />
      <div className="main-page-container">
        <p className="page-header">Email: aedalenb@gmail.com</p>
        <a className="category-link" href="https://github.com/Ann-MarieKemp">
          Github
        </a>
        <a
          className="category-link"
          href="https://www.linkedin.com/in/ann-mariekemp/"
        >
          LinkedIn
        </a>
      </div>
    </>
  )
}
export default ContactInfo
