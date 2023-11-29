import styled from "styled-components";
import FirstSection from "../components/FirstSection";
import Work from "../components/work/Work";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";


const MainConteiner = styled.div`
`;

const Mainpage = () => {
  return (
    <MainConteiner>     
        <FirstSection />
        <Hero />
        <Work />    
        <Footer />

    </MainConteiner>
  );
};

export default Mainpage;
