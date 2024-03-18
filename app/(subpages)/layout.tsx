/* eslint-disable max-len */

"use client"

import StyleProvider from "../../styles/StyleProvider"
import theme from "../../styles/theme"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styled from "styled-components"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
        />
      </head>
      <StyleProvider>
        <body>
          <Container>
            <Main>
              <IconContainer onClick={() => router.push("/")}>
                <h1>Qualle Tech</h1>
              </IconContainer>
              <Logo>
                <Image src="/logo-dark.png" height={100} width={100} alt="Qualle Tech Logo" />
              </Logo>
              {children}
            </Main>
          </Container>
        </body>
      </StyleProvider>
    </html>
  )
}

const Logo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${theme.colors.backgroundDark};
  display: grid;
  padding: 2rem;
  grid-gap: 1rem;
  overflow: none;
`

const IconContainer = styled.a`
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
`

const Main = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;
`
