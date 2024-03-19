"use client"

import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <h2>Mic Drop</h2>
      <CardTitle>Monday Sourcing Integration</CardTitle>
      <p>Sourcing Tool for Bespoke Jewelry Creator</p>
      <i>Deployed in Jan 2024</i>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;
`

const CardTitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.interactionDark};
`
