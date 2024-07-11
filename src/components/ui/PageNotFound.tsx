import { mainFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"

export const PageNotFound = () => {
  return (
    <div className='flex flex-col-reverse h-full md:flex-row w-full justify-center items-center align-middle'>
      <div className='text-center px-5 mx-5'>
        <h2 className={`${mainFont.className} font-bold text-6xl`}>404</h2>
        <p className='font-semibold text-3xl'>
          Whoops! We are sorry, this page is not available
        </p>
        <p className='font-light mt-4'>
          <span>Go back to </span>
          <Link href='/' className='font-normal hover:underline transition-all'>
            home
          </Link>
        </p>
      </div>
    </div>
  )
}
