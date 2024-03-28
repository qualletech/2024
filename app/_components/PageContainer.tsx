"use client"

import styled from "styled-components"

export default function PageContainer({ children }) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  align-content: start;
  overflow: auto;
`
