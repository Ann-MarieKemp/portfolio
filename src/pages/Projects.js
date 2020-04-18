import React from "react"
import SingleProject from "../components/SingleProject"
import "../styles/Projects.css"
import Layout from "../components/Layout"
import {
  dotEaterDescription,
  violetVinesDescription,
  recipixDescription,
} from "../constants/projectvariables"
import useVideos from "../hooks/useVideos"

const Projects = props => {
  const videos = useVideos()
  return (
    <Layout>
      <p className="page-header">Projects </p>
      <div className="all-projects-box">
        <SingleProject
          projectName={"Dot Eater"}
          github={"https://github.com/Team-Blade/Capstone-Project"}
          description={dotEaterDescription}
          linkText="Play The Game!"
          deployLink="http://dot-eater.herokuapp.com/"
          video={videos[0]}
        />
        <SingleProject
          projectName={"Recipix"}
          github="https://github.com/Ann-MarieKemp/Recipix"
          description={recipixDescription}
          video={videos[1]}
        />
        <SingleProject
          projectName={"Violet Vines"}
          github="https://github.com/2001-800080/graceshopperrepo"
          description={violetVinesDescription}
          linkText="Check out the Shop!"
          deployLink="http://violet-vines.herokuapp.com/"
        />
      </div>
    </Layout>
  )
}

export default Projects
