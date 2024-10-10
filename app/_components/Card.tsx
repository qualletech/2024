"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import styled from "styled-components"

export default function Card({ projectInfo }) {
  const { slug, coverImg, title, description, timeline } = projectInfo
  const router = useRouter()

  return (
    <CardContainer onClick={() => router.push(`/projects/${slug}`)}>
      <ImageContainer>
        <Image
          src={coverImg.fields.file.url}
          alt={coverImg.fields.file.title}
          width={400}
          height={200}
          loading="lazy"
        />
      </ImageContainer>
      <Info>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
        <i>{timeline}</i>
      </Info>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  grid-template-rows: auto 1fr;
  cursor: pointer;
  display: grid;
  border: 1px solid ${({ theme }) => theme.colors.neutralLight}70;
  background: ${({ theme }) => theme.colors.neutralLight}70;
  border-radius: 1rem;
  align-content: start;
  &:hover {
    opacity: 80%;
  }
`
const ImageContainer = styled.div`
  font-size: 0;
  box-sizing: content-box;
  @media screen and (max-width: 769px) {
    display: none;
  }
  > img {
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    height: auto;
  }
`

const CardTitle = styled.h5`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.interactionDark};
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    font-size: 1.5rem;
  }
`

const Info = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr auto;
  padding: 0.5rem;
  grid-gap: 0.2rem;
  > p,
  i {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primaryLight};
    @media screen and (max-width: 1023px) {
      font-size: 1rem;
    }
  }
`
