"use client"

import { ProjectInfo } from "../projects/CONSTANTS"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styled from "styled-components"

export default function Card({ projectInfo }: { projectInfo: ProjectInfo }) {
  const { path, alt, coverImg, title, desc, timeline } = projectInfo
  const router = useRouter()

  return (
    <CardContainer onClick={() => router.push(path)}>
      <ImageContainer>
        <Image src={`${process.env.BASEPATH}/${coverImg}`} alt={alt} width={400} height={200} />
      </ImageContainer>
      <Info>
        <CardTitle>{title}</CardTitle>
        <p>{desc}</p>
        <i>{timeline}</i>
      </Info>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  cursor: pointer;
  display: grid;
  border: 1px solid ${({ theme }) => theme.colors.neutralDark};
  background: ${({ theme }) => theme.colors.neutralDark};
  border-radius: 1rem;
  align-items: start;
  grid-gap: 0.5rem;
  &:hover {
    opacity: 80%;
  }
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    grid-template-columns: 1fr 2fr;
    align-items: center;
    grid-gap: 1rem;
  }
  @media screen and (max-width: 769px) and (orientation: portrait) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`
const ImageContainer = styled.div`
  font-size: 0;
  box-sizing: content-box;
  @media screen and (max-width: 769px) and (orientation: portrait) {
    display: none;
  }
  > img {
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    height: auto;

    @media screen and (max-width: 1023px) and (orientation: portrait) {
      border-radius: 1rem 0 0 1rem;
    }
  }
`

const CardTitle = styled.h5`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.interactionDark};
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 769px) and (orientation: portrait) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const Info = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
  grid-gap: 0.5rem;
  display: grid;
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    padding: 0 0.5rem;
  }
  > p,
  i {
    @media screen and (max-width: 1023px) and (orientation: portrait) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 769px) and (orientation: portrait) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
