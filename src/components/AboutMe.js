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
          <span>A</span>fter getting her degree in theatrical production at the
          University of Arizona Ann-Marie moved to New York City to be a part of
          one of the largest theater communities in the world. She has been
          lucky to be a part of many wonderful productions and mix many
          interesting new works.
        </p>
        <br />
        <p>
          In search of more stability and an interest in broadening her
          technical knowledge she transitioned her skills to the world of
          broadcast and got to dive deeper into her technical skills while
          applying them to the fascinating industry of television news.
        </p>
        <br />
        <p>
          Currently she is leveraging the troubleshooting skills and ability to
          adapt to new technologies that she has cultivated over the years and
          is applying them to a new realm of technical knowledge as she
          transitions into a career as a full stack software engineer.
        </p>
        <br />
        <p>
          She is excited to continue this journey as she looks for opportunities
          in the tech sector and she hopes to be able to expand on her newfound
          love of all things front-end with an emphasis on React, React Native,
          and CSS.
        </p>
        <br />
        <p>
          Technical Skills: Javascript, Node, React, Redux, HTML, CSS, React
          Native, Git, Sequelize, Express, Mocha, Firebase
        </p>
        <br />
        <p>
          Audio Technical Skills: Calrec Sigma, DiGiCo SD9/10/11, SSL C100,
          Studer Vista 5, Cadac J-Type, Yamaha CL5, Pro Tools, Logic, Qlab, AZ
          Edit, iNews, ENCO, Dante certified, XLR/CAT5 termination, soldering
        </p>
        <br />
        <div className="crafts-container">
          <p>
            When she's not coding or binging Front End Masters courses she
            spends her time as a maker of all things. She loves to be productive
            with her time and she inherited a love of baking and fiber arts from
            her mother and grandmother. This means she spends her free time
            using her spinning wheel, looms, crochet hooks, knitting needles and
            recipes to produce projects and baked goods for her friends and
            family.
          </p>
          <br />
          <p>
            You can check out some of her craft projects including the time she
            baked a new dessert every week for a year here:
          </p>
          <Link></Link>
        </div>
        <div>
          <p>
            Ann-Marie lives in New York City with her wonderful husband and two
            cats Cotton and Carnival. As a reward for making it this far down
            the page here are some photos of her kitties:
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
