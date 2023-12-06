import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Navbar from "./Navbar";

const MotionConteiner = styled(motion.div)`
  margin: 2rem 0;
`;
const SlideInLeft = styled(motion.div)``;

const HeaderContainer = styled.div`
  height: 100vh;
  width: 200px;
  position: relative;

  @media (max-width: 1000px) {
    width: 0;
  }
`;

const LineTop = styled.div`
  position: absolute;
  height: 30%;

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
      top: 110%;
    }
    100% {
      top: 10%;
      height: 100%;
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const LineBottom = styled.div`
  height: 30%;
  position: absolute;

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

const Container = styled.div`
  height: 36%;
  width: 200px;
`;


const Header = () => {

  return (
    <MotionConteiner
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <SlideInLeft variants={fadeIn("right", "tween", 2, 1)}>
        <HeaderContainer>
          <Container>
            <LineTop>
              <div></div>
            </LineTop>
          </Container>

          <Navbar />

          <Container>
            <LineBottom>
              <div></div>
            </LineBottom>
          </Container>
        </HeaderContainer>
      </SlideInLeft>
    </MotionConteiner>
  );
};


export default Header;
