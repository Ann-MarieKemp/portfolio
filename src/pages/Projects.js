import React from "react"
import SingleProject from "../components/SingleProject"
import "../styles/Projects.css"
import Navbar from "../components/Navbar"

const Projects = props => {
  return (
    <>
      <Navbar />
      <p className="page-header">Projects</p>
      <div className="all-projects-box">
        <SingleProject
          projectName={"Dot Eater"}
          github={"https://github.com/Team-Blade/Capstone-Project"}
          description={dotEaterDescription}
        />
        <SingleProject
          projectName={"Recipix"}
          github="https://github.com/Ann-MarieKemp/Recipix"
          description={recipixDescription}
        />
        <SingleProject
          projectName={"Violet Vines"}
          github="https://github.com/2001-800080/graceshopperrepo"
          description={violetVinesDescription}
        />
      </div>
    </>
  )
}

const dotEaterDescription =
  "Dot Eater is a multiplayer online clone of the classic Namco Bandai game Pacman Battle Royale. Players maneuver around the board eating dots and their friends while running away from our intelligent ghost. The last Pacman standing is the winner"

const recipixDescription =
  "Recipix is a mobile application built with React Native that allows a user to take or choose a photo of a handwritten recipe and converts the text into a save-able digital format"

const violetVinesDescription =
  "Violet Vines is an e-commerce bouquet shop with full cart functionality built for The Grace Hopper Program at Fullstack Academy of Code"
export default Projects
