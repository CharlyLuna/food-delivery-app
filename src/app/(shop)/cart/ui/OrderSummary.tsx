"use client"
import { useCartStore } from "@/store"
import Link from "next/link"
import { redirect } from "next/navigation"
import React, { useEffect, useState } from "react"

export const OrderSummary = () => {
  const [loaded, setLoaded] = useState(false)
  const { itemsInCart, total } = useCartStore((state) =>
    state.getSummaryInformation()
  )

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (itemsInCart === 0) redirect("/empty")
  }, [loaded, itemsInCart])

  if (!loaded) {
    return (
      <div className='flex flex-col gap-2'>
        <p className='bg-gray-200 animate-pulse w-full h-4'></p>
        <p className='bg-gray-200 animate-pulse w-full h-4'></p>
        <p className='bg-gray-200 animate-pulse w-full h-4'></p>
        <p className='bg-gray-200 animate-pulse w-full h-10 mt-2'></p>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-2'>
      <p># Products</p>
      <p className='text-right'>
        {itemsInCart === 1 ? "1 product" : `${itemsInCart} products`}
      </p>
      <p>Shipping</p>
      <p className='text-right'>$2.00 USD</p>
      <p className='mt-4 text-2xl'>Total</p>
      <p className='mt-4 text-2xl text-right'>${(total + 2).toFixed(2)} USD</p>
    </div>
  )
}
