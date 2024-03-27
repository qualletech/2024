"use client"

import Separator from "../_components/Separator"
import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <h2>Seed - Food & Symptom Tracker</h2>
      <DeployInfo>Deployed in April 2023</DeployInfo>
      <Text>Seed was developed in collaboration with x other developers.</Text>
      <Separator />
      <TextParagraph>
        <h3>Obstacles</h3>
        <Text>
          Users with food sensitivities or allergies oftentimes struggle with being able to narrow down which foods or
          ingredients trigger their symptoms. Food diaries have to be kept and carried around making the experience less
          than ideal and very cumbersome. Additionally when figuring out the actual triggers it's hard to find patterns
          just by looking at a notebook or spreadsheet.
        </Text>
      </TextParagraph>
      <TextParagraph>
        <h3>Unlocking the Flow</h3>
        <Text>
          With Seed we set out to develop an app that would make users lives easier. The app combines an intuitive user
          interface with a powerful algorithm.
        </Text>
        <Text>
          Users can track their food intake utilizing our rich database of ingredients. Additionally users can also
          track any symptoms as they arise.
        </Text>
        <Text>
          We understand that the digestion period varies and consider that symptoms can develop after multiple hours.
          Our algorithm uses these insights to calculate which foods are most likely to cause sensitivies and symptoms.
        </Text>
        <Text>
          Once enough data has been gathered the application is able to display multiple graphs to showcase correlations
          between food intake and experienced symptoms to help our users narrow down food-based triggers.
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
