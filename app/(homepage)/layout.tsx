/* eslint-disable max-len */

"use client"

import StyleProvider from "../../styles/StyleProvider"
import theme from "../../styles/theme"
import { mdiGithub, mdiInstagram, mdiLinkedin } from "@mdi/js"
import Icon from "@mdi/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styled, { keyframes } from "styled-components"

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
          <BodyContainer>
            <Logo>
              <Image src="/logo-dark.png" height={200} width={200} alt="Qualle Tech Logo" />
            </Logo>
            <Container>
              <Main>
                <IconContainer onClick={() => router.push("/")}>
                  <h1>Qualle Tech</h1>
                </IconContainer>
                {children}
              </Main>
              <SubTitle>Qualle - /kwɑːl.i/ quall-e - jellyfish</SubTitle>
              <SideBar>
                <IconContainer href="https://www.linkedin.com/in/vikwedel/" target="__blank" rel="noopener noreferrer">
                  <Icon path={mdiLinkedin} size="2rem" color={theme.colors.primaryLight} />
                </IconContainer>
                <IconContainer href="https://www.instagram.com/qualle.tech" target="__blank" rel="noopener noreferrer">
                  <Icon path={mdiInstagram} size="2rem" color={theme.colors.primaryLight} />
                </IconContainer>
                <IconContainer href="https://github.com/vik-wed" target="__blank" rel="noopener noreferrer">
                  <Icon path={mdiGithub} size="2rem" color={theme.colors.primaryLight} />
                </IconContainer>
              </SideBar>
            </Container>
          </BodyContainer>
        </body>
      </StyleProvider>
    </html>
  )
}

const BodyContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${theme.colors.backgroundLight};
  padding: 5vh 5vw;
`

const floatAnimation = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-2rem);
   }
  100% {
    transform: translatey(0px);
  }
`

const Logo = styled.div`
  position: absolute;
  bottom: 2.5rem;
  right: 5rem;
  opacity: 60%;
  z-index: 10;
  animation-name: ${floatAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`

const Container = styled.div`
  background: ${theme.colors.backgroundDark};
  height: 100%;
  display: grid;
  border-radius: 0.5rem;
  grid-template-columns: 95% 5%;
  padding: 2rem;
  grid-gap: 1rem;
  overflow: none;
`

const SubTitle = styled.p`
  color: ${theme.colors.primaryLight};
  font-size: 1.7rem;
  width: 90vh;
  position: fixed;
  left: 1.2rem;
  bottom: 0;
  transform-origin: 0 0;
  transform: rotate(-90deg);
`

const SideBar = styled.div`
  display: grid;
  align-content: space-between;
  justify-items: end;
  height: 90vh;
  position: fixed;
  right: 1rem;
  top: 5vh;
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
