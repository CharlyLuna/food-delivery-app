import { FeaturedBillboard, FeaturedProductsSlideshow } from "@/components"

export default function Home() {
  return (
    <div className='h-screen overflow-auto text-gray-700'>
      <div className='mx-4 lg:mx-6 grid grid-cols-1 lg:grid-cols-4 mt-10 gap-4 h-screen'>
        <div className='lg:col-span-3 h-[800px]'>
          <FeaturedBillboard />
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
