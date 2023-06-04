import React from "react"
import ProjectLink from "../components/ProjectLink"
import Layout from "../components/Layout"
import useCrafts from "../hooks/useCrafts"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Crafts = () => {
  const images = useCrafts()
  console.log(images)
  const craftArray = [
    {linkTo: "/PaperCrafts", linkText: "Paper/Other", alt: "wedding table sign" , image: images[5].image},
    {linkTo: "/BakingWeeks", linkText: "52 Weeks of Baking", alt: "baked goods" , image: images[2].image},
    {linkTo: "/Knitting", linkText: "Knitting", alt: "socks" , image: images[3].image},
    {linkTo: "/Crochet", linkText: "Crochet", alt: "crochet project" , image: images[4].image},
    {linkTo: "/Spinning", linkText: "Spinning", alt: "spinning wheel bobbin" , image: images[1].image},
    {linkTo: "/Weaving", linkText: "Weaving", alt: "woven blanket" , image: images[0]},
  ]

  const linkStyle = {
    margin: 0,
  }
  return (
    <Layout>
      <div className="main-page-container">
        <p className="page-header crafts">Craft Projects</p>
        <div className="mainpage-project-link-container">
          <div className="craft-category-div">
            {craftArray.map((craft) => {
              return (
              <>
                <ProjectLink
                  style={linkStyle}
                  linkTo={craft.linkTo}
                  linkText={craft.linkText}
                />
                <GatsbyImage
                  alt={craft.alt}
                  image={craft.image}
                  className="craft-category-image"
                />
              </>)
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Crafts
