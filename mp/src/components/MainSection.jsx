import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Me from "../assets/me.png";
import VisuallyHidden from "./VisuallyHidden";
import Arrow from "../assets/arrow.svg";

const MainConteiner = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
`;

const SlideDown = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;

const SlideUp = styled(motion.div)`
  position: relative;
  display: inline-block;

  button {
    position: relative;
    background-color: var(--light-green);
    color: var(--dark-green);
    padding: 0.8rem;
    font-size: 1.8rem;
    font-family: "Outfit";
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: none;
    overflow: hidden;
    z-index: 2;

    img {
      width: 24%;
      padding-left: 1rem;
    }

    &:hover {
      transform: translate(5px, 5px);
      box-shadow: 0px 0px 15px 1px rgba(102, 255, 237, 0.8);
    }

    &:hover span {
      color: var(--pink);
    }
  }
`;

const PinkLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 98%;
  height: 95%;
  border: none;
  transform-origin: bottom right;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;

  ${SlideUp}:hover & {
    transform: translate(-2px, -2px);
    border: 2px solid var(--pink);
    box-shadow: 0px 0px 15px 1px rgba(255, 51, 109, 0.8);
  }

  ${SlideUp}:not(:hover) & {
    transition-delay: 1s; /* Add a 1-second delay when not hovered */
    transform: translate(0, 0);
    border: none;
    box-shadow: none;
  }
`;

const MainSection = () => {
  return (
    <MainConteiner
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 1 }}
    >
      <SlideDown variants={fadeIn("down", "tween", 1, 1)}>
        <img src={Me} alt="Photo of Cau." />
      </SlideDown>
      <SlideUp variants={fadeIn("up", "tween", 1, 1)}>
        <div>
          <button>
            Let <span>&rsquo;</span> s get in touch<span>!</span>
            <img src={Arrow} alt="Arrow pointing to ways of contact"></img>
          </button>
          <PinkLine></PinkLine>
        </div>
      </SlideUp>

      <VisuallyHidden>
        <p>
          Cau`s Portfolio, software engineer looking for internship/junior level
          position. A driven and dynamic individual with a goal to create
          exceptional web & apps experiences. Let`s work together to make a
          lasting impact. Tags de tecnologias: React, JavaScript, Typescript,
          NextJS
        </p>
      </VisuallyHidden>
    </MainConteiner>
  );
};

export default MainSection;
