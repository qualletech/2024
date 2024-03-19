"use client"

import theme from "../styles/theme"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styled from "styled-components"

export default function SubpageLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
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
