"use client"

import { ProjectInfo } from "../CONSTANTS"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styled from "styled-components"

export default function Card({ projectInfo }: { projectInfo: ProjectInfo }) {
  const { path, alt, coverImg, title, desc, timeline } = projectInfo
  const router = useRouter()

  return (
    <CardContainer onClick={() => router.push(path)}>
      <ImageContainer>
        <Image src={coverImg} layout="fill" alt={alt} style={{ borderRadius: "1rem 1rem 0 0 " }} />
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
`

const ImageContainer = styled.div`
  width: 100%;
  min-height: 10rem;
`

const CardTitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.interactionDark};
`

const Info = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
  grid-gap: 0.5rem;
  display: grid;
`
