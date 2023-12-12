import styled from "styled-components";
import FooterLinks from "./FooterLinks";
import FooterAbout from "./FooterAbout";

const FooterSectionContainer = styled.div`
  text-align: start;
  font-size: large;
  
  section {
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12rem;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
`;

export default function FooterSection() {
  return (
    <FooterSectionContainer>
      <section>
        <FooterAbout />

        <FooterLinks />
      </section>
    </FooterSectionContainer>
  );
}
