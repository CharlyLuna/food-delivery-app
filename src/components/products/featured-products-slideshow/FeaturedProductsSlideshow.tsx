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
import { ProductCard } from "../product-card/ProductCard"
import { useContext, useState } from "react"
import {
  FeaturedProductsContext,
  FeaturedProductsContextType,
} from "@/context/FeaturedProductsContext"

// const products = [1, 2, 3, 4, 5]

export const FeaturedProductsSlideshow = () => {
  const { featuredProducts, handleHighlightedProduct } = useContext(
    FeaturedProductsContext
  ) as FeaturedProductsContextType
  const [selectedProduct, setSelectedProduct] = useState(0)

  console.log("featuredProducts", featuredProducts)
  return (
    <div className='fadeInRightWithDelay'>
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        // autoplay={{ delay: 4000 }}
        onRealIndexChange={(e) => {
          const index = e.realIndex
          handleHighlightedProduct(featuredProducts[index])
          setSelectedProduct(index)
        }}
        navigation={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        modules={[FreeMode, Navigation, Autoplay]}
        className='mySwiper'
      >
        {featuredProducts.map((product, index) => (
          <SwiperSlide style={{}} key={index}>
            <ProductCard active={index === selectedProduct} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
