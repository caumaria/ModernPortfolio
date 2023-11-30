import styled from "styled-components";

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

const AboutMeContent = styled.div`
  max-width: 360px;
  width: 100%;
  height: auto;
  border: 2px solid var(--pink);
  box-shadow: 0px 0px 15px 1px rgba(255, 51, 109, 0.8);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;

  h4 {
    color: var(--pink);
  }
`;

const SkillsContent = styled.div``;

export default function Hero() {
  return (
    <HeroContainer>
      <h2>About Me</h2>
      <AboutMeContainer>
        <AboutMeContent>
          <h4>Who am I</h4>
          Originally embarked on a path of legal studies, dedicating years to 
          mastering the intricacies of the law. However, a strong passion for 
          technology and a desire for a new challenge led me to make a bold career 
          transition.
          <br></br>
          The three strongest driving forces within me are curiosity, delight, and 
          the aspiration to achieve something remarkable. My goal is to create 
          exceptional web experiences.
          <br></br>
          free time gaming bla bla bla
          </AboutMeContent>
              
        <SkillsContent>skills substituíveis por IA ou quase</SkillsContent>
      </AboutMeContainer>
    </HeroContainer>
  );
}
