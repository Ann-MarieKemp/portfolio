import React from "react"
import Layout from "../components/Layout"
import "../styles/ContactInfo.css"

const ContactInfo = props => {
  return (
    <Layout>
      <div className="main-page-container">
        <p className="page-header">Contact Ann-Marie</p>
        <div className="contact-link-container">
          <p className="contact-email">aedalenb@gmail.com</p>
          <a className="contact-email" href="https://github.com/Ann-MarieKemp">
            Github
          </a>
          <a
            className="contact-email"
            href="https://www.linkedin.com/in/ann-mariekemp"
          >
            LinkedIn
          </a>
        </div>
        <form
          className="form-container"
          method="post"
          action="https://formspree.io/aedalenb@gmail.com"
        >
          <label className="form-label">Name:</label>

          <input className="form-input" type="text" name="name" id="name" />
          <label className="form-label">Email: </label>
          <input
            className="form-input"
            type="email"
            name="_replyto"
            id="email"
          />

          <label className="form-label subject">Subject </label>
          <input
            className="form-input"
            type="text"
            name="subject"
            id="subject"
          />

          <label className="form-label message">Message </label>
          <textarea
            className="form-input"
            name="message"
            id="message"
            rows="5"
          />

          <button type="submit">Send</button>
          <input className="clear" type="reset" value="Clear" />
          <input type="text" name="_gotcha" style={{ display: "none" }} />
        </form>

        <div className="main-page-container"></div>
      </div>
    </Layout>
  )
}
export default ContactInfo
