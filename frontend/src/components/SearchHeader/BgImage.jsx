import React from 'react'
import bgimage from "../../Images/bg.png";

const BgImage = () => {
  return (
    <div className="position-absolute left-0 h-100 w-100 d-flex justify-content-center align-items-center overflow-hidden">
    <img
      src={bgimage}
      alt=""
      className="w-100 -z-20"
      style={{ objectFit: "cover", minHeight: "960px" }}
    />
  </div>
  )
}

export default BgImage