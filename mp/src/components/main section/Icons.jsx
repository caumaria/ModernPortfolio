import styled, { keyframes } from "styled-components";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import FollowMe from "../../assets/followme.svg";

const IconContainer = styled.div`
  padding: 1rem;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  position: relative;
`;

const rotateAndMove = keyframes`
  to {
    transform: translateX(20px) translateY(-8px) rotate(-10deg);
  }
`;

const LinkS = styled.a`
  z-index: 10;

  &:hover img {
    animation: ${rotateAndMove} 0.2s forwards cubic-bezier(0.5, 0, 0.25, 2.33);
  }

  img {
    width: 100%;
  }
`;

const Follow = styled.div`
  display: none;
  position: absolute;
  right: -130%;

  img {
    width: 216px;
    height: 70px;
    margin-right: 2rem;
  }

  ${LinkS}:hover + & {
    display: block;
    bottom: 40%;
  }

  ${LinkS}:nth-of-type(2):hover ~ & {
    top: 40%;
    display: block;
  }
`;

export default function Icon() {
  return (
    <IconContainer>
      <Icons>
        <LinkS href="https://github.com/caumaria" target="blank">
          <img src={Github} alt="Github de Cau" />
        </LinkS>
        <Follow>
          <img src={FollowMe} alt="Me siga nas redes sociais:" />
        </Follow>

        <LinkS
          href="https://www.linkedin.com/in/cau-ugolini-923a4a185/"
          target="blank"
        >
          <img src={Linkedin} alt="Linked In de Cau" />
        </LinkS>
        <Follow>
          <img src={FollowMe} alt="Me siga nas redes sociais:" />
        </Follow>
      </Icons>
    </IconContainer>
  );
}
