import styled from "styled-components";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

const HeroContainer = styled.div`
  background-color: var(--dark-green);
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5rem;
  h2 {
    color: var(--pink);
    font-size: 3rem;
  }
`;

const AboutMeContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


export default function Hero() {
  return (
    <HeroContainer id="hero">
      <h2>About Me</h2>
      <AboutMeContainer>
        <AboutMe />
        <Skills />
      </AboutMeContainer>
    </HeroContainer>
  );
}
