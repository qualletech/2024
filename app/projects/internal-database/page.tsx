"use client"

import Separator from "../../_components/Separator"
import Image from "next/image"
import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <h2>Backboard - Internal Database & Workflow Automation</h2>
      <DeployInfo>Launched in August 2023</DeployInfo>
      <Text>Backboard was created in partnership with Square Mile Labs.</Text>
      <Separator />
      <TextParagraph>
        <h3>Challenges</h3>
        <Text>
          Non-profit organizations often struggle with managing diverse tools to track their membership, expenses,
          fundraisers, and other essential details. These elements are typically scattered across disjointed
          spreadsheets, leading to manual data entry and duplicate handling inefficiencies.
        </Text>
      </TextParagraph>
      <TextParagraph>
        <h3>Unlocking the Flow</h3>
        <Text>
          Backboard, developed by Square Mile Labs, is a centralized solution designed to streamline data management and
          automate workflows for clients in various industries and niches. Qualle Tech collaborated specifically on the
          non-profit sector, leveraging their expertise to enhance automated processes tailored for this industry.
        </Text>
        <Text>
          Backboard integrates the convenience of a centralized database structure, enabling administrators to input,
          update, or remove database entries seamlessly.
        </Text>
        <Text>
          Moreover, customizable user-based access rights empower admins to grant specific read/edit/write permissions
          to team members based on their roles.
        </Text>
        <Text>
          Additionally, Backboard offers tailored workflow automations, such as managing event registrations and
          expenses, for non-profit clients, ensuring all essential data is centralized and easily accessible.
        </Text>
      </TextParagraph>
      <Image
        src="/2024/prideworks-backboard.png"
        height={300}
        width={400}
        alt="Overview of Backboard Database and Workflow Automation Project"
      />
      <p>Image shows mock data.</p>
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
