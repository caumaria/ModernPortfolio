import styled from "styled-components";

const AboutMeContent = styled.div`
  position: relative;
  max-width: 360px;
  width: 100%;
  height: 360px;
  border: 2px solid var(--pink);
  box-shadow: 0px 0px 15px 1px rgba(255, 51, 109, 0.8);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;

  h4 {
    position: relative;
    color: var(--pink);
    font-size: 1.5rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    max-width: 240px;
    height: 460px;
  }
`;

const TinySquareTop = styled.div`
  position: absolute;
  top: -5.1%;
  left: -5.3%;
  width: 40px;
  height: 40px;
  background-color: none;
  border: 2px solid var(--light-green);
  box-shadow: 0px 0px 15px 1px rgba(102, 255, 237, 0.8);
  z-index: 2;

  @media (max-width: 768px) {
    top: -4.2%;
    left: -7.2%;
  }
`;

const TinySquareBottom = styled.div`
  position: absolute;
  bottom: -5.1%;
  right: -5.3%;
  width: 40px;
  height: 40px;
  background-color: none;
  border: 2px solid var(--light-green);
  box-shadow: 0px 0px 15px 1px rgba(102, 255, 237, 0.8);
  z-index: 2;

  @media (max-width: 768px) {
    bottom: -4.2%;
    right: -7.2%;
  }
`;

export default function AboutMe() {
  return (
    <AboutMeContent>
      <TinySquareTop />
      <TinySquareBottom />
      <h4>Who am I</h4>
      <p>
        Brazilian Self-taught Front-end Developer.
        <br></br>
        <br></br>
        Fueled by curiosity, delight, and a strong aspiration to achieve
        excellence, I&rsquo;ve initiated my academic pursuit as a Software
        Engineer with the intent to broaden my knowledge and delve deeper into
        my passions.
        <br></br>
        <br></br>
        I&rsquo;m searching for a junior level position as a developer, where I
        can utilize my enthusiasm and skills to create outstanding digital
        experiences.
        <br></br>
        <br></br>I find joy in playing games ♥
      </p>
    </AboutMeContent>
  );
}
