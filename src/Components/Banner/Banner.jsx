import React from 'react'
import './Banner.css'
import BannerImg from '../../assets/Banner/toracon_banner.png'

const Banner = () => {
  return (
    <div className='Banner'>
        <div className='Banner-img'>
            <img src={BannerImg} alt="" />
        </div>
    </div>
  )
}

export default Banner