import React from 'react'
import './CardsCarousel.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { Pagination } from "swiper";
// import picture from folder assets
import img1 from '../../assets/CardsCaruosel/img1.jpg'
import img2 from '../../assets/CardsCaruosel/img2.jpg'
import img3 from '../../assets/CardsCaruosel/img3.jpg'
import img4 from '../../assets/CardsCaruosel/img4.jpg'
import img5 from '../../assets/CardsCaruosel/img6.jpg'
import img6 from '../../assets/CardsCaruosel/img7.jpg'
import img7 from '../../assets/CardsCaruosel/img8.jpg'
import img8 from '../../assets/CardsCaruosel/img9.jpg'
import img9 from '../../assets/CardsCaruosel/img10.jpg'
import img10 from '../../assets/CardsCaruosel/img11.jpg'
import img11 from '../../assets/CardsCaruosel/img12.jpg'
import img12 from '../../assets/CardsCaruosel/img5.jpg'
const CardsCarousel = () => {
    const mediaQuery = window.matchMedia('(max-width: 744px)').matches;
    return (
        <div className='CardsCarousel'>
            <Swiper 
            slidesPerView={2}
            spaceBetween={5}
            navigation={mediaQuery ? false : true}
            breakpoints={{
                500: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                744: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            modules={mediaQuery ? [Pagination] : [Navigation]}
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
            <SwiperSlide>
                <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img6} alt="" />
                </SwiperSlide>
            <SwiperSlide>
                <img src={img7} alt="" />
                </SwiperSlide>
            <SwiperSlide>
                <img src={img8} alt="" />
                </SwiperSlide>
            <SwiperSlide>
                <img src={img9} alt="" />
                </SwiperSlide>
            <SwiperSlide>
                <img src={img10} alt="" />
                </SwiperSlide>
            <SwiperSlide>
                <img src={img11} alt="" />
                </SwiperSlide>
            <SwiperSlide>
                <img src={img12} alt="" />
                </SwiperSlide>
          </Swiper>
        </div>
          
    )
}

export default CardsCarousel