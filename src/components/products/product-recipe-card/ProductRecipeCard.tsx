import { Product } from "@/interfaces/product"
import Image from "next/image"
import { IoFastFood, IoPeople, IoTime } from "react-icons/io5"

interface Props {
  product: Product
}

export const ProductRecipeCard = ({ product }: Props) => {
  const { details, image } = product
  return (
    <div className='flex flex-col bg-gray-100 w-[250px] text-center p-6 rounded-lg'>
      <div className='flex justify-center mb-4'>
        <Image className='aspect-square' src={image} alt={product.name} height={150} width={150} />
      </div>
      <p className='font-bold mb-6'>{product.name}</p>
      <p className='h-full mb-4'>{product.description}</p>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2 items-center'>
          <IoTime size={20} className='mb-2' />
          <p>{details.preparationTime}</p>
        </div>

        <div className='flex flex-col gap-2 items-center'>
          <IoFastFood size={20} className='mb-2' />
          <p>{details.calories}</p>
        </div>

        <div className='flex flex-col gap-2 items-center'>
          <IoPeople size={20} className='mb-2' />
          <p>{details.numberOfServes}</p>
        </div>
      </div>
    </div>
  )
}
