import styled from "styled-components";
import FirstSection from "../components/FirstSection";
import Work from "../components/work/Work";


const MainConteiner = styled.div`
  max-width: 1600px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 4rem;
`;


const Mainpage = () => {
  return (
    <MainConteiner>
     
        <FirstSection />
   
        <Work />
      

    </MainConteiner>
  );
};

export default Mainpage;
