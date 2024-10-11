import theme from "../../styles/theme"
import styled, { keyframes } from "styled-components"

export default function Bubbles() {
  return (
    <Ocean>
      <Bubble1 />
      <Bubble2 />
      <Bubble3 />
      <Bubble4 />
      <Bubble5 />
      <Bubble6 />
      <Bubble7 />
      <Bubble8 />
      <Bubble9 />
      <Bubble10 />
      <Bubble11 />
      <Bubble12 />
    </Ocean>
  )
}

const Ocean = styled.div`
  overflow: hidden;
  height: 60vh;
  @media screen and (max-width: 769px) {
    display: none;
  }
`

const bubbleAnimation = keyframes`
  0% {
       transform: translateY(0%);
       opacity: 0.06;
     }
     100% {
       transform: translateY(-120vh);
       opacity: 0.7;
     }
  `

const sidewaysAnimation = keyframes`
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: 10rem;
    }`

const Bubble = styled.div`
  border-radius: 100%;
  position: absolute;
  bottom: -5rem;
  animation:
    ${bubbleAnimation} 15s ease-in-out infinite,
    ${sidewaysAnimation} 4s ease-in-out infinite alternate;
`

const Bubble1 = styled(Bubble)`
  width: 4rem;
  height: 4rem;
  left: 10%;
  background-color: ${theme.colors.primaryLight};
  animation-delay: 0.5s;
  animation-duration: 16s;
  opacity: 0.6;
`

const Bubble2 = styled(Bubble)`
  width: 2rem;
  height: 2rem;
  left: 40%;
  background-color: ${theme.colors.secondaryLight};
  animation-delay: 1s;
  animation-duration: 10s;
  opacity: 0.6;
`

const Bubble3 = styled(Bubble)`
  width: 7rem;
  height: 7rem;
  left: 30%;
  background-color: ${theme.colors.neutralLight};
  animation-delay: 5s;
  animation-duration: 20s;
`

const Bubble4 = styled(Bubble)`
  width: 4rem;
  height: 4rem;
  left: 40%;
  background-color: ${theme.colors.interactionLight};
  animation-delay: 8s;
  animation-duration: 17s;
`

const Bubble5 = styled(Bubble)`
  width: 3rem;
  height: 3rem;
  left: 60%;
  background-color: ${theme.colors.interactionLight};
  animation-delay: 10s;
  animation-duration: 15s;
`

const Bubble6 = styled(Bubble)`
  width: 1rem;
  height: 1rem;
  left: 80%;
  background-color: ${theme.colors.interactionLight};
  animation-delay: 3s;
  animation-duration: 30s;
`
const Bubble7 = styled(Bubble)`
  width: 1.5rem;
  height: 1.5rem;
  left: 90%;
  background-color: ${theme.colors.neutralLight};
  animation-delay: -7s;
  animation-duration: 25s;
`
const Bubble8 = styled(Bubble)`
  width: 2rem;
  height: 2rem;
  left: 50%;
  background-color: ${theme.colors.neutralLight};
  bottom: 30px;
  animation-delay: -5s;
  animation-duration: 19s;
`
const Bubble9 = styled(Bubble)`
  width: 4rem;
  height: 4rem;
  left: 30%;
  bottom: 30px;
  background-color: ${theme.colors.neutralLight};
  animation-delay: -21s;
  animation-duration: 16s;
`
const Bubble10 = styled(Bubble)`
  width: 3rem;
  height: 3rem;
  left: 60%;
  bottom: 30px;
  background-color: ${theme.colors.neutralLight};
  animation-delay: -13.75s;
  animation-duration: 20s;
`
const Bubble11 = styled(Bubble)`
  width: 2.5rem;
  height: 2.5rem;
  left: 40%;
  background-color: ${theme.colors.neutralLight};
  animation-delay: 2s;
  animation-duration: 17s;
`
const Bubble12 = styled(Bubble)`
  width: 6rem;
  height: 6rem;
  bottom: 30px;
  background-color: ${theme.colors.neutralLight};
  animation-delay: -10.5s;
  animation-duration: 19s;
`
