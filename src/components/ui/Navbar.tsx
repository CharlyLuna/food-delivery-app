"use client"
import { useUIStore } from "@/store"
import { RESTAURANT_NAME } from "@/utils"
import Link from "next/link"
import { FaRegUserCircle } from "react-icons/fa"
import { IoCart } from "react-icons/io5"

export const Navbar = () => {
  const openMenu = useUIStore((state) => state.openSideMenu)
  return (
    <nav className='fixed top-0 z-30 bg-white border-b border-b-gray-300 w-full py-2 px-4 sm:px-10 flex justify-between items-center min-h-[5vh] text-gray-700'>
      <Link href='/' className='font-bold text-lg '>
        {RESTAURANT_NAME}
      </Link>
      <ul className='hidden md:flex gap-8'>
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
        <button
          onClick={() => openMenu()}
          className='md:hidden p-2 rounded-md transition-all hover:bg-gray-100'
        >
          Menu
        </button>
      </div>
    </nav>
  )
}
