import {
  BenefitsSection,
  ClientsSection,
  HeroSection,
  RecipesSection,
} from "@/components"

export default function Home() {
  return (
    <div className='h-full overflow-auto overflow-x-hidden text-gray-700'>
      <HeroSection />
      <RecipesSection />
      <ClientsSection />
      <BenefitsSection />
    </div>
  )
}
