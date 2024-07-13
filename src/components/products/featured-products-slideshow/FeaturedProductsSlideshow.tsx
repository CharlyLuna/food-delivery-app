"use client"
import { useContext, useState } from "react"
import { ProductCard } from "../product-card/ProductCard"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"

import "./featured-products-slideshow.css"

// import required modules
import { Navigation, Autoplay } from "swiper/modules"
import {
  FeaturedProductsContext,
  FeaturedProductsContextType,
} from "@/context/FeaturedProductsContext"

export const FeaturedProductsSlideshow = () => {
  const {
    featuredProducts,
    handleHighlightedProduct,
    currentHighlightedProduct,
  } = useContext(FeaturedProductsContext) as FeaturedProductsContextType
  const [selectedProduct, setSelectedProduct] = useState(0)

  console.log({ featuredProducts })

  return (
    <div className='fadeInRightWithDelay'>
      <Swiper
        initialSlide={currentHighlightedProduct.id - 1}
        spaceBetween={24}
        slidesPerView={1}
        speed={1500}
        // autoplay={{ delay: 4000 }}
        onRealIndexChange={(e) => {
          const index = e.realIndex
          console.log("change in slide")
          handleHighlightedProduct(featuredProducts[index])
          setSelectedProduct(index)
          console.log({ index })
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
        modules={[Navigation, Autoplay]}
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
