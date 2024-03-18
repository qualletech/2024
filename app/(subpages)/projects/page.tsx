"use client"

import { useRouter } from "next/navigation"
import styled from "styled-components"

export default function Page() {
  const router = useRouter()
  return (
    <Container>
      <h2>Developed by Qualle Tech</h2>
      <Columns>
        <Card onClick={() => router.push("/projects/mic-drop")}>
          <img
            src="https://static.scientificamerican.com/sciam/cache/file/B7E980C5-B182-4A2E-80369F2AC535EB35_source.jpg"
            height={260}
            width={360}
            alt="Placeholder"
            style={{ borderRadius: "1rem 1rem 0 0 " }}
          />
          <Info>
            <CardTitle>Mic Drop</CardTitle>
            <p>Open Mic Event Dashboard for Comedians in NYC </p>
            <i>Deployed in Apr 2024</i>
          </Info>
        </Card>
        <Card onClick={() => router.push("/projects/admin-tool")}>
          <img
            src="https://static.scientificamerican.com/sciam/cache/file/B7E980C5-B182-4A2E-80369F2AC535EB35_source.jpg"
            height={260}
            width={360}
            alt="Placeholder"
            style={{ borderRadius: "1rem 1rem 0 0 " }}
          />
          <Info>
            <CardTitle>Admin Dashboard and Staff Portal</CardTitle>
            <p>Operating system to manage services at the company-level and for staff to have access to services</p>
            <i>Deployed in Mar 2024</i>
          </Info>
        </Card>
        <Card onClick={() => router.push("/projects/sourcing-tool")}>
          <img
            src="https://static.scientificamerican.com/sciam/cache/file/B7E980C5-B182-4A2E-80369F2AC535EB35_source.jpg"
            height={260}
            width={360}
            alt="Placeholder"
            style={{ borderRadius: "1rem 1rem 0 0 " }}
          />
          <Info>
            <CardTitle>Monday Sourcing Integration</CardTitle>
            <p>Sourcing Tool for Bespoke Jewelry Creator</p>
            <i>Deployed in Jan 2024</i>
          </Info>
        </Card>
      </Columns>
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
  grid-template-columns: 1fr 1fr 1fr;
  align-content: start;
  grid-gap: 1rem;
`

const Card = styled.div`
  cursor: pointer;
  display: grid;
  border: 1px solid ${({ theme }) => theme.colors.neutralDark};
  background: ${({ theme }) => theme.colors.neutralDark};
  border-radius: 1rem;
  align-items: start;
  grid-gap: 0.5rem;
  &:hover {
    opacity: 80%;
  }
`

const CardTitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.interactionDark};
`

const Info = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
  grid-gap: 0.5rem;
  display: grid;
`
