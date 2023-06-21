import styled from "styled-components";
import Header from "../components/Header";
import SocialBar from "../components/SocialBar";

const MainConteiner = styled.div`
  display: flex;
  max-width: 1600px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 4rem;
`;

const Conteiner = styled.div`
  width: 100%;
`;



const Mainpage = () => {
  return (
    <MainConteiner>

      <Header />
      <Conteiner>

      </Conteiner>
      <SocialBar />

    </MainConteiner>
  );
};

export default Mainpage;
