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
      <Image
        src={coverImg}
        alt={alt}
        width={300}
        height={200}
        style={{
          borderRadius: "1rem 1rem 0 0 ",
          width: "100%",
          height: "auto",
        }}
      />
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

const CardTitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.interactionDark};
`

const Info = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
  grid-gap: 0.5rem;
  display: grid;
`
