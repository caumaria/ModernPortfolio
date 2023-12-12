import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import DesktopProfilePic from "../assets/me.png";
import MobileProfilePic from "../assets/mobilepic.png";
import VisuallyHidden from "./VisuallyHidden";
import MainSecButton from "./main section/MainSecButton";

const MainConteiner = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 2rem;
`;

const DesktopContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const MobileContainer = styled(motion.div)`
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100%;
  }

  @media (max-width: 1000px) {
    display: flex;
  }
  p {
    max-width: 600px;
    text-align: center;
  }
`;

const MainSection = () => {
  return (
    <MainConteiner
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 1 }}
    >
      <DesktopContainer variants={fadeIn("down", "tween", 1, 1)}>
        <img src={DesktopProfilePic} alt="Photo of Cau." />
      </DesktopContainer>

      <MobileContainer variants={fadeIn("down", "tween", 1, 1)}>
        <img src={MobileProfilePic} alt="Photo of Cau." />

        <p>A driven and dynamic individual with a goal to create
          exceptional web & apps experiences. Let`s work together to make a
          lasting impact.
        </p>
      </MobileContainer>

      <MainSecButton />

      <VisuallyHidden>
        <p>
          Cau`s Portfolio, software engineer looking for internship/junior level
          position. A driven and dynamic individual with a goal to create
          exceptional web & apps experiences. Let`s work together to make a
          lasting impact. Tech Tags: React, JavaScript, Typescript,
          NextJS
        </p>
      </VisuallyHidden>
    </MainConteiner>
  );
};

export default MainSection;
