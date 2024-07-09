import { ProductRecipeCard } from "@/components/products/product-recipe-card/ProductRecipeCard"
import { TODAY_RECIPES } from "@/mocks/products"
import Image from "next/image"

const products = TODAY_RECIPES

export const RecipesSection = () => {
  return (
    <div className='my-10 py-24 px-10 h-full bg-[#EAEAE9]'>
      <div className='text-center mb-10'>
        <Image
          className='mx-auto'
          src='/backgrounds/leaves.png'
          height={70}
          width={70}
          alt=''
        />
        <h1 className='text-3xl font-bold'>TODAY RECIPES</h1>
        <p>Check our recommended recipes for today</p>
      </div>
      <div className='flex gap-8 justify-center flex-wrap'>
        {products.map((product) => (
          <ProductRecipeCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
