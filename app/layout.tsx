/* eslint-disable max-len */

"use client"

import StyleProvider from "../styles/StyleProvider"
import HomepageLayout from "./layouts/homepage"
import SubpageLayout from "./layouts/subpages"
import { GoogleAnalytics } from "@next/third-parties/google"
import { usePathname } from "next/navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  return (
    <html lang="en">
      <head>
        <title>Qualle Tech</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        />
        <meta
          name="description"
          content="My ultimate goal is to help changemakers and creatives turn their ideas into reality through web development services."
        />
        <meta
          name="keywords"
          content="web development, website, web application, full stack development, service provider, web design, web dev"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vik Wedel" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <StyleProvider>
        <body>
          {isHomePage ? <HomepageLayout>{children}</HomepageLayout> : <SubpageLayout>{children}</SubpageLayout>}
          <GoogleAnalytics gaId="G-2ZC907Y5TC" />
        </body>
      </StyleProvider>
    </html>
  )
}
