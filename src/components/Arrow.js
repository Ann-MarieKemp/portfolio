import React from "react"
import "../styles/Carousel.css"

const Arrow = ({ direction, clickFunc, graphic }) => {
  return (
    <div className={`arrow-${direction}`} onClick={clickFunc}>
      <p className="arrow">{graphic}</p>
    </div>
  )
}

export default Arrow
