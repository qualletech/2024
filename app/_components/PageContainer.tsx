"use client"

import styled from "styled-components"

export default function PageContainer({ children }) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  align-content: start;
  overflow: auto;
  width: 100%;
`
