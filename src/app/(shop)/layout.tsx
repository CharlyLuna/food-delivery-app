import { Footer, Navbar, Sidebar } from "@/components"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Sidebar />
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
