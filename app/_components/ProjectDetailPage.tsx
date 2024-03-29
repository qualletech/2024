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
      <Columns>
        <ProjectInfo>
          <TextParagraph>
            <h3>Challenges</h3>
            {challenges}
          </TextParagraph>
          <TextParagraph>
            <h3>Unlocking the Flow</h3>
            {flow}
          </TextParagraph>
        </ProjectInfo>
        <ImageInfo>
          <ImageContainer>
            <Image src={`${process.env.BASEPATH}/${coverImgSrc}`} alt={coverImgAlt} width={400} height={200} />
          </ImageContainer>
          <p>Image shows mock data.</p>
        </ImageInfo>
      </Columns>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  align-content: start;
  overflow: auto;
`

const DeployInfo = styled.p`
  font-style: italic;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.interactionDark};
`
const ImageContainer = styled.div`
  font-size: 0;
  box-sizing: content-box;
  @media screen and (max-width: 769px) and (orientation: portrait) {
    display: none;
  }
  > img {
    width: 100%;
    height: auto;
  }
`

const Columns = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 5rem;
  overflow: auto;
  padding-right: 2rem;
`

const ProjectInfo = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`

const ImageInfo = styled.div`
  display: grid;
  align-items: center;
`
