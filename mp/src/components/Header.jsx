import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const MotionConteiner = styled(motion.div)`
  margin-top: 2rem;
`;
const SlideInLeft = styled(motion.div)``;

const HeaderContainer = styled.div`
  height: 100vh;
  width: 200px;
  position: relative;
`;

const LineTop = styled.div`
  position: absolute;
  height: 28%;

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

const Ul = styled.div`
  position: absolute;
  li {
    padding-bottom: 1.6rem;
    list-style: none;
  }
`;

const LineBottom = styled.div`
  height: 28%;
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
  height: 33%;
  width: 200px;
`;

const ContainerUl = styled.div`
  height: 28%;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: start;
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
              <li>Home</li>
              <li>About Me</li>
              <li>Work</li>
              <li>Contact</li>
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
