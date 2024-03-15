"use client";
import { useRouter } from "next/navigation";
import styled from "styled-components";

export default function Page() {
  const router = useRouter();
  return (
    <Container>
      <SubTitle>
        Qualle <i>noun</i> - /kwɑːl.i/ quall-e - jellyfish
      </SubTitle>
      <Columns>
        <Blob1 onClick={() => router.push("/projects")}>Developed by</Blob1>
        <Blob2 onClick={() => router.push("/about")}>Get to know</Blob2>
        <Blob3 onClick={() => router.push("/contact")}>Work with</Blob3>
      </Columns>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  padding: 0 10rem;
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Blob1 = styled.div`
  margin: 5rem 0 0 0;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  width: 20rem;
  height: 20rem;
  box-shadow: -10px 10px 0 rgba(255, 255, 255, 0.07);
  background: ${({ theme }) => theme.colors.interactionDark}30;
`;

const Blob2 = styled.div`
  margin: 1.5rem 0 0 0;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 70% 40% 70% 90% / 53% 74% 82% 33%;
  width: 20rem;
  height: 20rem;
  box-shadow: -10px 10px 0 rgba(255, 255, 255, 0.07);
  background: ${({ theme }) => theme.colors.neutralDark}20;
`;
const Blob3 = styled.div`
  margin: 3rem 0 0 0;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 39% 88% 73% 44% / 32% 99% 77% 90%;
  width: 20rem;
  height: 20rem;
  box-shadow: -10px 10px 0 rgba(255, 255, 255, 0.07);
  background: ${({ theme }) => theme.colors.interactionDark}60;
`;
