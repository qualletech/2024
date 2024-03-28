"use client"

import Separator from "../_components/Separator"
import Image from "next/image"
import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <h2>Sourcing Tool - Monday Integration</h2>
      <DeployInfo>Launched in January 2024</DeployInfo>
      <Text>This tool was developed in collaboration with Square Mile Labs.</Text>
      <Separator />
      <TextParagraph>
        <h3>Challenges</h3>
        <Text>
          A bespoke jewelry designer approached us looking for assistance to streamline their order sourcing process,
          which involved repetitive tasks such as sending identical emails to suppliers and manually copying extensive
          text. Managing vendor responses further added complexity, requiring the sourcing team to sift through emails
          to confirm successful sourcing.
        </Text>
      </TextParagraph>
      <TextParagraph>
        <h3>Unlocking the Flow</h3>
        <Text>
          Given the client's use of Monday as their project management platform, Square Mile Labs and Qualle Tech
          collaborated to develop a seamless Monday integration to automate the workflow.
        </Text>
        <Text>
          The Monday integration enables the client to initiate a new order, automatically extract stone details, and
          generate a templated email. The sourcing team can then easily browse and select vendors from a curated list,
          with advanced filtering and search functionalities. They can either individually select vendors or opt for
          multi-select options to send requests efficiently.
        </Text>
        <Text>
          Additionally, responses are streamlined through an AI-powered system, providing ratings like potential,
          positive, or negative replies. This innovative approach significantly accelerates the sourcing process,
          empowering the client and the sourcing team to achieve optimal efficiency.
        </Text>
      </TextParagraph>
      <Image
        src="/2024/sourcing-tool.png"
        height={300}
        width={400}
        alt="Overview of Monday Sourcing Tool Integration Project"
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
