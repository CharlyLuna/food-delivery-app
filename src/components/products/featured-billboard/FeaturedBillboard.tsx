"use client"
import {
  FeaturedProductsContext,
  FeaturedProductsContextType,
} from "@/context/FeaturedProductsContext"
import Image from "next/image"
import { useContext } from "react"

export const FeaturedBillboard = () => {
  const { currentHighlightedProduct: product, featuredProducts } = useContext(
    FeaturedProductsContext
  ) as FeaturedProductsContextType

  const index = featuredProducts.findIndex((p) => p.id === product.id)

  return (
    <div className='flex gap-4 mb-10'>
      <Image src={product.image} alt={product.name} height={400} width={400} />
      <div className='max-w-[450px] overflow-hidden content-center'>
        <p className='font-bold text-lg'>#{index + 1} Most loved dish</p>
        <h1 className='text-6xl font-black text-balance'>{product.name}</h1>
        <div className='flex gap-4 mt-4'>
          <button className='font-light hover:underline'>See details</button>
          <button className='font-light hover:underline'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
