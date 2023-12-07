import { Link } from "react-scroll";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: var(--dark-green);
  min-height: 600px;
  height: 100%;
  font-size: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
  div {
    width: 400px;
    max-height: 400px;
    border: 1px solid red;
  }
  h4 {
    margin: 0;
    font-size: 3rem;
  }

  a > img {
  }

`;

const TopScrollLink = styled.div`
  img {
    width: 60px;
    cursor: pointer;
  }
`;

const Cofffee = styled.a`
  img {
    width: 80px;
    height: 60px;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterContainer id="contact">
        <section>
          <div>
            <p>What&rsquo;s next?</p>
            <h4>
              Get in
              <a href="mailto: cau.ugolini@gmail.com">touch</a>
            </h4>
            <Cofffee href="https://www.buymeacoffee.com/cau_">
              <img src="/coffee.jpg" alt="" />
            </Cofffee>
          </div>

          <div>
            <p>
              I love to talk about games and new technologies, feel free to
              contact me anytime.
            </p>
            <p>Feedbacks are appreciated ♥</p>
          </div>
        </section>
      </FooterContainer>

      <TopScrollLink>
        <Link to="home" smooth={true} duration={1200}>
          <img src="/arrow-up.png" alt="arrow scroll to top" />
        </Link>
      </TopScrollLink>
    </>
  );
}
