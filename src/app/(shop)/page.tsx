import { FeaturedBillboard, FeaturedProductsSlideshow, ProductInfoCard } from "@/components"

export default function Home() {
  return (
    <div className='h-screen overflow-auto text-gray-700'>
      <div className='mx-4 lg:mx-6 grid grid-cols-1 lg:grid-cols-4 mt-10 gap-4 items-center justify-center'>
        <div className='lg:col-span-3 h-[800px]'>
          <FeaturedBillboard />
          <FeaturedProductsSlideshow />
        </div>
        <ProductInfoCard />
      </div>
      <div className='h-screen'>
        <div>Hello world</div>
      </div>
    </div>
  )
}
