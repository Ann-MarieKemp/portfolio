import React from "react"
import Layout from "../components/Layout"
import "../styles/ContactInfo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import { faFileDownload } from "@fortawesome/free-solid-svg-icons"
import resumeFile from "../constants/Ann-MarieKemp_Resume.pdf"

const ContactInfo = props => {
  return (
    <Layout>
      <div className="main-page-container">
        <p className="page-header">Contact Ann-Marie</p>
        <div className="contact-link-container">
          <div className="icons-box">
            <p className="contact-email">aedalenb@gmail.com</p>
            <a
              className="page-link"
              href="https://github.com/Ann-MarieKemp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="site-icons" icon={faGithub} />
            </a>
            <a
              target="_blank"
              href="https://medium.com/@amkemp"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="site-icons" icon={faMedium} />
            </a>

            <a
              className="page-link"
              href="https://www.linkedin.com/in/ann-mariekemp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="site-icons" icon={faLinkedin} />
            </a>
            <a target="_blank" href={resumeFile} rel="noopener noreferrer">
              <FontAwesomeIcon className="site-icons" icon={faFileDownload} />
            </a>
          </div>
        </div>
        <form
          className="form-container"
          method="post"
          action="https://formspree.io/aedalenb@gmail.com"
        >
          <label className="form-label">Name:</label>

          <input className="form-input" type="text" name="name" id="name" />
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            name="_replyto"
            id="email"
          />

          <label className="form-label subject">Subject:</label>
          <input
            className="form-input"
            type="text"
            name="subject"
            id="subject"
          />

          <label className="form-label message">Message:</label>
          <textarea
            className="form-input"
            name="message"
            id="message"
            rows="5"
          />

          <button className="link-container fade-in" type="submit">
            Send
          </button>
          <input
            className="clear link-container fade-in"
            type="reset"
            value="Clear"
          />
          <input type="text" name="_gotcha" style={{ display: "none" }} />
        </form>

        <div className="main-page-container"></div>
      </div>
    </Layout>
  )
}
export default ContactInfo
