"use client"

import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <About>
        <h3>Qualle</h3>
        <p>
          /kwɑːl.i/ quall-e
          <br />
          jellyfish
        </p>
        <AboutBlock>
          <p>'Qualle' embodies the essence of what we strive to achieve in our work.</p>

          <p>
            Jellyfish are creatures known for their ability to go with the flow, adapt to their surroundings, and
            navigate the ocean freely. This symbolism resonates deeply with us as we aim to create products and
            solutions that empower individuals and businesses to navigate their digital landscape effortlessly.
          </p>

          <p>
            Just like the jellyfish, we believe in the importance of adaptability and freedom in the pursuit of success.
            Moreover, 'Qualle' reflects our commitment to supporting passion projects and creative endeavors.
          </p>

          <p>
            We want to facilitate a sense of ease and fluidity in everything we do, allowing our clients to pursue their
            passions with confidence and enthusiasm. Ultimately, the name 'Qualle' embodies our mission to make people's
            lives easier, foster creativity, and promote a sense of flow in both work and life.
          </p>
        </AboutBlock>
      </About>
      <About>
        <h3>Vik</h3>
        <p>
          they/she/he/xe
          <br />
          Full Stack Developer
        </p>
        <AboutBlock>
          <p>
            Vik is passionate about helping creative individuals and businesses turn their ideas into reality in the
            digital world.
          </p>
          <p>
            They love pouring their heart and a lot of care into all of their projects, especially when collaborating
            with like-minded individuals who share a similar excitement for their work.
          </p>
          <p>
            With a background in full stack development and a knack for thinking strategically, they offer more than
            just technical skills. They can be the reliable partner you need to get your passion project or business to
            flow.
          </p>
          <p>
            Vik's journey into development has taken them through various roles in project management, communications,
            and operations. With a strategic mindset and a jack-of-all-trades approach, they offer more than just
            technical skills.
          </p>
          <p>
            As your reliable partner, they look forward to creating a seamless flow-state for your project. Vik is ready
            to bring your vision to life and exceed your expectations.
          </p>
          <p>
            Whether you're starting a passion project or launching the next big thing, we are here to make it happen
            using the power of technology - and we'll have fun doing it too!
          </p>
        </AboutBlock>
      </About>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 1rem;
  align-items: start;
`

const About = styled.div`
  display: grid;
  grid-gap: 1rem;
`

const AboutBlock = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`
