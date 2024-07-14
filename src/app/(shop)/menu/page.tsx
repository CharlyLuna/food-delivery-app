import Image from "next/image"
import { FoodMenuList } from "./ui/FoodMenuList"
import { RECOMENDED_DISHES } from "@/mocks/products"
import { RecommendedProductsSplash } from "./ui/RecommendedProductsSplash"
import { IoArrowForward } from "react-icons/io5"

export default function MenuPage() {
  return (
    <div className='min-h-screen relative px-4 md:px-10 text-gray-700'>
      <div className='-z-10 absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='relative block w-full   h-[450px]'
        >
          <path
            d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
            className='fill-slate-800 '
          ></path>
        </svg>
      </div>
      <h1 className='text-4xl pt-10 text-gray-700 font-bold'>
        Menu of the week
      </h1>
      <FoodMenuList />
      <div className='pb-16'>
        <h2 className='font-bold text-gray-700 text-4xl mb-4 text-center lg:text-start'>
          Eat one of the most tasting dishes!
        </h2>
        <RecommendedProductsSplash />
      </div>
      <div className='text-center text-white pb-10'>
        <p className='text-2xl lg:text-3xl mb-2'>
          Either you want healthy meal or tasty one, we have it all!
        </p>
        <p className='flex text-lg lg:text-2xl justify-center gap-2 items-center'>
          <IoArrowForward /> Order your favorite dish now!
        </p>
      </div>
    </div>
  )
}
