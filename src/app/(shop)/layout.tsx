import type { Metadata } from "next"
import { FeaturedProductsProvider } from "@/context/FeaturedProductsContext"
import { inter, mainFont } from "@/config/fonts"
import "../globals.css"
import { Footer, Navbar } from "@/components"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={mainFont.className}>
        <Navbar />
        <FeaturedProductsProvider>{children}</FeaturedProductsProvider>
        <Footer />
      </body>
    </html>
  )
}
