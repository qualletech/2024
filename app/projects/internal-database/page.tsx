"use client"

import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <h2>Backboard - Internal Database Tool for Non-Profits</h2>
      <DeployInfo>Deployed in September 2023</DeployInfo>
      <TextParagraph>
        <Text>Seed was developed as a graduation project by five developers.</Text>
        <Text>We set out to help users struggling to determine which foods were causing discomfort.</Text>
        <Text>
          The web application makes identifying and narrowing down food-based triggers simple and straightforward.
        </Text>
        <Text>
          Seed was built with an intuitive interface and user-friendly design to ensure it was easy to use by anybody,
          regardless of their technical experience.
        </Text>
        <Text>
          The application includes tracking mechanisms, as well as powerful data visualizations. Intuitive graphs make
          it easy to determine which foods may be causing issues.
        </Text>
      </TextParagraph>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  align-content: start;
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
