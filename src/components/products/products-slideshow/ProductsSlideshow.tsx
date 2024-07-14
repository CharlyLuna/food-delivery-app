"use client"

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
  breakpoints?: Record<string, number>
  loop?: boolean
  style?: React.CSSProperties
}

export const ProductsSlideshow = ({
  elements,
  breakpoints,
  loop = true,
  style,
}: Props) => {
  console.log(breakpoints)

  return (
    <div className='w-full'>
      <Swiper
        style={style}
        spaceBetween={24}
        slidesPerView={1}
        speed={1000}
        navigation={true}
        loop={loop}
        breakpoints={{
          768: {
            slidesPerView: breakpoints?.["768"] ?? 2,
          },
          980: {
            slidesPerView: breakpoints?.["980"] ?? 3,
          },
          1240: {
            slidesPerView: breakpoints?.["1240"] ?? 4,
          },
          1440: {
            slidesPerView: breakpoints?.["1440"] ?? 5,
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
