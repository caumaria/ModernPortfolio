import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Icon from "./main section/Icons";


const MotionSocial = styled(motion.div)`
  @media (max-width: 1000px) {
    display: none;
  }
`;
const SlideInRight = styled(motion.div)``;

const SocialContainer = styled.div`
  height: 100vh;
  width: 200px;
`;

const ContainerUp = styled.div`
  position: relative;
  height: 58%;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 3rem;
`;

const LineUp = styled.div`
  height: 100%;
  position: absolute;

  ::after {
    content: "";
    width: 1px;
    height: 0;
    background: #ccfff9;
    position: absolute;
    animation: growup 2s forwards 2.1s;
  }

  @keyframes growup {
    0% {
      top: 100%;
    }
    100% {
      top: 0;
      height: 100%;
    }
  }
`;


const ContainerDown = styled.div`
  height: 20%;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const LineDown = styled.div`
  height: 18%;
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

const SocialBar = () => {
  return (
    <MotionSocial
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <SlideInRight variants={fadeIn("left", "tween", 2, 1)}>
        <SocialContainer>
          <ContainerUp>
            <LineUp>
              <div></div>
            </LineUp>
          </ContainerUp>

          <Icon />

          <ContainerDown>
            <LineDown>
              <div></div>
            </LineDown>
          </ContainerDown>
        </SocialContainer>
      </SlideInRight>
    </MotionSocial>
  );
};

export default SocialBar;
