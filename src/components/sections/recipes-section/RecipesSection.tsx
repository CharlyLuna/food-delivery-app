import { ProductRecipeCard } from "@/components/products/product-recipe-card/ProductRecipeCard"
import { TODAY_RECIPES } from "@/mocks/products"

const products = TODAY_RECIPES

export const RecipesSection = () => {
  return (
    <div className='my-10 mx-10 h-full'>
      <h1>TODAY RECIPES</h1>
      <div className='flex gap-4 justify-center flex-wrap'>
        {products.map((product) => (
          <ProductRecipeCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
