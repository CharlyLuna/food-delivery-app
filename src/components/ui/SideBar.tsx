"use client"
import Link from "next/link"
import {
  IoCloseOutline,
  IoHome,
  IoHomeOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoReader,
  IoReaderOutline,
  IoRestaurantOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5"
import { useUIStore } from "@/store"
import { RESTAURANT_NAME } from "@/utils"

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen)
  const closeMenu = useUIStore((state) => state.closeSideMenu)

  return (
    <div>
      {isSideMenuOpen && (
        <>
          <div className='fixed top-0 left-0 w-screen h-screen z-50 bg-black opacity-30' />
          <div
            onClick={() => closeMenu()}
            className='fixed fade-in top-0 left-0 w-screen h-screen z-50 backdrop-filter backdrop-blur-sm'
          />
        </>
      )}

      {/* Side menu */}
      <nav
        className={`overflow-auto fixed p-5 right-0 top-0 w-screen md:w-[500px] h-screen bg-white z-50 shadow-2xl transform transition-all duration-300 ${
          !isSideMenuOpen && "translate-x-full"
        }`}
      >
        <button onClick={() => closeMenu()}>
          <IoCloseOutline className='absolute top-5 right-5' size={50} />
        </button>

        <h1 className='mt-10 text-center text-2xl font-bold'>
          {RESTAURANT_NAME}
        </h1>
        <hr className='my-4' />
        {/* <div className='relative mt-4 mb-5'>
          <IoSearchOutline size={20} className='absolute top-2 left-2' />
          <input
            type='text'
            placeholder='Search'
            className='w-full bg-gray-50 rounded px-10 py-1 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
          />
        </div> */}

        <ul className='space-y-4'>
          <li>
            <Link
              href='/'
              onClick={() => closeMenu()}
              className='flex items-center gap-4 hover:bg-gray-100 rounded-md p-2 transition-colors'
            >
              <IoHomeOutline size={30} />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link
              href='/about-us'
              onClick={() => closeMenu()}
              className='flex items-center gap-4 hover:bg-gray-100 rounded-md p-2 transition-colors'
            >
              <IoReaderOutline size={30} />
              <p>About us</p>
            </Link>
          </li>
          <li>
            <Link
              href='/menu'
              onClick={() => closeMenu()}
              className='flex items-center gap-4 hover:bg-gray-100 rounded-md p-2 transition-colors'
            >
              <IoRestaurantOutline size={30} />
              <p>Our menu</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
