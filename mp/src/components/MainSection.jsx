import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Me from "../assets/me.png";
import VisuallyHidden from "./visuallyHidden";

const MainConteiner = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
`;

const SlideDown = styled(motion.div)`
  img {
    width: 100%;
  }
`;

const SlideUp = styled(motion.div)``;



const MainSection = () => {
  return (
    <MainConteiner
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 1 }}
    >
      <SlideDown variants={fadeIn("down", "tween", 1, 1)}>
        <div>
        <img src={Me} alt="Photo of Cau." />
        </div>
      </SlideDown>
      <SlideUp variants={fadeIn("up", "tween", 1, 1)}>
        <div>
          <button>Let`s get in touch!</button>
        </div>
      </SlideUp>

      <VisuallyHidden>
        <p>Cau`s Portfolio, software engineer looking for internship/junior level position. A driven and dynamic individual with a goal to create exceptional web & apps experiences.
          Let`s work together to make a lasting impact. Tags de tecnologias: React, JavaScript, Typescript, NextJS</p>
      </VisuallyHidden>

    </MainConteiner>
  );
};

export default MainSection;
