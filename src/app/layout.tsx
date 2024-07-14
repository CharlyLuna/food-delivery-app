import type { Metadata } from "next"
import { FeaturedProductsProvider } from "@/context/FeaturedProductsContext"
import { inter, mainFont } from "@/config/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Coco's ResFood",
  description:
    "Landing page for Coco's ResFood, a restaurant that offers a variety of delicious dishes.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={mainFont.className}>
        <FeaturedProductsProvider>{children}</FeaturedProductsProvider>
      </body>
    </html>
  )
}
