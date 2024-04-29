import type { Product } from "@/interfaces/product"
import Image from "next/image"

interface Props {
  product: Product
  active: boolean
}

export const ProductCard = ({ product, active }: Props) => {
  return (
    <div
      className={`${
        active ? "bg-white/40 shadow-sm" : ""
      } font-light h-[300px] p-4 text-center rounded-xl`}
    >
      <Image src={product.image} alt={product.name} height={200} width={200} />
      <h3>{product.name}</h3>
    </div>
  )
}
