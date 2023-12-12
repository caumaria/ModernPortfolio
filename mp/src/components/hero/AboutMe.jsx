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
    transition: transform .8s cubic-bezier(0.34, 1.56, 0.64, 1);

    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      background-color: var(--light-green);
      top: 50%;
      transform: translateX(-100%);
      transition: transform .8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity .8s cubic-bezier(0.34, 1.56, 0.64, 1), width .8s cubic-bezier(0.34, 1.56, 0.64, 1);
      opacity: 0;
    }
  }

  &:hover {
    h4 { 
      transform: translateX(80px);
      &::before {
        width: 80px;
        opacity: 1;
      }
    }
  }
`;

const TinySquareTop = styled.div`
  position: absolute;
  top: -5%;
  left: -5.2%;
  width: 40px;
  height: 40px;
  background-color: none;
  border: 2px solid var(--light-green);
  box-shadow: 0px 0px 15px 1px rgba(102, 255, 237, 0.8);
  z-index: 2;
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${AboutMeContent}:hover & {
    transform: rotate(45deg);
  }
`;

const TinySquareBottom = styled.div`
  position: absolute;
  bottom: -5%;
  right: -5.2%;
  width: 40px;
  height: 40px;
  background-color: none;
  border: 2px solid var(--light-green);
  box-shadow: 0px 0px 15px 1px rgba(102, 255, 237, 0.8);
  z-index: 2;

  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${AboutMeContent}:hover & {
    transform: rotate(45deg);
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
        Fueled by curiosity, delight, and a strong aspiration to achieve excellence, 
        I&rsquo;ve initiated my academic pursuit as a Software Engineer with the intent to 
        broaden my knowledge and delve deeper into my passions.
        <br></br>
        <br></br>
        I&rsquo;m searching for a junior level position as a developer, where I
        can utilize my enthusiasm and skills to create outstanding digital experiences.
        <br></br>
        <br></br>
        I find joy in playing games ♥ 
      </p>
    </AboutMeContent>
  );
}
