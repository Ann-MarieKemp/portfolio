import React, { useState } from "react"
import Arrow from "./Arrow"
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/Carousel.css"

const Carousel = ({ images }) => {
  const [imageIdx, setImageIdx] = useState(0)
  let trans = imageIdx * (100 / images.length)
  return (
    <div className="slider">
      <div
        className="kitty-slider-wrapper"
        style={{
          transform: `translateX(-${trans}%)`,
        }}
      >
        {images.map((image, index) => {
          return (
            <GatsbyImage
              className={imageIdx === index ? "opacity-full" : "opacity-half"}
              key={image.childImageSharp.id}
              image={image.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
              alt="Picture of adorable Kitty Cat"
            />
          )
        })}
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
          graphic="Next"
          disabled={imageIdx === images.length - 1}
        />
      </div>
    </div>
  )
}

export default Carousel
