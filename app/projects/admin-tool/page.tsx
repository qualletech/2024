"use client"

import Separator from "../_components/Separator"
import Image from "next/image"
import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <h2>Admin OS & Mobile Staff Portal</h2>
      <DeployInfo>In Development - Planned Deployment in April 2024</DeployInfo>
      <Text>These solutions were developed in partnership with Square Mile Labs.</Text>
      <Separator />
      <TextParagraph>
        <h3>Challenges</h3>
        <Text>
          Our culinary service client, which connects customers with top-tier chefs for personalized at-home dining
          experiences, faced operational inefficiencies due to reliance on spreadsheet-based systems. Manual data entry
          and matching processes were time-consuming, and the lack of centralization led to errors and added effort for
          the admin team.
        </Text>
      </TextParagraph>
      <TextParagraph>
        <h3>Unlocking the Flow</h3>
        <Text>
          To address these challenges, Square Mile Labs embarked on creating a dedicated admin dashboard for the client.
          This comprehensive solution centralizes databases, statistics, service management, automated pricing, staff
          matching, and payment systems within a single portal.
        </Text>
        <Text>
          Moreover, Square Mile Labs developed a Mobile Staff Portal for staff members to streamline service request
          reviews, acceptances, or declinations. The portal also enables staff to track expenses associated with
          accepted services, enhancing transparency and efficiency in managing operations.
        </Text>
      </TextParagraph>
      <Image
        src="/2024/admin-tool.png"
        height={300}
        width={400}
        alt="Overview of Admin Operational Dashboard and Staff Portal Project"
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
