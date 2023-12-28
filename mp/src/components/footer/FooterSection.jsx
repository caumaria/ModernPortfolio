import styled from "styled-components";
import FooterLinks from "./FooterLinks";
import FooterAbout from "./FooterAbout";
import React from "react";

const FooterSectionContainer = styled.div`
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    max-width: 1400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12rem;

    @media (max-width: 1000px) {
      flex-direction: column;
      gap: 0;
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
