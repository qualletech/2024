"use client"

import theme from "../../styles/theme"
import { BACKGROUNDCOLOR } from "../projects/CONSTANTS"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import styled, { keyframes } from "styled-components"

export default function SubpageLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const color = BACKGROUNDCOLOR?.find((o) => o.path === pathname)?.color || ""
  const isAnimatedPath = pathname === "/projects" || pathname === "/about" || pathname === "/contact"
  const [isAnimating, setIsAnimating] = useState(isAnimatedPath)

  setTimeout(() => {
    setIsAnimating(false)
  }, 1000)

  return (
    <Container>
      <EaseInTransition $isAnimating={isAnimating} $color={color} />
      <Main>
        <Row>
          <IconContainer onClick={() => router.push("/")}>
            <h1>Qualle Tech</h1>
          </IconContainer>
          <IconContainer onClick={() => router.push("/projects")} $active={pathname === "/projects"}>
            Projects
          </IconContainer>
          <IconContainer onClick={() => router.push("/about")} $active={pathname === "/about"}>
            About
          </IconContainer>
          <IconContainer onClick={() => router.push("/contact")} $active={pathname === "/contact"}>
            Contact
          </IconContainer>
        </Row>
        <Logo>
          <Image src="/logo-dark.png" height={100} width={100} alt="Qualle Tech Logo" />
        </Logo>
        {children}
      </Main>
      <Footer>
        <p>Qualle - /kwɑːl.i/ quall-e - jellyfish</p>
        <Socials>
          <IconContainer href="https://www.linkedin.com/in/vikwedel/" target="__blank" rel="noopener noreferrer">
            LinkedIn
          </IconContainer>
          <IconContainer href="https://www.instagram.com/qualle.tech" target="__blank" rel="noopener noreferrer">
            Instagram
          </IconContainer>
          <IconContainer href="https://github.com/vik-wed" target="__blank" rel="noopener noreferrer">
            Github
          </IconContainer>
        </Socials>
      </Footer>
    </Container>
  )
}

const removeAnimation = keyframes`
0% {
    opacity: 1;
    z-index: 30;
  }
  15%{
    opacity: 0.7
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.2;

  }
  75% {
    opacity: 0.1;
  }
  100%{
    opacity: 0;
    z-index: 0;
  }
`

const Logo = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
`

const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`

const Container = styled.div`
  height: 100dvh;
  width: 100dvw;
  background: ${theme.colors.backgroundDark};
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: 1fr auto;
  overflow: none;
`

const EaseInTransition = styled.div<{ $isAnimating: boolean; $color: string }>`
  display: ${({ $isAnimating }) => ($isAnimating ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ $color }) => `${$color}`};
  animation-name: ${removeAnimation};
  animation-duration: 2s;
  opacity: 0;
`

const Socials = styled.div`
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  grid-gap: 1rem;
  justify-items: end;
`

const Footer = styled.div`
  border-top: 0.5rem double ${theme.colors.neutralDark};
  padding: 1rem 2rem;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  display: grid;
  grid-gap: 1rem;
  width: 100vw;
  bottom: 0;
  left: 0;
`
const IconContainer = styled.a<{ $active?: boolean }>`
  text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
`

const Main = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;
  height: 100%;
  padding: 2rem 0rem 0rem 2rem;
  overflow: auto;
`
