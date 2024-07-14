"use client"

import { useCartStore } from "@/store"
import { useEffect } from "react"

export default function OrderPage() {
  const resetCart = useCartStore((state) => state.clearCart)

  useEffect(() => {
    resetCart()
  }, [resetCart])

  return (
    <div className='h-[88vh]'>
      <div className='absolute top-0 left-0 w-full overflow-hidden'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='relative block w-[300%] lg:w-[200%] h-[450px] md:h-[550px] -z-10'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='fill-slate-700'
          ></path>
        </svg>
      </div>
      <div className='mt-10 px-10 flex flex-col'>
        <h1 className='text-2xl md:text-4xl text-gray-100'>
          Your order information has been sent to our chefs
        </h1>
        <div className='self-center w-fit flex flex-col gap-4 text-center md:text-start text-gray-700 text-lg md:text-2xl bg-white mt-20 p-8 rounded-md shadow-xl'>
          <h2 className='font-bold'>Order #QWE4-JH1N#44-F11Z4P</h2>
          <p>You are almost done!</p>
          <p>
            We need to confirm your order, please call us to confirm your order
            and address of delivery.
          </p>
          <p className='underline'>Our phone number is: 123 456 789</p>
        </div>
      </div>
    </div>
  )
}
