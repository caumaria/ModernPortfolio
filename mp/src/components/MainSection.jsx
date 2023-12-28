import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import DesktopProfilePic from "../assets/me.png";
import MobileProfilePic from "../assets/mobilepic.png";
import VisuallyHidden from "./VisuallyHidden";
import MainSecButton from "./main section/MainSecButton";
import React from 'react'; // eslint-disable-line no-unused-vars

const MainConteiner = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
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
  gap: 1rem;
  padding: 0 1rem;

  img {
    width: 100%;
  }

  @media (max-width: 1000px) {
    display: flex;
  }
  p {
    max-width: 600px;
    text-align: center;
    padding: 1rem;
  }

  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

    p {
      width: auto;
      background-color: var(--pink);
      border-radius: 8px;
      padding: 0 1rem;
      transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;
      color: #33000E;
      font-weight: 700;
      margin: 0;

      &:hover {
        transform: scale(1.1);
      }
    }
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
        <VisuallyHidden>
          <p>
            Cau`s Portfolio, software engineer. A driven and dynamic individual
            with a goal to create exceptional web & apps experiences. Let`s work
            together to make a lasting impact. Tech Tags: React, JavaScript,
            Typescript, NextJS.
          </p>
        </VisuallyHidden>
      </DesktopContainer>

      <MobileContainer variants={fadeIn("down", "tween", 1, 1)}>
        <img src={MobileProfilePic} alt="Photo of Cau." />

        <section>
          <p>React</p>
          <p>Javascript</p>
          <p>Typescript</p>
          <p>CSS</p>
          <p>NextJS</p>
          <p>NodeJs</p>
        </section>

        <p>
          A driven and dynamic individual with a goal to create exceptional web
          & apps experiences. Let`s work together to make a lasting impact.
        </p>
      </MobileContainer>

      <MainSecButton />
    </MainConteiner>
  );
};

export default MainSection;
