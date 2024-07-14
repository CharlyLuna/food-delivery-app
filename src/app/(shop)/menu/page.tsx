import { FoodMenuList } from "./ui/FoodMenuList"

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
      <div></div>
    </div>
  )
}
