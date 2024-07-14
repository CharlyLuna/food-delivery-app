import type { CartItem } from "@/interfaces/product"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface SummaryInformation {
  total: number
  itemsInCart: number
}

interface State {
  cart: CartItem[]
  getTotalItems: () => number
  getSummaryInformation: () => SummaryInformation
  AddProductToCart: (product: CartItem) => void
  updateProductQuantity: (product: CartItem, quantity: number) => void
  removeProductFromCart: (product: CartItem) => void
  clearCart: () => void
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotalItems: () => {
        const { cart } = get()
        return cart.reduce((acc, item) => acc + item.quantity, 0)
      },
      getSummaryInformation: () => {
        const { cart } = get()
        const total = cart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        )
        const itemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0)

        return {
          total,
          itemsInCart,
        }
      },
      AddProductToCart: (product: CartItem) => {
        const { cart } = get()
        const productInCart = cart.some((item) => item.id === product.id)
        // Add product if it doesnt exist in cart
        if (!productInCart) {
          set({ cart: [...cart, product] })
          return
        }

        // Update product quantity if it exists in cart
        const updatedCart = cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + product.quantity }
          }
          return item
        })

        set({ cart: updatedCart })
      },
      updateProductQuantity: (product: CartItem, quantity: number) => {
        const { cart } = get()

        const updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: quantity } : item
        )

        set({ cart: updatedCart })
      },
      removeProductFromCart: (product: CartItem) => {
        const { cart } = get()
        const updatedCart = cart.filter((item) => item.id !== product.id)

        set({ cart: updatedCart })
      },
      clearCart: () => {
        set({ cart: [] })
      },
    }),
    {
      name: "cocos-dishes-cart",
    }
  )
)
