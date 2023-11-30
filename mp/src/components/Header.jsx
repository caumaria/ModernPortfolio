import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const MotionConteiner = styled(motion.div)`
  margin: 2rem 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;
const SlideInLeft = styled(motion.div)``;

const HeaderContainer = styled.div`
  height: 100vh;
  width: 200px;
  position: relative;
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
`;

const Container = styled.div`
  height: 36%;
  width: 200px;
`;

const ContainerUl = styled.div`
  height: 30%;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Ul = styled.div`
  position: absolute;
  li {
    cursor: pointer;
    padding-bottom: 1.6rem;
    list-style: none;
    transition: transform 0.3s ease; 
    &:hover {
      transform: translateX(10px);
      color: var(--light-green);
      &::after {
        content: attr(data-content);
        color: var(--pink);
        position: absolute;
        top: 5%;
        left: 8%;
        white-space: nowrap;
        z-index: -1;
      }
    }
  }
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

          <ContainerUl>
            <Ul>
              <li data-content="Home">Home</li>
              <li data-content="About Me">About Me</li>
              <li data-content="Work">Work</li>
              <li data-content="Contact">Contact</li>
            </Ul>
          </ContainerUl>

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
