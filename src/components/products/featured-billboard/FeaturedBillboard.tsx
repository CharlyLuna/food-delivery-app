"use client"
import { useContext, useEffect, useState } from "react"
import {
  FeaturedProductsContext,
  FeaturedProductsContextType,
} from "@/context/FeaturedProductsContext"
import Image from "next/image"
import { IoCart, IoCartOutline, IoReader } from "react-icons/io5"
import Link from "next/link"

export const FeaturedBillboard = () => {
  const { currentHighlightedProduct: product, featuredProducts } = useContext(
    FeaturedProductsContext
  ) as FeaturedProductsContextType
  const [animate, setAnimate] = useState(true)

  const index = featuredProducts.findIndex((p) => p.id === product.id)

  useEffect(() => {
    setAnimate(true)
  }, [product])

  return (
    <div className='flex flex-col sm:flex-row sm:gap-4 mb-10 items-center justify-center sm:justify-start'>
      <div className='flex h-[350px] w-[350px]  aspect-square'>
        <Image
          className={`${animate ? "rotateInDownLeft" : ""}`}
          onAnimationEnd={() => setAnimate(false)}
          src={product.image}
          alt={product.name}
          height={350}
          width={350}
          priority
        />
      </div>
      <div className='max-w-[450px] overflow-hidden text-center sm:text-start w-fit'>
        <p className='font-bold text-lg'>#{index + 1} Most loved dish</p>
        <h1 className='hidden sm:block text-2xl md:text-4xl xl:text-6xl font-black text-balance'>
          {product.name}
        </h1>
        <div className='flex gap-4 mt-4'>
          <Link
            href={`/product/${product.slug}`}
            className='flex items-center gap-1 font-light hover:underline'
          >
            <IoReader /> See details
          </Link>
          <button className='flex items-center gap-1 font-light hover:underline'>
            <IoCart /> Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
