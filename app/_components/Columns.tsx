"use client"

import styled from "styled-components"

export default function Columns({ children }) {
  return <ColumnsDiv>{children}</ColumnsDiv>
}

const ColumnsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: start;
  grid-gap: 1rem;
  overflow: auto;
  padding-right: 2rem;
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    grid-template-columns: unset;
  }
  @media screen and (max-width: 769px) and (orientation: landscape) {
    grid-template-columns: 1fr 1fr;
  }
`
