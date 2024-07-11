export type Product = {
  id: number
  name: string
  slug: string
  ingredients: string[]
  price: number
  description: string
  image: string
  category: string
  rating: number
  details: ProductDetails
}

export type ProductDetails = {
  numberOfServes: number
  preparationTime: number
  calories: string
}
