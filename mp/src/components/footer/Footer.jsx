import { Link } from "react-scroll";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: var(--dark-green);
  min-height: 600px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  position: relative;
  a {
    margin-left: 0.5rem;
    color: white;
  }
  h4 {
    margin: 0;
    font-size: 3rem;
  }

  img {
    position: absolute;
    width: 60px;
    cursor: pointer;
    bottom: 10%;
    right: 5%;
  }
`;

export default function Footer() {
  return (
    <FooterContainer id="contact">
      <div>
        <p>What&rsquo;s next?</p>
        <h4>
          Get in
          <a href="mailto: cau.ugolini@gmail.com">touch</a>
        </h4>

        <Link to="home" smooth={true} duration={1200}>
          <img src="/arrow-up.png" alt="arrow scroll to top" />
        </Link>
      </div>
    </FooterContainer>
  );
}
