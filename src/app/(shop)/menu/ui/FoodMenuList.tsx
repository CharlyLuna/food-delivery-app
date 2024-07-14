"use client"

import { ProductsSlideshow } from "@/components"
import { FoodCategoriesList } from "./FoodCategoriesList"
import { Product } from "@/interfaces/product"
import { useState } from "react"
import { DISHES } from "@/mocks/products"

export const FoodMenuList = () => {
  const [category, setCategory] = useState("Salad")
  const productsByCategory = DISHES.filter((dish) => dish.category === category)
  console.log(productsByCategory.length)

  return (
    <div className='py-10 sm:px-14 md:px-0'>
      <FoodCategoriesList
        onCategoryChange={(category: string) => setCategory(category)}
      />
      <div className='flex w-full lg:w-[90%] rounded-md bg-gray-100/50 py-10 my-10'>
        <ProductsSlideshow
          elements={productsByCategory}
          breakpoints={{
            "1440": 4,
            "1240": 4,
            "980": 3,
          }}
          loop={false}
          style={{ width: "95%" }}
        />
      </div>
    </div>
  )
}
