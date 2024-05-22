"use client"

import theme from "../../styles/theme"
import PageContainer from "../_components/PageContainer"
import TextParagraph from "../_components/TextParagraph"
import styled from "styled-components"

export default function Page() {
  return (
    <PageContainer>
      <AboutContainer>
        <AboutQualle>
          <h3>Qualle</h3>
          <p>
            /kwɑːl.i/ quall-e
            <br />
            jellyfish
          </p>
          <TextParagraph>
            <p>
              "Qualle" the german word for jellyfish, embodies the essence of what we strive to achieve in our work at
              Qualle Tech.
            </p>

            <p>
              Jellyfish are renowned for their adaptability and fluidity, traits we mirror in our work. Our goal is to
              craft digital solutions that empower individuals and businesses to navigate their digital landscape
              effortlessly.
            </p>

            <p>
              Just as jellyfish thrive in diverse environments, we believe in fostering adaptability and freedom in our
              pursuit of success. "Qualle" also reflects our dedication to supporting passion projects and fostering
              creativity.
            </p>

            <p>
              We strive to imbue ease and fluidity into every project, enabling you to simplify your life, allowing you
              to thrive in your creativity, and promoting flow.
            </p>
          </TextParagraph>
        </AboutQualle>
        <AboutVik>
          <h3>Vik Wedel</h3>
          <p>
            they/she/he/xe
            <br />
            Founder & Lead Full Stack Developer
          </p>
          <TextParagraph>
            <p>Vik is passionate about bringing creative visions to life in the digital realm.</p>
            <p>
              Their passion lies in collaborating with like-minded individuals and businesses, infusing each project
              with care and expertise.
            </p>
            <p>
              With a background spanning project management, communications, and operations, Vik offers not just
              technical prowess but also a strategic mindset.
            </p>
            <p>
              As your reliable partner, Vik aims to create a seamless flow-state for your project, exceeding
              expectations and making your vision a reality.
            </p>
            <p>
              Whether it's a passion project or a groundbreaking venture, Vik and Qualle Tech are here to harness
              technology's power while enjoying every step of the journey.
            </p>
          </TextParagraph>
        </AboutVik>
      </AboutContainer>
    </PageContainer>
  )
}

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;
  align-items: start;
  padding: 0 2rem 1rem 0;
  overflow: auto;
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    grid-template-columns: unset;
    grid-gap: 2rem;
  }
`

const AboutQualle = styled.div`
  display: grid;
  grid-gap: 1rem;
  border: 3px solid ${theme.colors.neutralDark};
  border-radius: 1rem;
  padding: 1rem;
`

const AboutVik = styled.div`
  display: grid;
  grid-gap: 1rem;
  border: 3px solid ${theme.colors.interactionDark};
  border-radius: 1rem;
  padding: 1rem;
`
