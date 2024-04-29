import type { Product } from "@/interfaces/product"

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className='bg-slate-400'>
      {/* <img src={product.image} alt={product.name} /> */}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  )
}
