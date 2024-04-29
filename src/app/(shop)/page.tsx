import { FeaturedProductsSlideshow } from "@/components"

export default function Home() {
  return (
    <div className='h-screen overflow-auto'>
      <div className='grid grid-cols-4 mt-10 gap-4 h-screen'>
        <div className='col-span-3'>
          <div className='h-[300px] bg-slate-400 m-4'>
            <h1>Featured Products</h1>
          </div>
          <FeaturedProductsSlideshow />
        </div>
        <div>Product detailed information</div>
      </div>
      <div className='h-screen'>
        <div>Hello world</div>
      </div>
    </div>
  )
}
