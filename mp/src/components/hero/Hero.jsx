import styled from "styled-components";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import React from 'react'; // eslint-disable-line no-unused-vars

const HeroContainer = styled.div`
  background-color: var(--dark-green);
  background-image: url("https://www.transparenttextures.com/patterns/black-orchid.png");
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5rem;
  
  h2 {
    color: var(--pink);
    font-size: 3rem;
    margin: 3rem 0 1rem;
  }

  @media (max-width: 1000px) {
    padding-bottom: 3rem;
  }
`;

const AboutMeContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  overflow: hidden;
  padding: 2.5rem 0;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export default function Hero() {
  return (
    <HeroContainer id="hero">
      <h2>About Me</h2>
      <AboutMeContainer>
        <AboutMe/>
        <Skills/>
      </AboutMeContainer>
    </HeroContainer>
  );
}
