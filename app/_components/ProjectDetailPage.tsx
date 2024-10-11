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
      {projectDetails?.url ? (
        <Link href={projectDetails?.url} target="__blank">
          Check it out
        </Link>
      ) : null}
      <DeployInfo>{timeline}</DeployInfo>
      {projectDetails?.collab ? <p>{projectDetails?.collab}</p> : null}
      <Columns>
        <Separator />
      </Columns>

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
          <TextParagraph>
            <SectionTitle>Tech Stack</SectionTitle>
            <p>{projectDetails?.techStack}</p>
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
          {projectDetails?.review ? (
            <TextParagraph>
              <SectionTitle>Review</SectionTitle>
              <q>{projectDetails?.review}</q>
              <i>&mdash;{projectDetails?.reviewSource}</i>
            </TextParagraph>
          ) : null}
        </ImageInfo>
      </Columns>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  align-content: start;
  overflow: auto;
`

const DeployInfo = styled.p`
  font-style: italic;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.secondaryDark};
`
const ImageContainer = styled.div`
  font-size: 0;
  box-sizing: content-box;
  border: 2px solid ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 1rem;
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
  grid-gap: 0.5rem;
`

const ImageInfo = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  align-content: center;
`

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.interactionDark};
`

const Link = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Josefin Sans", sans-serif;
  color: ${({ theme }) => theme.colors.interactionDark};
`
