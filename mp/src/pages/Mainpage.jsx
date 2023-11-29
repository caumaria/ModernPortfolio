import styled from "styled-components";
import FirstSection from "../components/FirstSection";
import Work from "../components/work/Work";
import Hero from "../components/hero/Hero";


const MainConteiner = styled.div`
`;

const Mainpage = () => {
  return (
    <MainConteiner>     
        <FirstSection />
        <Hero />
        <Work />    

    </MainConteiner>
  );
};

export default Mainpage;
