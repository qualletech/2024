"use client"

import { useRouter } from "next/navigation"
import styled, { keyframes } from "styled-components"

export default function Page() {
  const router = useRouter()
  return (
    <Columns>
      <Blob onClick={() => router.push("/projects")} $background="/blob1.svg" $margin="-30">
        <h3>Developed by us</h3>
      </Blob>
      <Blob onClick={() => router.push("/about")} $background="/blob2.svg" $margin="60">
        <h3>About us</h3>
      </Blob>
      <Blob onClick={() => router.push("/contact")} $background="/blob3.svg" $margin="-100">
        <h3>Work with us</h3>
      </Blob>
    </Columns>
  )
}

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
    transform: translatey(-10px) scale(0.9);
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
  filter: drop-shadow(0 0.2rem 0.7rem #21219b40);
  z-index: 20;
  height: auto;
  &:hover {
    opacity: 80%;
    animation-name: ${floatAnimation};
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
`
