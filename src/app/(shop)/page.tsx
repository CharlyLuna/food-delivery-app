import { HeroSection, RecipesSection } from "@/components"

export default function Home() {
  return (
    <div className='h-screen overflow-auto text-gray-700'>
      <HeroSection />
      <RecipesSection />
    </div>
  )
}
