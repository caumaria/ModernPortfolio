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

const AppCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 340px;
  width: 100%;
  min-height: 520px;
  position: relative;

  div {
    width: 220px;
    height: 220px;

    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      transition: transform 0.5s ease;

      &:hover {
        transform: translate(5px, 5px);
      }
    }
  }

  h2 {
    margin: 2rem 0 0.5rem;
  }

  p {
    padding: 0 2rem;
    text-align: center;
    margin: 0;
  }
`;

const WorkPinkLine = styled.div`
  max-width: 180px;
  max-height: 180px;
  background-color: none;
  border: 2px solid var(--pink);
  box-shadow: 0px 0px 15px 1px rgba(255, 51, 109, 0.8);
  position: absolute;
  top: 18%;
  z-index: -1;
  transition: transform 0.3s ease 0s, rotate 0.3s ease 0.5s;

  ${AppCard}:hover & {
    transform: translate(-22px, -22px) rotate(0);
    rotate: -45deg;
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
              <WorkPinkLine />
              <div>
                <img
                  src={exp.img}
                  alt="Image and Link to cau&rsquo;s project"
                />
              </div>

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
