"use client"
import {
  FeaturedProductsContext,
  FeaturedProductsContextType,
} from "@/context/FeaturedProductsContext"
import { useContext, useState } from "react"
import { IoStar } from "react-icons/io5"

export const ProductInfoCard = () => {
  const { currentHighlightedProduct: product } = useContext(
    FeaturedProductsContext
  ) as FeaturedProductsContextType
  const [activeTab, setActiveTab] = useState<"overview" | "ingredients">(
    "overview"
  )
  return (
    <div className='flex flex-col gap-8 bg-gray-100 rounded-2xl shadow-md h-fit lg:h-[600px] p-10'>
      <div className='flex justify-between'>
        <p
          className={`${activeTab === "overview" ? "font-bold" : "font-light"}`}
        >
          Overview
        </p>
        <p
          className={`${
            activeTab === "ingredients" ? "font-bold" : "font-light"
          }`}
        >
          Ingredients
        </p>
      </div>
      <div className='relative flex justify-center items-end bg-green-200 rounded-2xl p-2 w-[60px] h-[100px]'>
        <p className='absolute top-0 left-2 text-6xl font-black'>
          {product.rating.toFixed(1)}
        </p>
        <IoStar size={35} />
      </div>
      <div className='flex flex-col gap-2 fadeInRight'>
        <p className='font-bold text-xl'>{product.category}</p>
        <p className='font-light'>${product.price}MXN</p>
        <p>{product.description}</p>
      </div>
    </div>
  )
}
