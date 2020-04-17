import React from "react"
import "../styles/Carousel.css"

const Arrow = ({ direction, clickFunc, graphic }) => {
  return (
    <div onClick={clickFunc}>
      <p className="arrow">{graphic}</p>
    </div>
  )
}

export default Arrow
