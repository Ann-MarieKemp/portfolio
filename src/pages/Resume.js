import React from "react"
import resumeFile from "../constants/Ann-MarieKemp_Resume.pdf"
import Layout from "../components/Layout"
import useResume from "../hooks/useResume"
import Image from "gatsby-image"

const Resume = () => {
  const resumePhoto = useResume()
  return (
    <Layout>
      <div className="main-page-container">
        <a className="sub-header resume" href={resumeFile} download>
          Download PDF version of Ann-Marie's Resume
        </a>
        <Image className="resume" fluid={resumePhoto} />
      </div>
    </Layout>
  )
}
export default Resume
