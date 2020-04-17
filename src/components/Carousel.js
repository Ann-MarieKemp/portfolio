import React, { useState } from "react"
import Arrow from "./Arrow"
import Image from "gatsby-image"
import kittyImages from "../hooks/useKittyImages"
import "../styles/Carousel.css"
import Kitty from "../components/Kitties"

const Carousel = props => {
  const images = kittyImages()
  const [imageIdx, setImageIdx] = useState(0)
  let trans = imageIdx * (100 / images.length)

  return (
    <div className="slider">
      <div className={`kitty-slider active-slide-${imageIdx}`}>
        <div
          className="kitty-slider-wrapper"
          style={{
            transform: `translateX(-${trans}%)`,
          }}
        >
          {console.log(trans, "idx")}
          {images.map(image => {
            return (
              <Image
                key={image.childImageSharp.id}
                fluid={image.childImageSharp.fluid}
                imgStyle={{ objectFit: "contain" }}
              />
            )
          })}
        </div>
      </div>
      <div className="arrow-container">
        <Arrow
          direction="left"
          clickFunc={() => {
            if (imageIdx !== 0) setImageIdx(imageIdx - 1)
          }}
          graphic="Prev"
          disabled={imageIdx === 0}
        />
        <Arrow
          direction="right"
          clickFunc={() => {
            if (imageIdx !== images.length - 1) setImageIdx(imageIdx + 1)
          }}
          graphic="next"
          disabled={imageIdx === images.length - 1}
        />
      </div>
    </div>
  )
}

export default Carousel
