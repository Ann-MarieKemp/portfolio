import React from "react"
import "../styles/Carousel.css"

const Arrow = ({ direction, clickFunc, graphic }) => {
  return (
    <button onClick={clickFunc}>
      <p className="arrow">{graphic}</p>
    </button>
  )
}

export default Arrow
