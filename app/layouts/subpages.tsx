"use client"

import theme from "../../styles/theme"
import SUBPAGES from "../_utils/CONSTANTS"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import styled, { keyframes } from "styled-components"

export default function SubpageLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const color = SUBPAGES?.find((subpage) => subpage?.path === pathname)?.color || ""
  const isAnimatedPath = pathname === "/projects" || pathname === "/about" || pathname === "/contact"
  const [isAnimating, setIsAnimating] = useState(isAnimatedPath)

  setTimeout(() => {
    setIsAnimating(false)
  }, 1000)

  return (
    <Container>
      <EaseInTransition $isAnimating={isAnimating} $color={color} />
      <Main>
        <NavRow>
          <IconContainer onClick={() => router.push("/")}>
            <h1>Qualle Tech</h1>
          </IconContainer>
          <Row>
            {SUBPAGES?.map((subpage) => (
              <IconContainer onClick={() => router.push(subpage?.path)} $active={pathname === subpage?.path}>
                {subpage?.title}
              </IconContainer>
            ))}
          </Row>
        </NavRow>
        <Logo>
          <Image src="/logo-light.png" height={100} width={100} alt="Qualle Tech Logo" />
        </Logo>
        {children}
      </Main>
      <Footer>
        <FooterText>Qualle - /kwɑːl.i/ quall-e - jellyfish</FooterText>
        <Socials>
          <IconContainer href="https://www.linkedin.com/in/vikwedel/" target="__blank" rel="noopener noreferrer">
            LinkedIn
          </IconContainer>
          <IconContainer href="https://www.instagram.com/qualletech" target="__blank" rel="noreferrer">
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
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    top: 1rem;
    right: 2.5rem;
  }
  @media screen and (max-width: 769px) and (orientation: portrait) {
    top: 3rem;
  }
  > img {
    @media screen and (max-width: 1023px) and (orientation: portrait) {
      height: 5rem;
      width: 5rem;
    }
    @media screen and (max-width: 769px) and (orientation: portrait) {
      height: 3rem;
      width: 3rem;
    }
  }
`

const NavRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding-right: 2rem;
  z-index: 10;
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    grid-auto-flow: row;
    align-items: start;
    padding-right: 0;
  }
`

const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    justify-content: space-between;
    width: 90%;
    padding: 1.5rem 0;
  }
`

const Container = styled.div`
  height: 100dvh;
  width: 100dvw;
  background: ${theme.colors.backgroundLight}75;
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
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    grid-template-columns: unset;
    grid-auto-flow: column;
    justify-items: unset;
    justify-content: space-between;
  }
`

const Footer = styled.div`
  border-top: 0.5rem double ${theme.colors.secondaryDark};
  padding: 1rem 2rem;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  display: grid;
  grid-gap: 1rem;
  width: 100vw;
  bottom: 0;
  left: 0;
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    grid-template-columns: unset;
    grid-template-rows: 1fr 1fr;
  }
`

const FooterText = styled.p`
  color: ${theme.colors.primaryLight};
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    font-size: 1.1rem;
  }
`
const IconContainer = styled.a<{ $active?: boolean }>`
  text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
  color: ${theme.colors.neutralDark};
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    font-size: 1rem;
  }
  > h1 {
    color: ${theme.colors.primaryLight};
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
