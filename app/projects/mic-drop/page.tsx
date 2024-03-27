"use client"

import Separator from "../_components/Separator"
import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <h2>Mic Drop - Open Mic Dashboard</h2>
      <DeployInfo>In development</DeployInfo>
      <Separator />
      <TextParagraph>
        <h3>Obstacles</h3>
        <Text>
          New York City comedians don't have a centralized place to find open mics in their areas. Information is
          usually given through word of mouth, instagram or other websites and is easy to miss. Instagram pages aren't
          updated and don't always hold all the information needed.
        </Text>
      </TextParagraph>
      <TextParagraph>
        <h3>Unlocking the Flow</h3>
        <Text>
          With Mic Drop we set out to develop a dashboard that allows NYC comedians to find their next open mic within a
          few clicks.
        </Text>
        <Text>
          Customized filters and searches allow comedians to find a mic with the right fit within a few minutes, as
          opposed to having to scroll through multiple pages or ask around.
        </Text>
      </TextParagraph>
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
  overflow: auto;
`

const Text = styled.p`
  font-size: 1.2rem;
`
