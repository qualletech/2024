"use client"

import Card from "../_components/Card"
import PageContainer from "../_components/PageContainer"
import { PROJECTS } from "./CONSTANTS"
import styled from "styled-components"

export default function Page() {
  return (
    <PageContainer>
      <h2>Developed by Qualle Tech</h2>
      <Columns>{PROJECTS?.map((project) => <Card projectInfo={project} />)}</Columns>
    </PageContainer>
  )
}

const Columns = styled.div`
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
