import React, { useState } from "react"
import Arrow from "./Arrow"
import Image from "gatsby-image"
import kittyImages from "../hooks/useKittyImages"
import "../styles/Carousel.css"
import Kitty from "../components/Kitties"

const Carousel = props => {
  const images = kittyImages()
  const [imageIdx, setImageIdx] = useState(0)

  return (
    <div className="slider">
      <Arrow
        direction="left"
        clickFunc={() => {
          setImageIdx(imageIdx - 1)
        }}
        graphic="&#9666;"
      />
      <div className="kitty-slider">
        <div className="kitty-slider-wrapper">
          {images.map(image => {
            return (
              <Image
                fluid={image.childImageSharp.fluid}
                imgStyle={{ objectFit: "contain" }}
              />
            )
          })}
        </div>
      </div>
      <Arrow
        direction="right"
        clickFunc={() => {
          imageIdx >= 1
            ? setImageIdx(imageIdx - 1)
            : setImageIdx(images.length - 1)
        }}
        graphic="&#9656;"
      />
    </div>
  )
}

export default Carousel
