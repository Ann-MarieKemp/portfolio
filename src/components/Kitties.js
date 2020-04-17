import React from "react"
import Image from "gatsby-image"
import "../styles/Carousel.css"

const Kitty = props => {
  return <Image fluid={props.fluid} imgStyle={{ objectFit: "contain" }} />
}

export default Kitty
