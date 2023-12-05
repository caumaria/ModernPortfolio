import styled from "styled-components";

const FooterContainer = styled.div`

    a {
        text-decoration: none;
    }
`;

export default function Footer() {
  return (
    <FooterContainer id="contact">
      <h3>What&rsquo;s next?</h3>
      <h2>
        Get in
        <a href="mailto: cau.ugolini@gmail.com">
          <u>touch</u>
        </a>
      </h2>
    </FooterContainer>
  );
}
