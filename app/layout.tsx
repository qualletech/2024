/* eslint-disable max-len */

"use client"

import StyleProvider from "../styles/StyleProvider"
import theme from "../styles/theme"
import { mdiGithub, mdiInstagram, mdiLinkedin } from "@mdi/js"
import Icon from "@mdi/react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import styled, { keyframes } from "styled-components"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const isHomepage = pathname === "/"

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
          <Logo $homeAnimation={isHomepage}>
            <Image src="/logo-dark.png" height={200} width={200} alt="Qualle Tech Logo" />
          </Logo>
          <Container>
            <Main>
              <IconContainer onClick={() => router.push("/")}>
                <h1>Qualle Tech</h1>
              </IconContainer>
              {children}
            </Main>
            <SideBar>
              <IconContainer href="https://www.linkedin.com/in/vikwedel/" target="__blank" rel="noopener noreferrer">
                <Icon path={mdiLinkedin} size="2rem" color={theme.colors.secondaryDark} />
              </IconContainer>
              <IconContainer href="https://www.instagram.com/qualle.tech" target="__blank" rel="noopener noreferrer">
                <Icon path={mdiInstagram} size="2rem" color={theme.colors.secondaryDark} />
              </IconContainer>
              <IconContainer href="https://github.com/vik-wed" target="__blank" rel="noopener noreferrer">
                <Icon path={mdiGithub} size="2rem" color={theme.colors.secondaryDark} />
              </IconContainer>
            </SideBar>
          </Container>
        </body>
      </StyleProvider>
    </html>
  )
}

const homepagefloatAnimation = keyframes`
  0% {
    transform: translatey(0px);
  }
  15% {
    transform: translatey(-150px) translatex(-173px);
  }
  25% {
    transform: translatey(-250px) translatex(-250px);
  }
  50% {
    transform: translatey(-300px) translatex(-600px);
  }
  75% {
    transform: translatey(-150px) translatex(-750px);
  }
  100% {
    transform: translatey(0px);
  }
`

const floatAnimation = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
   }
  100% {
    transform: translatey(0px);
  }
`

const Logo = styled.div<{ $homeAnimation: boolean }>`
  position: absolute;
  bottom: 30px;
  right: 50px;
  opacity: 60%;
  animation-name: ${({ $homeAnimation }) => ($homeAnimation ? homepagefloatAnimation : floatAnimation)};
  animation-duration: ${({ $homeAnimation }) => ($homeAnimation ? "60s" : "5s")};
  animation-iteration-count: infinite;
  animation-direction: alternate;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 95% 5%;
  padding: 2rem;
  grid-gap: 1rem;
  height: 100vh;
  width: 100vw;
  overflow: none;
`

const SideBar = styled.div`
  display: grid;
  align-content: space-between;
  justify-items: end;
  height: 90vh;
  position: fixed;
  right: 1rem;
  top: 1rem;
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
