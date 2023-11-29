import styled from "styled-components";
import { projects } from "../../data/data";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";

const HeroContainer = styled.div`
  margin: 0 10rem;
  height: 100vh;
  color: var(--pink);

  @media (max-width: 768px) {
    margin: 0;
  }

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    margin: 0;
  }

  p {
    color: var(--lettering);
  }
`;

const WorkContainer = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  place-items: center;
  width: 100%;
`;

const AnimatedSection = styled.section``;

const AppCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 340px;
  width: 100%;
  min-height: 520px;
  position: relative;
  h2 {
    margin: 3rem 0 0.5rem;
  }
  p {
    padding: 0 2rem;
    text-align: center;
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  width: 220px;
  height: 220px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.3s ease, rotate 0.3s ease 0.3s;

    ${AnimatedSection}:hover & {
      transform: translate(20px, 5px) rotate(15deg);
    }
  }
`;

const WorkPinkLine = styled.div`
  min-width: 174px;
  min-height: 174px;
  background-color: none;
  border: 2px solid var(--pink);
  box-shadow: 0px 0px 15px 1px rgba(255, 51, 109, 0.8);
  position: absolute;
  top: 17%;
  left: 24%;
  z-index: -1;
  transition: transform 0.3s ease;

  ${AnimatedSection}:hover & {
    transform: translate(-34px, -20px) rotate(-20deg);
  }
`;

const WorkBlueLine = styled.div`
  min-width: 174px;
  min-height: 174px;
  background-color: none;
  border: 2px solid var(--light-green);
  box-shadow: 0px 0px 15px 1px rgba(102, 255, 237, 0.8);
  position: absolute;
  top: 19%;
  left: 24%;
  z-index: -1;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;

  ${AnimatedSection}:hover & {
    transform: translate(-34px, -10px) rotate(-36deg);
    opacity: 1;
  }
`;

export default function Work() {
  return (
    <HeroContainer>
      <div>
        <h1>Cau&rsquo;s Portfolio</h1>
        <p>My latest Works</p>
      </div>

      <WorkContainer
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {projects.map((exp, i) => {
          return (
            <AppCard variants={fadeIn("up", "tween", (i + 1) * 0.6, 1)} key={i}>
              <AnimatedSection>
                <WorkPinkLine />
                <WorkBlueLine />
                <ImageContainer>
                  <img
                    src={exp.img}
                    alt="Image and Link to cau&rsquo;s project"
                  />
                </ImageContainer>
              </AnimatedSection>

              <h2>{exp.name}</h2>
              <p>
                {exp.about}, {exp.year}
              </p>
            </AppCard>
          );
        })}
      </WorkContainer>
    </HeroContainer>
  );
}
