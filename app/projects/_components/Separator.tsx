import styled from "styled-components"

export default function Separator() {
  return <SeparatorGraphic />
}

const SeparatorGraphic = styled.div`
  background-image: url("/separator.svg");
  background-repeat: no-repeat;
  height: 20px;
  border-radius: 2rem 10rem 0 5rem;
  width: 1400px;
`
