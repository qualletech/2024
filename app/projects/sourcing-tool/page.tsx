"use client"

import Separator from "../_components/Separator"
import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <h2>Sourcing Tool - Monday Integration</h2>
      <DeployInfo>Deployed in January 2024</DeployInfo>
      <Text>This tool was developed under contract with Square Mile Labs.</Text>
      <Separator />
      <TextParagraph>
        <h3>Obstacles</h3>
        <Text>
          A bespoke jewelry designer reached out asking for help to automate their order sourcing process. A lot of it
          was duplicative work, sending emails to their suppliers with the same information, copy pasting large amounts
          of text. Whenever vendors responded the sourcing team had to look through the emails and see if the order had
          been successfully sourced.
        </Text>
      </TextParagraph>
      <TextParagraph>
        <h3>Unlocking the Flow</h3>
        <Text>
          As the client was using Monday as their project management tool, Square Mile Labs and Qualle Tech created a
          Monday integration that allowed the client to automate their workflow.
        </Text>
        <Text>
          The Monday integration allowed the client to create a new order, automatically parsed through the stone
          details and created a templated email. The sourcing team was then able to select from a list of vendors, with
          the ability to filter and search. Multi or single-select the vendors that needed to receive the request and
          send an email to each individual vendor with the click of one button.
        </Text>
        <Text>
          Responses were filtered through an AI system and received a rating of potential answer, positive or negative
          reply. This allowed the client and the sourcing team to speed up their sourcing process significantly.
        </Text>
      </TextParagraph>
      <p>Images show mock data.</p>
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
