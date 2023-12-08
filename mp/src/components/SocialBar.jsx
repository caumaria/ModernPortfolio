import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Icon from "./main section/Icons";
import { HeaderContainer } from "./Header";

const MotionSocial = styled(motion.div)``;
const SlideInRight = styled(motion.div)``;

const ContainerUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 200px;
`;

const LineUp = styled.div`
  position: relative;
  min-height: 390px;

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
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: end;
  `;

const LineDown = styled.div`
  min-height: 78px;
  position: relative;

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
      viewport={{ once: true, amount: 0.25 }}
    >
      <SlideInRight variants={fadeIn("left", "tween", 2, 1)}>

        <HeaderContainer>
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
        </HeaderContainer>

      </SlideInRight>
    </MotionSocial>
  );
};

export default SocialBar;
