"use client"

import Separator from "../../_components/Separator"
import Image from "next/image"
import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <h2>Mic Drop - Open Mic Dashboard</h2>
      <DeployInfo>Currently in development</DeployInfo>
      <Separator />
      <TextParagraph>
        <h3>Challenges</h3>
        <Text>
          New York City comedians face difficulty in locating centralized information about open mic events in their
          area. Information is primarily spread through word of mouth, Instagram, and various websites, leading to
          missed opportunities and incomplete details. Additionally, Instagram pages often lack updates and may not
          provide comprehensive event information.
        </Text>
      </TextParagraph>
      <TextParagraph>
        <h3>Unlocking the Flow</h3>
        <Text>
          Mic Drop aims to revolutionize the open mic experience for NYC comedians by providing a user-friendly
          dashboard to discover upcoming events effortlessly.
        </Text>
        <Text>
          Our dashboard features customized filters and advanced search functionalities, enabling comedians to find the
          perfect open mic with just a few clicks. This streamlined approach eliminates the need to navigate through
          multiple platforms or rely solely on word of mouth, saving valuable time and ensuring access to comprehensive
          event details.
        </Text>
      </TextParagraph>
      <Image src="/2024/mic-drop.png" height={300} width={400} alt="Coming Soon Image" />
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

const TextParagraph = styled.div`
  display: grid;
  grid-gap: 0.9rem;
`

const Text = styled.p`
  font-size: 1.2rem;
`
