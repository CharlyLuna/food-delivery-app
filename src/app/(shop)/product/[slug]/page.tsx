import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { IngredientsCard } from "./ui/IngredientsCard"
import { DetailsCard } from "./ui/DetailsCard"
import { ProductsSlideshow } from "@/components"
import { DISHES } from "@/mocks/products"
import type { Product } from "@/interfaces/product"

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const product: Product | undefined = DISHES.find(
    (product) => product.slug === slug
  )

  return {
    title: product?.name ?? "product not found",
    description: product?.description ?? "",
    openGraph: {
      title: product?.name ?? "product not found",
      description: product?.description ?? "",
      images: [product?.image ?? ""],
    },
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
      <div className='xl:hidden absolute top-0 left-0 w-full overflow-hidden'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='relative block w-[300%] md:w-[180%] h-[350px] md:h-[450px] -z-10'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='fill-slate-700'
          ></path>
        </svg>
      </div>
      <div className='hidden xl:block absolute rounded-r-full  h-full w-[60%] left-0 bg-slate-700 -z-10' />
      <div className='xl:pt-10 relative  lg:min-h-screen grid grid-cols-1 xl:grid-cols-2 items-center justify-items-center content-start lg:content-normal px-10'>
        <h1 className='text-gray-100 font-bold md:max-w-[450px] text-3xl md:text-5xl place-self-start py-10'>
          Check out the dish ingredients!
        </h1>
        <Image
          src={product.image}
          height={500}
          width={500}
          alt={product.name}
          priority
          className='fadeIn mt-10 lg:mt-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 h-[30vh] w-[30vh] sm:h-[40vw] sm:w-[40vw] xl:h-[35vw] xl:w-[35vw] object-cover rounded-lg z-20'
        />
        <DetailsCard product={product} />
        <IngredientsCard product={product} />
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
