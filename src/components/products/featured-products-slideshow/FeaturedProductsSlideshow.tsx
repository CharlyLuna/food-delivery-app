"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"

import "./featured-products-slideshow.css"

// import required modules
import { Navigation, FreeMode, Autoplay } from "swiper/modules"

const products = [1, 2, 3, 4, 5]

export const FeaturedProductsSlideshow = () => {
  return (
    <div className='h-full'>
      <Swiper
        // spaceBetween={10}
        slidesPerView={1}
        // autoplay={{ delay: 3000 }}
        onRealIndexChange={(e) => {
          console.log("real index change")
          console.log("index", e.realIndex)
        }}
        navigation={true}
        loop={true}
        breakpoints={{
          760: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        modules={[FreeMode, Navigation, Autoplay]}
        className='mySwiper'
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className='border border-black text-center content-center'>
              Product {index}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
