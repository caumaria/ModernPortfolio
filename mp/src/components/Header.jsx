import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Navbar from "./Navbar";

const MotionConteiner = styled(motion.div)``;
const SlideInLeft = styled(motion.div)``;

export const HeaderContainer = styled.div`
  margin: 2rem 0;
  height: 100dvh;
  height: 100vh;
  width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 0;
  }
`;

const LineTop = styled.div`
  position: relative;
  height: 200px;
  width: 200px;

  ::before {
    content: "";
    width: 1px;
    height: 0;
    background: #ccfff9;
    position: absolute;
    animation: lineup 2s forwards 2.1s;
    }

    @keyframes lineup {
    0% {
      top: 100%;
    }
    100% {
      top: 0;
      height: 100%;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const LineBottom = styled.div`
  position: relative;
  height: 200px;
  width: 200px;

  ::before {
    content: "";
    width: 1px;
    height: 0;
    background: #ccfff9;
    position: absolute;
    animation: linedown 2s forwards 2.1s;
  }

  @keyframes linedown {
    100% {
      height: 100%;
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <MotionConteiner
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <SlideInLeft variants={fadeIn("right", "tween", 2, 1)}>
        <HeaderContainer>

          <LineTop>
            <div></div>
          </LineTop>

          <Navbar/>

          <LineBottom>
            <div></div>
          </LineBottom>

        </HeaderContainer>
      </SlideInLeft>
    </MotionConteiner>
  );
};

export default Header;
