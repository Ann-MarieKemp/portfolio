import React from "react"
import "../styles/AboutMe.css"
import { Link } from "gatsby"

const AboutMe = props => {
  return (
    <div className="main-page-container">
      <p className="page-header">Ann-Marie Kemp</p>

      <div className="about-me-tag">
        <p>Full Stack Software Engineer based in New York City.</p>
      </div>

      <div className="description-text">
        <p>
          <span>A</span>fter getting my degree in theatrical production at the
          University of Arizona I moved to New York City to be a part of one of
          the largest theater communities in the world. I have been lucky to be
          a part of many wonderful productions and mix many interesting new
          works.
        </p>
        <br />
        <p>
          In search of more stability and an interest in broadening my technical
          knowledge I transitioned my skills to the world of broadcast and got
          to dive deeper into my technical skills while applying them to the
          fascinating industry of television news.{" "}
        </p>
        <br />
        <p>
          Currently I am leveraging the troubleshooting skills and ability to
          adapt to new technologies that I have cultivated over the years and
          applying them to a new realm of technical knowledge as I transition
          into a career as a full stack software engineer.
        </p>
        <br />
        <p>
          I am excited to continue this journey as I look for opportunities in
          the tech sector and I hope to be able to expand on my newfound love of
          all things front-end with an emphasis on React, React Native, and CSS.
        </p>
        <br />
        <p>
          Technical Skills: Javascript, Node, React, Redux, HTML, CSS, React
          Native, Git, Sequelize, Express, Mocha, Firebase{" "}
        </p>
        <br />
        <p>
          Audio Technical Skills: Calrec Sigma, DiGiCo SD9/10/11, SSL C100,
          Studer Vista 5, Cadac J-Type, Yamaha CL5, Pro Tools, Logic, Qlab, AZ
          Edit, iNews, ENCO, Dante certified, XLR/CAT5 termination, soldering
        </p>
        <br />
        <div className="external-links">
         
        </div>
      </div>
    </div>
  )
}

export default AboutMe
