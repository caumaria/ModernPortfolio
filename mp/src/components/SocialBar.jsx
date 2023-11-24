import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import FollowMe from "../assets/followme.svg";

const MotionSocial = styled(motion.div)`
  margin-top: 2rem;
`;
const SlideInRight = styled(motion.div)``;

const SocialContainer = styled.div`
  height: 100vh;
  width: 200px;
  position: relative;
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
  position: absolute;

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
  height: 16%;
  width: 200px;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const LinkS = styled.a`
  z-index: 10;
  &:hover {
    animation: diagonal-to-top-right 0.5s forwards
      cubic-bezier(0.5, 0, 0.25, 2.33);

    @keyframes diagonal-to-top-right {
      to {
        transform: translateX(12px) translateY(-3px);
      }
    }
  }

  img {
    width: 28px;
    height: 28px;
  }
`;

const Follow = styled.div`
  display: none;

  img {
    width: 216px;
    height: 70px;
    margin-right: 2rem;
  }

  ${LinkS}:hover + & {
    display: block;
    position: absolute;
    top: 66%;
    right: 9.5%;
    
  }

  ${LinkS}:nth-of-type(2):hover ~ & {
    display: block;
    position: absolute;
    top: 72%;
    right: 9.5%;
    
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
      <SlideInRight variants={fadeIn("left", "tween", 1.4, 1)}>
        <SocialContainer>
          <ContainerUp>
            <LineUp>
              <div></div>
            </LineUp>
          </ContainerUp>

          <IconContainer>
            <Icons>

              <LinkS
                href="https://www.linkedin.com/in/cau-ugolini-923a4a185/"
                target="blank"
              >
                <img src={Linkedin} alt="Linked In de Cau" />
              </LinkS>
              <Follow>
                <img src={FollowMe} alt="Me siga nas redes sociais:" />
              </Follow>

              <LinkS href="https://github.com/caumaria" target="blank">
                <img src={Github} alt="Github de Cau" />
              </LinkS>
              <Follow>
                <img src={FollowMe} alt="Me siga nas redes sociais:" />
              </Follow>
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
