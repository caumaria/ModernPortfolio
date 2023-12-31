import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import React from 'react'; // eslint-disable-line no-unused-vars

const ContainerUl = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 200px;
  width: 200px;
`;

const Ul = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  li {
    cursor: pointer;
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

  @media (max-width: 768px) {
    min-width: 320px;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    gap: 2rem;
    overflow: hidden;
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
