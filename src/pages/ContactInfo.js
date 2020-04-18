import React from "react"
import Layout from "../components/Layout"
import "../styles/ContactInfo.css"

const ContactInfo = props => {
  return (
    <Layout>
      <p className="page-header">Contact Ann-Marie</p>
      <form
        className="form-container"
        method="post"
        action="https://formspree.io/aedalenb@gmail.com"
      >
        <label className="form-label">
          Name
          <input className="form-input" type="text" name="name" id="name" />
        </label>
        <label className="form-label">
          Email
          <input
            className="form-input"
            type="email"
            name="_replyto"
            id="email"
          />
        </label>
        <label className="form-label">
          Subject
          <input
            className="form-input"
            type="text"
            name="subject"
            id="subject"
          />
        </label>
        <label className="form-label">
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <button type="reset" value="Clear" />
        <input type="text" name="_gotcha" style={{ display: "none" }} />
      </form>

      <div className="main-page-container">
        <p className="page-header">Email: aedalenb@gmail.com</p>
        {/* <a className="category-link" href="https://github.com/Ann-MarieKemp">
          Github
        </a>
        <a
          className="category-link"
          href="https://www.linkedin.com/in/ann-mariekemp/"
        >
          LinkedIn
        </a> */}
      </div>
    </Layout>
  )
}
export default ContactInfo
