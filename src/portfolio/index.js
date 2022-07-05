import styled from "styled-components";
import Navigator from "./Navigator";
import Banner from "./Banner";
import About from "./About";
import Team from "./Team";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  .line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Body = styled.section`
  margin: 0 auto;
  padding: 64px 0;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Portfolio = () => {
  return (
    <Container>
      <Navigator />
      <Banner />
      <Body>
        <Work />
        <About />
        <Team />
        <Contact />
      </Body>
      <Footer />
    </Container>
  );
};

export default Portfolio;
