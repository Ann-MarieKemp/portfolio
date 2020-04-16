import React from "react"
import Image from "gatsby-image"
import kittyImages from "../hooks/useKittyImages"

const Kitties = props => {
  const images = kittyImages()
  
  const image = images[0]
  return (
    <>
      <p>This is kitties</p>
      <Image fixed={image} />
    </>
  )
}

export default Kitties
