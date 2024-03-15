"use client";

import { useRouter } from "next/navigation";
import StyleProvider from "../styles/StyleProvider";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Icon from "@mdi/react";
import { mdiGithub, mdiInstagram, mdiLinkedin } from "@mdi/js";
import theme from "../styles/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
        />
      </head>
      <body>
        <StyleProvider>
          <Logo>
            <Image
              src="/logo-dark.png"
              height={200}
              width={200}
              alt="Qualle Tech Logo"
            />
          </Logo>
          <Container>
            <Main>
              <h1 onClick={() => router.push("/")}>Qualle Tech</h1>
              {children}
            </Main>
            <SideBar>
              <IconContainer
                href="https://www.linkedin.com/in/vikwedel/"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Icon
                  path={mdiLinkedin}
                  size={"2rem"}
                  color={theme.colors.secondaryDark}
                />
              </IconContainer>
              <IconContainer
                href="https://www.instagram.com/qualle.tech"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Icon
                  path={mdiInstagram}
                  size={"2rem"}
                  color={theme.colors.secondaryDark}
                />
              </IconContainer>
              <IconContainer
                href="https://github.com/vik-wed"
                target="__blank"
                rel="noopener noreferrer"
              >
                <Icon
                  path={mdiGithub}
                  size={"2rem"}
                  color={theme.colors.secondaryDark}
                />
              </IconContainer>
            </SideBar>
          </Container>
        </StyleProvider>
      </body>
    </html>
  );
}

const floatAnimation = keyframes`
  0% {
    transform: translatey(0px);
  }
  25% {
    transform: translatey(-250px) translatex(-250px);
  }
  50% {
    transform: translatey(-300px) translatex(-600px);
  }
  75% {
    transform: translatey(-150px) translatex(-750px);
  }
  100% {
    transform: translatey(0px);
  }
`;

const Logo = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  opacity: 60%;
  animation-name: ${floatAnimation};
  animation-duration: 60s;
  animation-timing-funtion: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 95% 5%;
  padding: 2rem;
  grid-gap: 1rem;
  height: 100dvh;
  width: 100dvw;
`;

const SideBar = styled.div`
  display: grid;
  align-content: space-between;
  justify-items: end;
`;

const IconContainer = styled.a`
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
`;

const Main = styled.main`
  display: grid;
  align-content: start;
  justify-content: stretch;
  grid-gap: 1rem;
`;
