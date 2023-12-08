import { Link } from "react-scroll";
import styled from "styled-components";
import FooterSection from "./FooterSection";

const FooterContainer = styled.div`
  background-color: var(--dark-green);
  background-image: url("https://www.transparenttextures.com/patterns/black-orchid.png");
  min-height: 700px;
  height: 100%;
  font-size: 1.5rem;
  position: relative;
  text-align: center;

  section {
    width: 100%;
    margin: 0 auto;
  }

  h5 {
    color: var(--pink);
    font-size: 3rem;
    margin: 0;
    padding: 3rem 0;
  }

  pre {
    margin-top: 8rem;
    opacity: .7;
    font-size: small;
  }
`;

const TopScrollLink = styled.div`
  position: absolute;
  bottom: 6%;
  right: 3%;
  img {
    width: 60px;
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover img {
    transform: scale(1.2);
  }
`;

export default function Footer() {
  return (
    <FooterContainer id="contact">
      <h5>What&rsquo;s next?</h5>
      <section>
        <FooterSection />
      </section>

      <TopScrollLink>
        <Link to="home" smooth={true} duration={1200}>
          <img src="/arrow-up.png" alt="arrow scroll to top" />
        </Link>
      </TopScrollLink>

      <pre>© Cau Ugolini 2023, Dezembro</pre>
    </FooterContainer>
  );
}
