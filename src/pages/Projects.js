import React from "react"
import SingleProject from "../components/SingleProject"
import "../styles/Projects.css"
import Layout from "../components/Layout"
import {
  dotEaterDescription,
  recipixDescription,
  rateYourRepDescription,
  IBMProjectOverview,
  IBMProjectDescriptions,
} from "../constants/projectvariables"
// import useVideos from "../hooks/useVideos"

const Projects = props => {

  return (
    <Layout>
      <p className="page-header">Projects </p>
      <div className="all-projects-box">
        <SingleProject
          projectName={"IBM Software Developer"}
          description={IBMProjectOverview}
          additionalText={IBMProjectDescriptions}
        />
        <SingleProject
          projectName={"RateYourRep"}
          github={"https://github.com/HackForBLMTeam30/RateYourRep"}
          description={rateYourRepDescription}
        />
        <SingleProject
          projectName={"Dot Eater"}
          github={"https://github.com/Team-Blade/Capstone-Project"}
          description={dotEaterDescription}
          linkText="Play The Game!"
          deployLink="http://dot-eater.herokuapp.com/"
          src="https://www.youtube.com/embed/3pskwXDw2nQ"
          // video={videos[0]}
        />
        <SingleProject
          projectName={"Recipix"}
          github="https://github.com/Ann-MarieKemp/Recipix"
          description={recipixDescription}
          last
          src="https://www.youtube.com/embed/oWoqoSWUoTA"
          // video={videos[1]}
        />
      </div>
    </Layout>
  )
}

export default Projects
