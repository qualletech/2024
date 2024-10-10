"use client"

import theme from "../../styles/theme"
import PageContainer from "../_components/PageContainer"
import TextParagraph from "../_components/TextParagraph"
import styled from "styled-components"

export default function Page() {
  return (
    <PageContainer>
      <h2>About</h2>
      <Columns>
        <AboutVik>
          <TitleContainer>
            <VikTitle>Vik Wedel</VikTitle>
            <i>
              they/she/he
              <br />
              Full Stack Developer
            </i>
          </TitleContainer>
          <TextParagraph>
            <p>
              My ultimate goal is to help <Bold>changemakers</Bold> and <Bold>creatives</Bold> turn their ideas into
              reality in the digital world.
            </p>
            <p>
              As a double-immigrant (Russia &gt; Germany &gt; USA), I understand the importance of adaptability, which
              has allowed me to thrive in various environments.
            </p>
            <p>
              Tech has always been a big part of my life. From a verly age on I was flexing my problem solving skills,
              fixing little computer bugs, and experimenting with programming. <i>But</i>, this isn&rsquo;t where my
              tech career began.
            </p>
            <p>
              Instead, I pursued a B.Sc. in Business, with a focus on Supply Chain Management and Corporate Development.
              <br />
              After college, I held roles in operations, communications and project management, until I finally realized
              that tech is where I was meant to be all along.
            </p>
            <p>
              While some might consider this a detour, I was able to gather valuable life-skills. My time before
              JavaScript made me into a well-rounded team player, with strengths in communication, sales, event
              management, and an understanding of what matters to make things happen.
            </p>
            <p>
              Finally, my tech journey officially started at the Grace Hopper Program at Fullstack Academy, where I
              gained a solid foundation in programming and experienced many “aha” moments. Straight after bootcamp, I
              had the chance to apply my coding skills at Square Mile Labs, working on large-scale SaaS projects and
              making significant strides thanks to my communication and teamwork abilities.
            </p>
            <p>
              With this diverse background, I bring a unique perspective to all my work, combining strategic thinking
              with a can-do attitude. My experience allows me to approach challenges creatively, and my dedication
              ensures that I consistently bring visions to life — and exceed expectations!
            </p>
          </TextParagraph>
        </AboutVik>
        <QualleContainer>
          <AboutQualle>
            <TitleContainer>
              <QualleTitle>Qualle</QualleTitle>
              <i>/kwɑːl.i/ - quall-e - jellyfish</i>
            </TitleContainer>
            <p>
              &rsquo;Qualle&rsquo; the german word for jellyfish, perfectly represents what I strive to achieve with my
              projects.
            </p>

            <p>
              Jellyfish are known for their adaptability, resilience and fluidity. Inspired by this symbolism I aim to
              create products and solutions that empower you to navigate your digital landscape effortlessly, achieving
              success in a flow-like state.
            </p>
          </AboutQualle>
        </QualleContainer>
      </Columns>
    </PageContainer>
  )
}

const Columns = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 5rem;
  overflow: auto;
  padding-right: 2rem;
  @media screen and (max-width: 769px) {
    grid-template-columns: unset;
    overflow: unset;
    grid-gap: 1rem;
  }
`

const QualleContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`

const AboutQualle = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  border: 2px solid ${theme.colors.neutralLight}70;
  border-radius: 10rem;
  padding: 5rem;
  > p {
    font-size: 0.9rem;
  }
`

const QualleTitle = styled.h3`
  font-size: 1.4rem;
  color: ${theme.colors.neutralLight};
`

const AboutVik = styled.div`
  display: grid;
  grid-gap: 0.7rem;
`

const VikTitle = styled.h3`
  color: ${theme.colors.interactionLight};
  line-height: 1;
`

const Bold = styled.span`
  font-weight: 600;
`

const TitleContainer = styled.div`
  display: grid;
`
