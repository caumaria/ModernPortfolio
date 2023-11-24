import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const MainConteiner = styled(motion.div)``;

const SlideInLeft = styled(motion.div)``;



const MainSection = () => {
  return (
    <MainConteiner
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 1 }}
    >
      <SlideInLeft variants={fadeIn("down", "tween", 1.4, 2)}>
        <div>
          daoe
          <h1>MainSection</h1>
        </div>
      </SlideInLeft>

    </MainConteiner>
  );
};

export default MainSection;
