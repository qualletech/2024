"use client"

import theme from "../../styles/theme"
import { mdiGithub, mdiInstagram, mdiLinkedin } from "@mdi/js"
import Icon from "@mdi/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styled, { keyframes } from "styled-components"

export default function HomepageLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <BodyContainer>
      <Logo>
        <Image src="/logo-dark.webp" height={200} width={200} alt="Qualle Tech Logo" />
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
          <IconContainer href="https://www.instagram.com/qualletech" target="__blank" rel="noreferrer">
            <Icon path={mdiInstagram} size="2rem" color={theme.colors.primaryLight} />
          </IconContainer>
          <IconContainer href="https://github.com/vik-wed" target="__blank" rel="noopener noreferrer">
            <Icon path={mdiGithub} size="2rem" color={theme.colors.primaryLight} />
          </IconContainer>
        </SideBar>
      </Container>
    </BodyContainer>
  )
}

const BodyContainer = styled.div`
  height: 100dvh;
  width: 100dvw;
  background: ${theme.colors.backgroundLight};
  padding: 5vh 5vw;
  overflow: hidden;
  @media screen and (max-width: 769px) and (orientation: portrait) {
    padding: 4rem 2rem;
  }
  @media screen and (max-width: 769px) and (orientation: landscape) {
    padding: 5dvh 10dvw;
  }
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
  right: 5.5rem;
  opacity: 60%;
  z-index: 10;
  animation-name: ${floatAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    bottom: 5rem;
    right: 4.5rem;
  }
`

const Container = styled.div`
  background: ${theme.colors.backgroundDark};
  height: 100%;
  display: grid;
  border-radius: 0.5rem;
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
  bottom: 1rem;
  transform-origin: 0 0;
  transform: rotate(-90deg);
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    transform: rotate(0deg);
    bottom: 1rem;
    left: 2.5rem;
  }
  @media screen and (max-width: 769px) and (orientation: portrait) {
    font-size: 1rem;
    bottom: 1.5rem;
  }
  @media screen and (max-width: 769px) and (orientation: landscape) {
    font-size: 1.2rem;
  }
`

const SideBar = styled.div`
  display: grid;
  align-content: space-between;
  justify-items: end;
  height: 90vh;
  position: fixed;
  right: 1rem;
  top: 5vh;
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    grid-auto-flow: column;
    top: 1rem;
    width: 95%;
    padding: 0 2rem;
    left: 1rem;
    justify-content: space-between;
    height: auto;
  }
  @media screen and (max-width: 769px) and (orientation: portrait) {
    padding: 0 1rem;
    width: 90%;
  }
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
