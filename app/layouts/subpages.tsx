"use client"

import theme from "../../styles/theme"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import styled, { keyframes } from "styled-components"

const BACKGROUNDCOLOR = [
  { path: "/projects", color: "#66005E" },
  { path: "/about", color: "#02007A" },
  { path: "/contact", color: "#8F0083" },
]

export default function SubpageLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAnimating, setIsAnimating] = useState(true)
  const { color } = BACKGROUNDCOLOR.find((o) => o.path === pathname)

  setTimeout(() => {
    setIsAnimating(false)
  }, 5000)

  return (
    <Container>
      <EaseInTransition $isAnimating={isAnimating} $color={color} />
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
  )
}

const removeAnimation = keyframes`
0% {
    opacity: 1;
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
  }
`

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
`

const EaseInTransition = styled.div<{ $isAnimating: boolean; $color: string }>`
  display: ${({ $isAnimating }) => ($isAnimating ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ $color }) => `${$color}`};
  z-index: 30;
  animation: ${removeAnimation} 5s ease-in-out;
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
