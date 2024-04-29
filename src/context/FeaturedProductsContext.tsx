"use client"
import { featuredProducts as products } from "@/app/mocks"
import { Product } from "@/interfaces/product"
import { createContext, useState } from "react"

export type FeaturedProductsContextType = {
  featuredProducts: Product[]
  currentHighlightedProduct: any
  setCurrentHighlightedProduct: (product: Product) => void
}

const initialStateContextState: FeaturedProductsContextType = {
  featuredProducts: [],
  currentHighlightedProduct: null,
  setCurrentHighlightedProduct: () => {},
}

export const FeaturedProductsContext =
  createContext<FeaturedProductsContextType>(initialStateContextState)

interface Props {
  children: React.ReactNode
}

export const FeaturedProductsProvider = ({ children }: Props) => {
  const [featuredProducts] = useState<Product[]>(products)
  const [currentHighlightedProduct, setCurrentHighlightedProduct] = useState<Product | null>(null)

  return (
    <FeaturedProductsContext.Provider
      value={{
        featuredProducts,
        currentHighlightedProduct,
        setCurrentHighlightedProduct,
      }}
    >
      {children}
    </FeaturedProductsContext.Provider>
  )
}
