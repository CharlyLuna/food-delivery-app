import type { Metadata } from "next"
import { FeaturedProductsProvider } from "@/context/FeaturedProductsContext"
import { inter, mainFont } from "@/config/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Coco's ResFood",
  description:
    "Landing page of Coco's ResFood, a restaurant that offers a variety of delicious dishes.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta property='og:image' content='/cocos-logo.png' />
        <meta name='twitter:image' content='/cocos-logo.png' />
      </head>
      <body className={mainFont.className}>
        <FeaturedProductsProvider>{children}</FeaturedProductsProvider>
      </body>
    </html>
  )
}
