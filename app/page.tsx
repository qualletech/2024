"use client"

import { useRouter } from "next/navigation"
import styled, { keyframes } from "styled-components"

export default function Page() {
  const router = useRouter()
  return (
    <Container>
      <SubTitle>
        Qualle <i>noun</i> - /kwɑːl.i/ quall-e - jellyfish
      </SubTitle>
      <Columns>
        <Blob onClick={() => router.push("/projects")} $background="/blob1.svg" $margin="-20">
          <h3>Developed by us</h3>
        </Blob>
        <Blob onClick={() => router.push("/about")} $background="/blob2.svg" $margin="30">
          <h3>About us</h3>
        </Blob>
        <Blob onClick={() => router.push("/contact")} $background="/blob3.svg" $margin="20">
          <h3>Work with us</h3>
        </Blob>
      </Columns>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto 1fr;
`

const SubTitle = styled.h2`
  font-size: 1rem;
  padding: 0 10rem;
`

const Columns = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: space-between;
  padding: 0;
`

const floatAnimation = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
   }
  100% {
    transform: translatey(0px);
  }
`

const Blob = styled.div<{ $background: string; $margin: string }>`
  top: ${({ $margin }) => `${$margin}px`};
  cursor: pointer;
  display: grid;
  justify-content: center;
  align-items: center;
  background: ${({ $background }) => `url(${$background})`} 0 0/105% 100% no-repeat;
  &:hover {
    opacity: 80%;
    animation-name: ${floatAnimation};
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
`
