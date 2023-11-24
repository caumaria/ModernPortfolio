import Header from './Header'
import styled from 'styled-components';
import MainSection from './MainSection';
import SocialBar from './SocialBar';

const FirstSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

const Conteiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function FirstSection() {
  return (
    <FirstSectionContainer>
      <Header />
        <Conteiner>
          <MainSection />
        </Conteiner>
        <SocialBar />
    </FirstSectionContainer>
  )
}
