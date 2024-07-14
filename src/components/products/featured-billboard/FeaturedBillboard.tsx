"use client"
import { useContext, useEffect, useState } from "react"
import {
  FeaturedProductsContext,
  FeaturedProductsContextType,
} from "@/context/FeaturedProductsContext"
import Image from "next/image"
import { IoCart, IoReader } from "react-icons/io5"
import Link from "next/link"
import { useCartStore } from "@/store"

export const FeaturedBillboard = () => {
  const { currentHighlightedProduct: product } = useContext(
    FeaturedProductsContext
  ) as FeaturedProductsContextType
  const [animate, setAnimate] = useState(true)
  const addProductToCart = useCartStore((state) => state.AddProductToCart)

  // const index = featuredProducts.findIndex((p) => p.id === product.id)

  useEffect(() => {
    setAnimate(true)
  }, [product])

  const addProduct = () => {
    addProductToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      slug: product.slug,
    })
  }

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
        <p className='font-bold text-lg'>#{product.id} Most loved dish</p>
        <h1 className='hidden sm:block text-2xl md:text-4xl xl:text-6xl font-black text-balance max-w-[400px] lg:max-w-[450px]'>
          {product.name}
        </h1>
        <div className='flex gap-4 mt-4'>
          <Link
            href={`/product/${product.slug}`}
            className='flex items-center gap-1 font-light hover:underline'
          >
            <IoReader /> See details
          </Link>
          <button
            onClick={addProduct}
            className='flex items-center gap-1 font-light hover:underline'
          >
            <IoCart /> Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
