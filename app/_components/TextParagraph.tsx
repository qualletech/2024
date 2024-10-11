"use client"

import styled from "styled-components"

export default function TextParagraph({ children }) {
  return <TextParagraphContainer>{children}</TextParagraphContainer>
}

const TextParagraphContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  > p {
    font-size: 1rem;
    line-height: 1.5;
  }
`
