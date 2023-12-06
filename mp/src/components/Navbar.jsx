import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const ContainerUl = styled.div`
  height: 30%;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: start;

  @media (max-width: 1000px) {
    width: 0;
  }
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

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    top: 5%;
    padding: 0 2rem;
    font-size: 1.5rem;
    min-width: 420px;
  }
`;

export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <ContainerUl>
      <Ul>
        <li onClick={scrollToTop} data-content="Home">
          Home
        </li>
        <Link to="hero" smooth={true} duration={1200}>
          <li data-content="About Me">About Me</li>
        </Link>
        <Link to="work" smooth={true} duration={1200}>
          <li data-content="Work">Work</li>
        </Link>
        <Link to="contact" smooth={true} duration={1200}>
          <li data-content="Contact">Contact</li>
        </Link>
      </Ul>
    </ContainerUl>
  );
}
