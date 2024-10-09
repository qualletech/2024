"use client"

import Separator from "./Separator"
import TextParagraph from "./TextParagraph"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
import styled from "styled-components"

export default function ProjectDetailPage({ projectDetails }) {
  const { title, timeline, challenges, flow, coverImg } = projectDetails

  return (
    <Container>
      <h2>{title}</h2>
      <DeployInfo>{timeline}</DeployInfo>
      {projectDetails?.collab ? <p>{projectDetails?.collab}</p> : null}
      <Separator />
      <Columns>
        <ProjectInfo>
          <TextParagraph>
            <SectionTitle>Challenges</SectionTitle>
            <p>{challenges}</p>
          </TextParagraph>
          <TextParagraph>
            <SectionTitle>Unlocking the Flow</SectionTitle>
            {documentToReactComponents(flow)}
          </TextParagraph>
        </ProjectInfo>
        <ImageInfo>
          <ImageContainer>
            <Image
              src={coverImg?.fields.file.url}
              alt={coverImg?.fields.file.title}
              width={400}
              height={200}
              loading="lazy"
            />
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
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondaryDark};
`
const ImageContainer = styled.div`
  font-size: 0;
  box-sizing: content-box;
  > img {
    border-radius: 1rem;
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
  @media screen and (max-width: 769px) {
    grid-template-columns: unset;
    overflow: unset;
    grid-gap: 1rem;
  }
`

const ProjectInfo = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`

const ImageInfo = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  align-content: center;
`

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.interactionDark};
`
