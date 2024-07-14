"use client"

import { Product } from "@/interfaces/product"
import { useCartStore } from "@/store"

interface Props {
  product: Product
}

export const IngredientsCard = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.AddProductToCart)

  const addProduct = () => {
    addProductToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      slug: product.slug,
    })
  }

  return (
    <div className='text-gray-700 flex flex-col gap-4 py-4 rounded-md shadow-xl bg-white self-end xl:self-center p-5 sm:p-10 xl:ml-[12vw] xl:pl-28 h-fit w-fit'>
      <h2 className='text-xl md:text-3xl font-bold '>{product.name}</h2>
      <p className='max-w-[450px]'>{product.ingredients.join(", ")}</p>
      <div className='flex gap-2 items-center justify-between'>
        <p className='font-bold text-lg'>${product.price}</p>
        <button
          onClick={addProduct}
          className=' bg-teal-400 px-4 py-2 rounded-full font-bold text-teal-900 hover:bg-teal-600 hover:text-white hover:scale-110 transition-all duration-300'
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
