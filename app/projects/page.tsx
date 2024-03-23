"use client"

import Card from "./_components/Card"
import { PROJECTS } from "./CONSTANTS"
import styled from "styled-components"

export default function Page() {
  return (
    <Container>
      <h2>Developed by Qualle Tech</h2>
      <Columns>{PROJECTS?.map((project) => <Card projectInfo={project} />)}</Columns>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;
`

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: start;
  grid-gap: 1rem;
`
