import { RESTAURANT_NAME } from "@/utils"
import Link from "next/link"
import { FaRegUserCircle } from "react-icons/fa"
import { IoCart } from "react-icons/io5"

export const Navbar = () => {
  return (
    <nav className='fixed top-0 z-50 bg-white border-b border-b-gray-300 w-full py-4 px-10 flex justify-between items-center h-[5vh] text-gray-700'>
      <Link href='/' className='font-bold text-lg '>
        {RESTAURANT_NAME}
      </Link>
      <ul className='flex gap-8'>
        <li>
          <Link href='#'>About us</Link>
        </li>
        <li>
          <Link href='#'>Food menu</Link>
        </li>
      </ul>
      <div className='flex gap-4 items-center'>
        <IoCart size={20} />
        <FaRegUserCircle size={20} />
      </div>
    </nav>
  )
}
