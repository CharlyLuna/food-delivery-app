import type { Product } from "@/interfaces/product"
import Image from "next/image"

interface Props {
  product: Product
  active: boolean
}

export const ProductCard = ({ product, active }: Props) => {
  return (
    <div
      className={`${active ? "bg-gray-100 shadow-sm" : ""} 
      flex flex-col justify-center items-center font-normal h-[300px] p-4 text-center rounded-xl `}
    >
      <Image
        src={product.image}
        alt={product.name}
        height={200}
        width={200}
        className={`${
          active && "scale-110"
        } transition-all duration-700 ease-in-out`}
      />
      <p
        className={`${
          active && "font-bold"
        } px-4 transition-all duration-500 ease-in-out`}
      >
        {product.name}
      </p>
    </div>
  )
}
