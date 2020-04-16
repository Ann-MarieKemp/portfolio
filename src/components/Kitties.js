import React from "react"
import Image from "gatsby-image"
import kittyImages from "../hooks/useKittyImages"

const Kitties = props => {
  const images = kittyImages()
  console.log(images)

  const image = images[0]
  return (
    <>
      <p>This is kitties</p>
      {images.map(image => {
        console.log(image.childImageSharp.fixed)
      })}
    </>
  )
}

export default Kitties
