import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

const MotionSocial = styled(motion.div)`
  margin-top: 2rem;
`;
const SlideInRight = styled(motion.div)``;

const SocialContainer = styled.div`
  height: 100vh;
  width: 200px;
`;

const ContainerUp = styled.div`
  margin-top: 1rem;
  height: 60%;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: end;
  overflow: hidden;
`;

const LineUp = styled.div`
  height: 60%;
  position: fixed;

  ::before {
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

const IconContainer = styled.div`
  height: 14%;
  width: 200px;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  img {
    width: 28px;
    height: 28px;
  }
`;

const ContainerDown = styled.div`
  height: 10%;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const LineDown = styled.div`
  height: 10%;
  position: fixed;

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
      <SlideInRight variants={fadeIn("left", "tween", 1.4, 1)}>
        <SocialContainer>
          <ContainerUp>
            <LineUp>
              <div></div>
            </LineUp>
          </ContainerUp>

          <IconContainer>
            <Icons>
              <img src={Linkedin} alt="Linked In de Cau" />
              <img src={Github} alt="Github de Cau" />
            </Icons>
          </IconContainer>

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
