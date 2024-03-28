"use client"

import Separator from "./Separator"
import TextParagraph from "./TextParagraph"
import Image from "next/image"
import styled from "styled-components"

export default function ProjectDetailPage({ projectDetails }) {
  const { title, deployInfo, challenges, flow, coverImgSrc, coverImgAlt } = projectDetails
  return (
    <Container>
      <h2>{title}</h2>
      <DeployInfo>{deployInfo}</DeployInfo>
      {projectDetails?.collab ? <p>{projectDetails?.collab}</p> : null}
      <Separator />
      <TextParagraph>
        <h3>Challenges</h3>
        {challenges}
      </TextParagraph>
      <TextParagraph>
        <h3>Unlocking the Flow</h3>
        {flow}
      </TextParagraph>
      <Image src={coverImgSrc} height={300} width={400} alt={coverImgAlt} />
      <p>Image shows mock data.</p>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  align-content: start;
  overflow: auto;
  padding-right: 2rem;
`

const DeployInfo = styled.p`
  font-style: italic;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.interactionDark};
`
