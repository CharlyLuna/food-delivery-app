"use client"
import { useContext, useEffect, useState } from "react"
import {
  FeaturedProductsContext,
  FeaturedProductsContextType,
} from "@/context/FeaturedProductsContext"
import Image from "next/image"
import { IoCart, IoCartOutline, IoReader } from "react-icons/io5"

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
    <div className='flex gap-4 mb-10 items-center'>
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
      <div className='max-w-[450px] overflow-hidden content-center'>
        <p className='font-bold text-lg'>#{index + 1} Most loved dish</p>
        <h1 className='text-6xl font-black text-balance'>{product.name}</h1>
        <div className='flex gap-4 mt-4'>
          <button className='flex items-center gap-1 font-light hover:underline'>
            <IoReader /> See details
          </button>
          <button className='flex items-center gap-1 font-light hover:underline'>
            <IoCart /> Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
