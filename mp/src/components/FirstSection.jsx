import Header from "./Header";
import styled from "styled-components";
import MainSection from "./MainSection";
import SocialBar from "./SocialBar";

const PaddingContainer = styled.div`
  padding: 0 4rem;

  @media (max-width: 1000px) {
    padding: 0;
    margin: 0 auto;
  }
`;

const FirstSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const Conteiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function FirstSection( ) {
  return (
    <PaddingContainer id="home">
      <FirstSectionContainer>
        <Header/>
        <Conteiner>
          <MainSection />
        </Conteiner>
        <SocialBar />
      </FirstSectionContainer>
    </PaddingContainer>
  );
}

