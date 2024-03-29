"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import styled, { keyframes } from "styled-components"

export default function Page() {
  const router = useRouter()
  const [isAnimating, setIsAnimating] = useState(false)
  const [expandedBlob, setExpandedBlob] = useState(null)

  const handleTileClick = (route: string) => {
    setIsAnimating(true)
    setExpandedBlob(route)

    setTimeout(() => {
      setIsAnimating(false)
      setExpandedBlob(null)
    }, 500)
    router.push(route)
  }
  return (
    <Columns>
      <Blob
        onClick={() => handleTileClick("/projects")}
        $background="blob1.svg"
        $margin="-30"
        $isAnimating={isAnimating}
        $expandedBlob={expandedBlob === "/projects"}
      >
        <BlobText $isAnimating={isAnimating}>Developed by us</BlobText>
      </Blob>
      <Blob
        onClick={() => handleTileClick("/about")}
        $background="blob2.svg"
        $margin="60"
        $isAnimating={isAnimating}
        $expandedBlob={expandedBlob === "/about"}
      >
        <BlobText $isAnimating={isAnimating}>About us</BlobText>
      </Blob>
      <Blob
        onClick={() => handleTileClick("/contact")}
        $background="blob3.svg"
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
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    grid-auto-flow: row;
  }
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
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
  25% {
    transform: translateY(0px) scale(10);
    opacity: 1;
  }
  100% {
    transform: translateY(0px) scale(10);
    opacity: 1;
  }
`

const expandAnimationPortrait = keyframes`
  0% {
    transform: translateX(0px) scale(1);
    opacity: 1;
  }
  25% {
    transform: translateX(0px) scale(100);
    opacity: 1;
  }
  100% {
    transform: translateX(0px) scale(100);
    opacity: 1;
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
  z-index: ${({ $expandedBlob }) => ($expandedBlob ? "50" : "20")};

  animation-name: ${({ $isAnimating, $expandedBlob }) => ($isAnimating && $expandedBlob ? expandAnimation : "none")};
  animation-duration: 1s;
  pointer-events: ${({ $isAnimating }) => ($isAnimating ? "none" : "auto")};
  user-select: ${({ $isAnimating }) => ($isAnimating ? "none" : "auto")};

  &:hover {
    opacity: 0.8;
    animation-name: ${({ $isAnimating }) => ($isAnimating ? "none" : floatAnimation)};
    animation-duration: ${({ $isAnimating }) => ($isAnimating ? "none" : "5s")};
    animation-iteration-count: ${({ $isAnimating }) => ($isAnimating ? "none" : "infinite")};
  }

  @media screen and (max-width: 1023px) and (orientation: portrait) {
    top: 0;
    left: ${({ $margin }) => `${$margin}px`};
    background: ${({ $background }) => `url(${$background})`} 0 0/100% 102% no-repeat;
    animation-name: ${({ $isAnimating, $expandedBlob }) =>
      $isAnimating && $expandedBlob ? expandAnimationPortrait : "none"};
    animation-duration: 5s;
  }
  @media screen and (max-width: 769px) and (orientation: portrait) {
    left: ${({ $margin }) => `calc(${$margin}px / 2)`};
    background: ${({ $background }) => `url(${$background})`} 0 0/100% 110% no-repeat;
  }
  @media screen and (max-width: 769px) and (orientation: landscape) {
    top: ${({ $margin }) => `calc(${$margin}px / 2)`};
  }
`

const BlobText = styled.h3<{ $isAnimating: boolean }>`
  opacity: ${({ $isAnimating }) => ($isAnimating ? 0 : 1)};
  @media screen and (max-width: 769px) and (orientation: portrait) {
    text-align: center;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 769px) and (orientation: landscape) {
    font-size: 1.2rem;
  }
`
