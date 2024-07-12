import { ProductsSlideshow } from "@/components"
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
    <div className='relative'>
      <div className='absolute xl:rounded-r-full h-[20vh] xl:h-full w-full xl:w-[60%] left-0 bg-slate-700 -z-10 ' />
      <div className='xl:pt-10 relative min-h-screen grid grid-cols-1 xl:grid-cols-2 items-center justify-items-center px-10'>
        <h1 className=' text-white lg:max-w-[450px] text-3xl md:text-5xl place-self-start py-10'>
          Check out the product ingredients!
        </h1>
        <Image
          src={product.image}
          height={400}
          width={400}
          alt={product.name}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[38vh] w-[38vh] xl:h-[33vw] xl:w-[33vw] object-cover rounded-lg z-20'
        />
        <div className='text-gray-700 flex flex-col gap-4 py-4 rounded-md shadow-xl bg-white self-end xl:self-center mb-[10vh] p-4 xl:pl-48 xl:pr-10 h-fit w-fit'>
          <h2 className='text-xl md:text-3xl font-bold '>{product.name}</h2>
          <div className='flex gap-2 xl:gap-0 xl:flex-col'>
            {product.ingredients.map((ingredient) => (
              <p className='md:text-lg font-light' key={ingredient}>
                {ingredient}
              </p>
            ))}
          </div>
          <button className='self-end bg-teal-500 px-4 py-2 rounded-full font-bold text-teal-800 hover:bg-teal-600 hover:text-white hover:scale-110 transition-all duration-300'>
            Order now
          </button>
        </div>
        <div className='w-[300px] md:w-fit absolute z-20 left-1/2 md:left-1/3 -translate-x-1/2 bottom-[55%] xl:bottom-1/4 text-white bg-gray-400/40 border border-white backdrop-blur-sm p-4 rounded-lg'>
          <div className='hidden md:flex justify-between '>
            <p className='self-end text-3xl font-bold'>Details</p>
            <div className='h-7 w-7 border-4 border-white bg-teal-500 rounded-full self-end mb-4 ' />
          </div>
          <div className='flex flex-col items-center md:items-start'>
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
      <div className='text-gray-700 flex justify-center p-10 w-full'>
        <div className='bg-white p-8 rounded-md shadow-xl max-w-[800px]'>
          <p className='text-2xl font-bold mb-2'>About this dish</p>
          {product.description}
        </div>
      </div>
      <div className='flex flex-col gap-8 items-center justify-center py-10 px-5 sm:px-20'>
        <h3 className='text-2xl md:text-4xl text-gray-700 xl:text-gray-100 font-bold'>
          You might like...
        </h3>
        <div className='flex justify-center w-full sm:bg-white/30 sm:shadow-xl sm:py-10 rounded-md'>
          <ProductsSlideshow elements={PRODUCTS} />
        </div>
      </div>
    </div>
  )
}
