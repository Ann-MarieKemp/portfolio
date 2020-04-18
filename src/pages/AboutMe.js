import React from "react"
import "../styles/AboutMe.css"
import Carousel from "../components/Carousel"
import Layout from "../components/Layout"
import ProjectLink from "../components/ProjectLink"

const AboutMe = props => {
  return (
    <Layout>
      <div className="main-page-container">
        <p className="page-header">About Ann-Marie</p>

        <div className="description-text">
          <p>
            <span>A</span>fter getting her degree in theatrical production at
            the University of Arizona Ann-Marie moved to New York City to be a
            part of one of the largest theater communities in the world. She has
            been lucky to be a part of many wonderful productions and mix many
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
            Currently she is leveraging the troubleshooting skills and ability
            to adapt to new technologies that she has cultivated over the years
            and is applying them to a new realm of technical knowledge as she
            transitions into a career as a full stack software engineer.
          </p>
          <br />
          <p>
            She is excited to continue this journey as she looks for
            opportunities in the tech sector and she hopes to be able to expand
            on her newfound love of all things front-end with an emphasis on
            React, React Native, and CSS.
          </p>
          <br />
          <div className="skills-container">
            <div className="skills-wrapper">
              <p className="sub-header-cream">Technical Skills</p>
              <p className="skills-list">
                JavaScript
                <br /> Node
                <br /> React
                <br /> Redux <br />
                HTML
                <br /> CSS <br /> React Native
                <br /> Git
                <br />
                Sequelize <br /> Express
                <br />
                Mocha
                <br /> Firebase
                <br /> PostgreSQL
                <br /> Git
                <br />
                Github
              </p>
            </div>
            <div className="skills-wrapper">
              <p className="sub-header-cream">Audio Technical Skills</p>

              <p className="skills-list">
                Calrec Sigma
                <br /> DiGiCo SD9/10/11
                <br /> SSL C100
                <br /> Studer Vista 5<br /> Cadac J-Type
                <br /> Yamaha CL Series
                <br />
                Pro Tools
                <br /> Logic
                <br />
                Qlab
                <br /> AZ Edit
                <br /> iNews
                <br /> ENCO
                <br />
                Dante certified
                <br /> XLR/CAT5 termination
                <br /> soldering
              </p>
            </div>
          </div>
          <br />
          <div className="crafts-link-wrapper">
            <p className="sub-header-cream">Other Interests</p>

            <p>
              When she's not coding or binging Frontend Masters courses she
              spends her time as a maker of all things. She loves to be
              productive with her time and she inherited a love of baking and
              fiber arts from her mother and grandmother. This means she spends
              her free time using her spinning wheel, looms, crochet hooks,
              knitting needles and recipes to produce projects and baked goods
              for her friends and family.
            </p>
            <br />

            <p>
              Check out some of her craft projects including the time she baked
              a new dessert every week for a year here:
            </p>
            <ProjectLink linkTo="/Crafts" linkText="View Crafts" />
          </div>
          <div className="nyc-info">
            <p>
              Ann-Marie lives in New York City with her wonderful husband and
              two cats Cotton and Carnival. As a reward for making it this far
              down the page here are some photos of her kitties:
            </p>
            <Carousel />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutMe
