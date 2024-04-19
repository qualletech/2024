/* eslint-disable max-len */

"use client"

import StyleProvider from "../styles/StyleProvider"
import HomepageLayout from "./layouts/homepage"
import SubpageLayout from "./layouts/subpages"
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
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
        />
      </head>
      <StyleProvider>
        <body>
          {isHomePage ? <HomepageLayout>{children}</HomepageLayout> : <SubpageLayout>{children}</SubpageLayout>}
        </body>
      </StyleProvider>
    </html>
  )
}
