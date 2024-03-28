"use client"

import PageContainer from "../../_components/PageContainer"
import Separator from "../../_components/Separator"
import Image from "next/image"
import styled from "styled-components"

export default function Page() {
  return (
    <PageContainer>
      <h2>Seed - Food & Symptom Tracker</h2>
      <DeployInfo>Launched in April 2023</DeployInfo>
      <Text>Seed was crafted in collaboration with 4 other independent developers.</Text>
      <Separator />
      <TextParagraph>
        <h3>Challenges</h3>
        <Text>
          Individuals with food sensitivities or allergies often face difficulties pinpointing which foods or
          ingredients trigger their symptoms. Traditional food diaries require constant maintenance and are inconvenient
          to carry around, leading to a less-than-optimal user experience. Moreover, identifying patterns solely through
          manual tracking in notebooks or spreadsheets can be a daunting task.
        </Text>
      </TextParagraph>
      <TextParagraph>
        <h3>Unlocking the Flow</h3>
        <Text>
          With Seed, our aim was to simplify users' lives. The app seamlessly integrates an intuitive user interface
          with a robust algorithm.
        </Text>
        <Text>
          Users can effortlessly log their food intake using our extensive ingredient database. Additionally, they can
          monitor any symptoms as they occur.
        </Text>
        <Text>
          Recognizing that digestion times vary and symptoms may manifest hours after consumption, our algorithm
          leverages these insights to predict which foods are likely to cause sensitivities and symptoms.
        </Text>
        <Text>
          As users accumulate data, the app generates multiple graphs that illustrate correlations between food
          consumption and experienced symptoms, empowering users to identify food-based triggers more effectively.
        </Text>
      </TextParagraph>
      <Image src="/2024/seed.png" height={300} width={400} alt="Overview of Seed Project" />
      <p>Image shows mock data.</p>
    </PageContainer>
  )
}

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
