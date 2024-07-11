import { Product } from "@/interfaces/product"
import { PRODUCTS } from "@/mocks/products"
import Image from "next/image"
import { notFound } from "next/navigation"
import { IoStar } from "react-icons/io5"

interface Props {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: Props) {
  const { slug } = params
  const product: Product | undefined = PRODUCTS.find(
    (product) => product.slug === slug
  )

  if (!product) return notFound()

  const rating = new Array(Math.floor(product.rating)).fill(0)

  if (!product) return notFound()
  return (
    <>
      <div className='pt-10 relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center px-10'>
        <h1 className='lg:text-white lg:max-w-[450px] text-5xl justify-self-start place-self-start py-10'>
          Check out the product ingredients!
        </h1>
        <Image
          src={product.image}
          height={400}
          width={400}
          alt={product.name}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[33vw] w-[33vw] object-cover rounded-lg z-20'
        />

        <div className='absolute rounded-r-full h-full w-[60%] left-0 bg-slate-600 -z-10 hidden lg:block' />

        <div className='flex flex-col gap-4 py-4 rounded-md shadow-xl bg-white pl-48 pr-10 h-fit w-fit'>
          <h1 className='text-3xl font-bold'>{product.name}</h1>
          <div>
            {product.ingredients.map((ingredient) => (
              <p className='text-lg font-light' key={ingredient}>
                {ingredient}
              </p>
            ))}
          </div>
          <button className='self-end bg-slate-400 px-4 py-2 rounded-full text-white'>
            Order now!
          </button>
        </div>
        <div className='absolute z-20 left-1/3 -translate-x-1/2 bottom-1/4 text-white bg-gray-400/50 backdrop-blur-sm p-4 rounded-lg'>
          <h1 className='text-3xl font-bold'>In deep details</h1>
          <div className='flex flex-col'>
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
      </div>
    </>
  )
}
