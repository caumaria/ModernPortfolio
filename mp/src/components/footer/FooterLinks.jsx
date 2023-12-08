import styled from "styled-components";
import { Link } from "react-scroll";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

const FooterLinksContainer = styled.div`
  width: 400px;
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
    }
  }
`;

const Cofffee = styled.a`
  img {
    border-radius: 50%;
    width: 80px;
    height: 60px;
  }
`;

export default function FooterLinks() {
  return (
    <FooterLinksContainer>
      <div>
        <Link href="https://github.com/caumaria" target="blank">
          <img src={Github} alt="Github de Cau" />
          <p>Github</p>
        </Link>

        <Link
          href="https://www.linkedin.com/in/cau-ugolini-923a4a185/"
          target="blank"
        >
          <img src={Linkedin} alt="Linked In de Cau" />
          <p>Linked In</p>
        </Link>
      </div>

      <Cofffee href="https://www.buymeacoffee.com/cau_">
        <div>
          <img src="/coffee.jpg" alt="coffee cup" />
        </div>
      </Cofffee>
      <h6>01 coffee a day keeps the bugs away...</h6>
    </FooterLinksContainer>
  );
}
