import styled from "styled-components";
import React from "react";

const FooterAboutContainer = styled.div`
  max-width: 400px;
  width: 100%;
  min-height: 360px;
  padding-left: 1rem;
  border-left: 2px solid var(--lettering);

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

    span {
      color: var(--pink);
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  img {
    width: 40px;
  }

  h4 {
    font-size: 3rem;
    margin: 0;

    a {
      position: relative;
      color: var(--light-green);
      padding-left: 1rem;
      transition: transform 0.8s ease;
      &:hover {
        transform: translateX(-10px);
        &::after {
          content: attr(data-content);
          color: var(--pink);
          position: absolute;
          right: -3%;
          z-index: -1;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    border: none;
    padding: 0;
  }
`;

export default function FooterAbout() {
  return (
    <FooterAboutContainer>
      <h6>
        Start by saying <span>hi</span>!
      </h6>
      <div>
        <p>
          I love to talk about games and new technologies, feel free to contact
          me anytime.
        </p>
        <p>Feedbacks are appreciated ♥</p>
        <h4>
          Get in
          <a href="mailto: cau.ugolini@gmail.com" data-content="touch">
            touch
          </a>
          .
        </h4>
      </div>
    </FooterAboutContainer>
  );
}
