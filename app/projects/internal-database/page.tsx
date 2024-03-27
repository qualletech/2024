"use client"

import Separator from "../_components/Separator"
import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <h2>Backboard - Internal Database & Workflow Automation</h2>
      <DeployInfo>Deployed in August 2023</DeployInfo>
      <Text>Backboard was developed under contract with Square Mile Labs.</Text>
      <Separator />
      <TextParagraph>
        <h3>Obstacles</h3>
        <Text>
          Non-profits have a lot of tools to track their membership base, expenses, fundraisers and other details.
          Usually these elements are strewn across multiple spreadsheets that are not connected and require a lot of
          manual data entry and duplicate handling.
        </Text>
      </TextParagraph>
      <TextParagraph>
        <h3>Unlocking the Flow</h3>
        <Text>
          With Backboard Square Mile Labs was dedicated to develop a centralized solution that would allow clients
          across different industries and niches to keep track of their data and automate workflows. Qualle Tech was
          contracted to help out with the non-profit sector and utilized their knowledge to contribute to automated
          workflows for that specific sector.
        </Text>
        <Text>
          Backboard combines the helpfulness of a centralized database structure, making it possible for admins to
          enter, update or remove database entries.
        </Text>
        <Text>
          Additional user-based access rights make it possible for admins to only provide read/edit/write access to
          members of the correct team.
        </Text>
        <Text>
          Finally, we were able to provide certain workflow automations for a non-profit customer that needed to keep
          track of event registrations and expenses in one place.
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
