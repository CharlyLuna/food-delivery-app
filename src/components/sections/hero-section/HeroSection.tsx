import {
  FeaturedBillboard,
  FeaturedProductsSlideshow,
  ProductInfoCard,
} from "@/components"

export const HeroSection = () => {
  return (
    <div className='mx-4 lg:mx-6 grid grid-cols-1 lg:grid-cols-4 my-10 gap-4 items-center justify-center min-h-screen'>
      <div className='lg:col-span-3 h-[800px]'>
        <FeaturedBillboard />
        <FeaturedProductsSlideshow />
      </div>
      <ProductInfoCard />
    </div>
  )
}
