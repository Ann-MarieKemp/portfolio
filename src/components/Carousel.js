import React, { useState } from "react"
import Arrow from "./Arrow"
import Image from "gatsby-image"
import kittyImages from "../hooks/useKittyImages"
import "../styles/Carousel.css"

const Carousel = props => {
  const images = kittyImages()
  const [imageIdx, setImageIdx] = useState(0)

  return (
    <div className="carousel-container">
      <Arrow
        direction="left"
        clickFunc={() => {
          setImageIdx(imageIdx - 1)
        }}
        graphic="&#9666;"
      />

      <Image fixed={images[imageIdx].childImageSharp.fixed} />
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
