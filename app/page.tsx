"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import styled, { keyframes } from "styled-components"

export default function Page() {
  const router = useRouter()
  const [isAnimating, setIsAnimating] = useState(false)
  const [expandedBlob, setExpandedBlob] = useState(null)

  const handleTileClick = (route: string) => {
    router.prefetch(route)
    setIsAnimating(true)
    setExpandedBlob(route)

    setTimeout(() => {
      setIsAnimating(false)
      setExpandedBlob(null)
      router.push(route)
    }, 3000) // Adjust the duration as needed
  }
  return (
    <Columns>
      <Blob
        onClick={() => handleTileClick("/projects")}
        $background="/blob1.svg"
        $margin="-30"
        $isAnimating={isAnimating}
        $expandedBlob={expandedBlob === "/projects"}
      >
        <BlobText $isAnimating={isAnimating}>Developed by us</BlobText>
      </Blob>
      <Blob
        onClick={() => handleTileClick("/about")}
        $background="/blob2.svg"
        $margin="60"
        $isAnimating={isAnimating}
        $expandedBlob={expandedBlob === "/about"}
      >
        <BlobText $isAnimating={isAnimating}>About us</BlobText>
      </Blob>
      <Blob
        onClick={() => handleTileClick("/contact")}
        $background="/blob3.svg"
        $margin="-100"
        $isAnimating={isAnimating}
        $expandedBlob={expandedBlob === "/contact"}
      >
        <BlobText $isAnimating={isAnimating}>Work with us</BlobText>
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
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(-10px) scale(0.9);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
`

const expandAnimation = keyframes`
0% {
    transform: translateY(0px) scale(1); /* Center the blob and set initial scale */
    opacity: 1;
  }
  25% {
    transform: translateY(0px) scale(10); /* Expand the blob to fill the screen */
    opacity: 1;
  }
  50% {
    transform: translateY(0px) scale(10); /* Expand the blob to fill the screen */
    opacity: 0.2;
  }
  100% {
    transform: translateY(0px) scale(0); /* Shrink the blob and fade out */
    opacity: 0;
  }
`

const Blob = styled.div<{ $background: string; $margin: string; $isAnimating: boolean; $expandedBlob: boolean }>`
  top: ${({ $margin }) => `${$margin}px`};
  cursor: pointer;
  display: grid;
  justify-content: center;
  align-items: center;
  background: ${({ $background }) => `url(${$background})`} 0 0/105% 100% no-repeat;
  filter: drop-shadow(0 0.2rem 0.7rem #21219b40);
  z-index: ${({ $expandedBlob }) => ($expandedBlob ? "50" : "20")}; /* Ensure expanded blob is on top */

  animation-name: ${({ $isAnimating, $expandedBlob }) => ($isAnimating && $expandedBlob ? expandAnimation : "none")};
  animation-duration: 10s;
  pointer-events: ${({ $isAnimating }) => ($isAnimating ? "none" : "auto")};
  user-select: ${({ $isAnimating }) => ($isAnimating ? "none" : "auto")};

  &:hover {
    opacity: 0.8;
    animation-name: ${({ $isAnimating }) => ($isAnimating ? "none" : floatAnimation)};
    animation-duration: ${({ $isAnimating }) => ($isAnimating ? "none" : "5s")};
    animation-iteration-count: ${({ $isAnimating }) => ($isAnimating ? "none" : "infinite")};
  }
`

const BlobText = styled.h3<{ $isAnimating: boolean }>`
  opacity: ${({ $isAnimating }) => ($isAnimating ? 0 : 1)};
`
