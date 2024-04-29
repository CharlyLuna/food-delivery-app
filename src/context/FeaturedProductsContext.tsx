"use client"
import { featuredProducts as products } from "@/mocks"
import { Product } from "@/interfaces/product"
import { createContext, useState } from "react"

export type FeaturedProductsContextType = {
  featuredProducts: Product[]
  currentHighlightedProduct: Product
  handleHighlightedProduct: (product: Product) => void
}

const initialStateContextState: FeaturedProductsContextType = {
  featuredProducts: [],
  currentHighlightedProduct: products[0],
  handleHighlightedProduct: () => {},
}

export const FeaturedProductsContext =
  createContext<FeaturedProductsContextType>(initialStateContextState)

interface Props {
  children: React.ReactNode
}

export const FeaturedProductsProvider = ({ children }: Props) => {
  const [featuredProducts] = useState<Product[]>(products)
  const [currentHighlightedProduct, setCurrentHighlightedProduct] = useState<Product>(
    featuredProducts[0]
  )

  const handleHighlightedProduct = (product: Product) => {
    setCurrentHighlightedProduct(product)
  }

  return (
    <FeaturedProductsContext.Provider
      value={{
        featuredProducts,
        currentHighlightedProduct,
        handleHighlightedProduct,
      }}
    >
      {children}
    </FeaturedProductsContext.Provider>
  )
}
