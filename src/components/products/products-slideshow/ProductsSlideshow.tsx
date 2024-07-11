"use client"

import { useState } from "react"
import { ProductCard } from "../product-card/ProductCard"
import type { Product } from "@/interfaces/product"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"

import "./products-slideshow.css"

// import required modules
import { Navigation } from "swiper/modules"
import Link from "next/link"

interface Props {
  elements: Product[]
}

export const ProductsSlideshow = ({ elements }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState(0)

  console.log(elements)

  return (
    <div className='w-full'>
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        speed={1000}
        onRealIndexChange={(e) => {
          const index = e.realIndex
          setSelectedProduct(index)
        }}
        navigation={true}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          980: {
            slidesPerView: 3,
          },
          1240: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
        }}
        modules={[Navigation]}
        className='mySwiper'
      >
        {elements.map((product, index) => (
          <SwiperSlide style={{}} key={index}>
            <Link href={`/product/${product.slug}`}>
              <ProductCard active product={product} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
