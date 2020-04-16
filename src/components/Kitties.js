import React from "react"
import Image from "gatsby-image"
import kittyImages from "../hooks/useKittyImages"

const Kitties = props => {
  const images = kittyImages()
  console.log(images)

  return (
    <>
      <p>This is kitties</p>
      {images.map(node => {
        return <Image key={node.id} fixed={node.childImageSharp.fixed} />
      })}
    </>
  )
}

export default Kitties
