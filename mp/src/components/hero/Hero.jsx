import styled from "styled-components";

const HeroContainer = styled.div`
    background-color: var(--dark-green);
    height: 800px;
    width: 100%;
`;

export default function Hero() {
  return (
    <HeroContainer>
      hero section
    </HeroContainer>
  )
}
