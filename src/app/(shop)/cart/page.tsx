"use client"
import Link from "next/link"
import { OrderSummary } from "./ui/OrderSummary"
import { CartItem } from "./ui/CartItem"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const router = useRouter()

  const handleOrder = () => {
    router.replace("/order")
  }

  return (
    <div className='min-h-screen flex justify-center items-center px-4 lg:px-0 flex-col py-10'>
      <h1 className='text-3xl font-bold mb-20'>Your cart</h1>
      <div className='flex flex-col w-full md:items-center'>
        {/* Cart */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10'>
          <div className='flex flex-col'>
            <p className='text-xl'>Add more items</p>
            <Link href='/' className='underline'>
              Browse our menu
            </Link>
            {/* <ProductsInCart /> */}
            <CartItem />
          </div>

          {/* Checkout */}
          <div className='bg-white rounded-xl shadow-xl p-6 h-fit'>
            <h2 className='text-2xl mb-2'>Order details</h2>
            <OrderSummary />
            <div className='mt-5 w-full'>
              <button
                onClick={handleOrder}
                className='w-full py-2 bg-teal-600 rounded-md text-white hover:scale-105 hover:bg-teal-700 transition-all duration-300'
              >
                Place your order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
