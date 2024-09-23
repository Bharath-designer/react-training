import "../styles/BannerList.css"

import React from 'react'
import banner1 from "../assets/banner-1.png"
import banner2 from "../assets/banner-2.png"
import banner3 from "../assets/banner-3.png"

const BannnerList = () => {
  return (
    <div className="banner-container">
        <div className="banner">
            <img src={banner1} alt="" />
        </div>
        <div className="banner">
            <img src={banner2} alt="" />
        </div>
        <div className="banner">
            <img src={banner3} alt="" />
        </div>
    </div>
  )
}

export default BannnerList
