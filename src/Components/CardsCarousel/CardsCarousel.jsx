import React from 'react'
import './CardsCarousel.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination } from "swiper";
// import picture from folder assets
import img1 from '../../assets/CardsCaruosel/img1.jpg'
import img2 from '../../assets/CardsCaruosel/img2.jpg'
import img3 from '../../assets/CardsCaruosel/img3.jpg'
const CardsCarousel = () => {
    return (
        <>
          <Swiper 
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
                500: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>
                <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </>
    )
}

export default CardsCarousel