import { IoStar } from "react-icons/io5"
import { Product } from "@/interfaces/product"

interface Props {
  product: Product
}

export const DetailsCard = ({ product }: Props) => {
  const rating = new Array(Math.floor(product.rating)).fill(0)

  return (
    <div className='mb-4 lg:mb-0 w-[300px] lg:w-fit lg:absolute z-20 lg:left-1/4 lg:bottom-1/4 text-gray-700 font-bold lg:text-white lg:bg-gray-400/40 lg:border border-white lg:backdrop-blur-sm lg:p-4 rounded-lg'>
      <div className='hidden lg:flex justify-between'>
        <p className='self-end text-3xl font-bold'>Details</p>
        <div className='h-7 w-7 border-4 border-white bg-teal-500 rounded-full self-end mb-4' />
      </div>
      <div className='flex flex-col items-center lg:items-start'>
        <div className='flex gap-2 my-2'>
          {rating.map((_, index) => (
            <IoStar className='text-yellow-500' key={index} size={20} />
          ))}
        </div>

        <p>Number of serves: {product.details.numberOfServes}</p>
        <p>Preparation time: {product.details.preparationTime} minutes</p>
        <p>Calories: {product.details.calories}</p>
      </div>
    </div>
  )
}
