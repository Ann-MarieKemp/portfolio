import React from "react"
import Layout from "../components/Layout"

const ContactInfo = props => {
  return (
    <Layout>
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
    </Layout>
  )
}
export default ContactInfo
