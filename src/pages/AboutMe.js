import React from "react"
import "../styles/AboutMe.css"
import Carousel from "../components/Carousel"
import Layout from "../components/Layout"
import ProjectLink from "../components/ProjectLink"
import useKittyImages from "../hooks/useKittyImages"

const AboutMe = props => {
  const kittyImages = useKittyImages()
  return (
    <Layout>
      <div className="main-page-container">
        <p className="page-header">About Ann-Marie</p>

        <div className="description-text">
          <p>
            Ann-Marie holds a degree in theatrical production from the University of Arizona. After college she relocated to New York City and began her professional career as a sound engineer and technician for theatrical productions working at some of the city's most famous off-broadway theaters including <span>The Public</span>, <span>Second Stage</span> and <span>Playwrights Horizons</span>. Highlights of her theatrical career included mixing the pre-broadway run of <span>Fun Home</span> at The Public, the revival of <span>The Last Five Years</span> directed by Jason Robert Brown at Second Stage, and working as a microphone technician at the <span>Delacorte Theater</span> in Central Park.
          </p>
          <br />
          <p>
            In search of more stability she transitioned to a career in broadcast, starting as a microphone technician and stage manager with <span>NEP Group</span> for <span>Al Jazeera America</span>. She continued working for NEP mixing a live nightly fashion broadcast for <span>Amazon</span>. After that she spent a few years as a staff member at <span>Thomson Reuters</span> mixing nightly news broadcasts for a channel based out of Israel called <span>i24 News</span>. She has also freelanced at other news channels including <span>Fox News/Fox Business</span>.
          </p>
          <br />
          <p>
            Tiring of the freelance life, she decided to take the time to learn how to code, something she had been interested in since high school. She attended in <span>The Grace Hopper Program at Fullstack Academy</span> and began her journey into a new career. Graduating in the middle of a pandemic she embarked on a vigorous job search resulting in multiple offers. She chose to begin her new career at <span>IBM</span>.
          </p>
          <br />
          <p>
            She began her time at <span>IBM</span> contributing to <span>backend</span> services supporting the company intranet's notifications and settings services working in <span>Typescript</span> and leveraging technologies such as <span>GraphQL</span>, <span>Kafka</span> and <span>Cassandra</span>. She became the core maintainer and SME of a <span>RESTful</span> service using <span>Express</span> and <span>Cassandra</span> storing the setting preferences of hundreds of thousands of IBMers. She helped to build and became a core mainter of a <span>GraphQL</span> layer integrating more than 20 <span>RESTful</span> and <span>gRPC</span> microservices to service a universal UI experience. As her work with the <span>GraphQL</span> layer gave her more visibility into the work being done on the UI she began to contribute to the <span>frontend</span> work being done in <span>VueJS</span> rebuilding the auth flow of the site to account for edge cases in the logic. She continued to contribute features to the frontend UI rounding out her skills and causing her to work truly <span>full stack</span>. She spent some time on the release team for the UI coordinating the contributions of four teams to a single repo to improve the release process. She architected a feature to implement offline access of enterprise directory information for the company from an internal Swift application. She is currently serving as the <span>technical lead</span> on a team of developers working to rebuild an internal mobile application in <span>React Native</span> working with build processes using <span>Travis</span> and <span>Jenkins</span>.
          </p>
          <br />
          <div className="skills-container">
              <p className="sub-header-red">Technical Skills: <br/> Typescript, JavaScript, Node, React, Redux, HTML, CSS, VueJS, React Native, Git, Sequelize, Express, PostgreSQL, Github, Cassandra, GraphQL, Kafka, Travis, Jenkins, gRPC </p>
              <br/>
            <p className="sub-header-red">Audio Technical Skills:
            <br/>
              Consoles: Calrec Sigma, DiGiCo SD9/10/11, SSL C100, Studer Vista 5, Cadac J-Type, Yamaha CL Series
            <br/>
              Software: Pro Tools, Logic, Qlab, AZ Edit, iNews, ENCO
            <br/>
              Other Skills: Dante certified, XLR/CAT5 termination, soldering
            </p>
          </div>
          <br />
          <div className="crafts-link-wrapper">
            <p className="sub-header-cream">Other Interests</p>

            <p>
              When she's not coding or working obsessively she
              spends her time as a maker of things. She loves to be
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
              Ann-Marie lives in Arizona with her wonderful husband, her son, and her cat Carnival. As a reward for making it this far
              down the page here are some photos of Carnival:
            </p>
            <Carousel images={kittyImages} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutMe
