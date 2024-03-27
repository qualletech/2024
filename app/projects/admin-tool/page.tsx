"use client"

import Separator from "../_components/Separator"
import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <h2>Admin OS & Mobile Staff Portal</h2>
      <DeployInfo>In Development - to be deployed in April 2024</DeployInfo>
      <Text>These tools were developed under contract with Square Mile Labs.</Text>
      <Separator />
      <TextParagraph>
        <h3>Obstacles</h3>
        <Text>
          A culinary service client that pairs their clients with professionally trined, highly referred chefs for
          at-home dining experiences was looking for a way to optimize their operational flow. A lot of their systems
          were still spreadsheet based and required a lot of manual data entry and matching. Systems weren't centralized
          and created mishaps and effort for the admin team.
        </Text>
      </TextParagraph>
      <TextParagraph>
        <h3>Unlocking the Flow</h3>
        <Text>
          Square Mile Labs set out to create a dedicated admin dashboard for the client. Centralizing databases,
          statistics, service management, automated pricing, staff matching and payment systems in one portal.
        </Text>
        <Text>
          Additionally SML developed a Staff Portal for staff to review, accept or decline service requests as well as
          keep track of expenses for accepted services.
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
