import React from "react"
import Image from "gatsby-image"
import kittyImage from "../hooks/useKittyImages"

const Kitties = props => {
  const image = kittyImage()
  return (
    <>
      <p>This is kitties</p>
      <Image fixed={image} />
    </>
  )
}

export default Kitties
