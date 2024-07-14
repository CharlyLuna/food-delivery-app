"use client"
import { useCartStore } from "@/store"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export const CartItem = () => {
  const cart = useCartStore((state) => state.cart)
  const removeProduct = useCartStore((state) => state.removeProductFromCart)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return (
      <>
        <div className='h-[200px] md:h-[130px] w-[350px] animate-pulse bg-gray-200 my-4 rounded-md'></div>
      </>
    )
  }

  return (
    <div>
      {cart.map((item) => (
        <div
          key={item.id}
          className='flex flex-row items-center gap-2 bg-white p-4 rounded-md shadow-xl w-full md:w-[350px] mt-5'
        >
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            className='rounded-md w-auto object-cover'
          />
          <div className='w-full flex items-center flex-row justify-between'>
            <div>
              <Link
                href={`/product/${item.slug}`}
                className='text-sm max-w-[150px] hover:underline'
              >
                {item.name}
              </Link>
              <p className='text-sm mt-2'>${item.price} USD</p>
              <button onClick={() => removeProduct(item)} className='underline'>
                Remove
              </button>
            </div>
            <div className='flex items-center gap-3'>
              <button className='btn-primary'>-</button>
              <p>{item.quantity}</p>
              <button className='btn-primary'>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
