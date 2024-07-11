import { RESTAURANT_NAME } from "@/utils"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className='bg-[#c8c8c8] w-full flex justify-center text-sm'>
      <h1>
        {RESTAURANT_NAME} | <span>{new Date().getFullYear()}</span>
      </h1>

      <Link href='#' className='mx-2'>
        Terms & Conditions
      </Link>
    </div>
  )
}
