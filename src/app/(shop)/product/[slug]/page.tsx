import { ProductsSlideshow } from "@/components"
import { Product } from "@/interfaces/product"
import { DISHES } from "@/mocks/products"
import Image from "next/image"
import { notFound } from "next/navigation"
import { IoStar } from "react-icons/io5"
import { DetailsCard } from "./ui/DetailsCard"

interface Props {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: Props) {
  const { slug } = params
  const product: Product | undefined = DISHES.find(
    (product) => product.slug === slug
  )

  if (!product) return notFound()

  if (!product) return notFound()
  return (
    <div className='relative'>
      <div className='hidden xl:block absolute rounded-r-full  h-full w-[60%] left-0 bg-slate-700 -z-10' />
      <div className='xl:pt-10 relative  lg:min-h-screen grid grid-cols-1 xl:grid-cols-2 items-center justify-items-center content-start lg:content-normal px-10'>
        <h1 className='text-slate-700 font-bold xl:text-white md:max-w-[450px] text-3xl md:text-5xl place-self-start py-10'>
          Check out the dish ingredients!
        </h1>
        <Image
          src={product.image}
          height={500}
          width={500}
          alt={product.name}
          className='mt-10 lg:mt-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 h-[30vh] w-[30vh] sm:h-[40vw] sm:w-[40vw] xl:h-[33vw] xl:w-[33vw] object-cover rounded-lg z-20'
        />
        <DetailsCard product={product} />
        <div className='text-gray-700 flex flex-col gap-4 py-4 rounded-md shadow-xl bg-white self-end xl:self-center p-10 xl:ml-[12vw] xl:pl-24 h-fit w-fit'>
          <h2 className='text-xl md:text-3xl font-bold '>{product.name}</h2>
          <p className='max-w-[450px]'>{product.ingredients.join(", ")}</p>
          <button className='self-end bg-teal-500 px-4 py-2 rounded-full font-bold text-teal-800 hover:bg-teal-600 hover:text-white hover:scale-110 transition-all duration-300'>
            Order now
          </button>
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
          <ProductsSlideshow elements={DISHES} />
        </div>
      </div>
    </div>
  )
}
