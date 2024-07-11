import { Footer, Navbar } from "@/components"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <main className='h-screen pt-[5vh]'>
        <div className='h-full overflow-auto'>
          {children}
          <Footer />
        </div>
      </main>
    </>
  )
}
