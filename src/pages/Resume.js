import React from "react"
import resumeFile from "../constants/Ann-MarieKemp_Resume.pdf"
import Layout from "../components/Layout"
import useResume from "../hooks/useResume"
import { GatsbyImage } from "gatsby-plugin-image"

const Resume = () => {
  const resumePhoto = useResume()
  return (
    <Layout>
      <div className="main-page-container">
        <a className="sub-header resume" target="_blank" href={resumeFile}>
          Download PDF version of Ann-Marie's Resume
        </a>
        <GatsbyImage className="resume" image={resumePhoto} />
      </div>
    </Layout>
  )
}
export default Resume
