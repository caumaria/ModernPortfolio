import styled from "styled-components";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

const FooterLinksContainer = styled.div`
  max-width: 400px;
  width: 100%;
  min-height: 360px;
  border-right: 2px solid var(--lettering);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h6 {
    text-align: center;
    font-size: 1rem;
    color: var(--light-green);
    padding: 1rem;
    margin: 0;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding-top: 2rem;
  }

  a {
    text-align: center;
    text-decoration: none;
    color: inherit;
    img {
      width: 80px;
      height: 80px;
      transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

      &:hover {
      transform: scale(1.1);
    }
    }
  }

  @media (max-width: 1000px) {
    border: none;
  }
`;

const Cofffee = styled.a`
  img {
    border-radius: 50%;
    width: 80px;
    height: 60px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default function FooterLinks() {
  return (
    <FooterLinksContainer>
      <div>
        <a href="https://github.com/caumaria" target="blank">
          <img src={Github} alt="Github de Cau" />
          <p>Github</p>
        </a>

        <a
          href="https://www.linkedin.com/in/cau-ugolini-923a4a185/"
          target="blank"
        >
          <img src={Linkedin} alt="Linked In de Cau" />
          <p>Linked In</p>
        </a>
      </div>

      <Cofffee href="https://www.buymeacoffee.com/cau_" target="blank">
        <div>
          <img src="/coffee.jpg" alt="coffee cup" />
        </div>
      </Cofffee>
      <h6>01 coffee a day keeps the bugs away...</h6>
    </FooterLinksContainer>
  );
}
