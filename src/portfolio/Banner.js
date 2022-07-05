import styled from "styled-components";
import bbom from "../assets/images/ttherapat.jpg";

const Container = styled.section`
  font-family: "Kanit", sans-serif;
  padding-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .image {
    width: 24%;
    @media (max-width: 768px) {
      width: 48%;
    }
  }
  .image .background {
    width: 100%;
    height: 100%;
    display: block;
  }
  .textImage {
    width: 50%;
    margin-left: 4%;
    display: flex;
    flex-direction: column;
    color: #f1f1f1;
    @media (max-width: 768px) {
      width: 80%;
      margin-left: 0;
      margin-bottom: 3%;
      margin-top: 3%;
    }
  }
  .textImage .quotes_1024 {
    letter-spacing: 1px;
    text-align: left;
    font-size: 40px;
    @media (max-width: 1024px) {
      font-size: 32px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .textImage .quotes_768 {
    display: none;
    font-size: 24px;
    text-align: center;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Banner = () => {
  return (
    <Container id="home">
      <div className="image">
        <img src={bbom} className="background" alt="" />
      </div>
      <div className="textImage">
        <p className="quotes_1024">
          ผู้ให้บริการรับทำโปรเจคคอมพิวเตอร์
          <br />
          เว็บไซต์ และโครงงานนักศึกษา
          <br />
          จบครบในที่เดียว
        </p>
        <p className="quotes_768">
          ผู้ให้บริการรับทำโปรเจค
          <br />
          เว็บไซต์และโครงงานนักศึกษา
          <br />
          จบครบในที่เดียว
        </p>
      </div>
    </Container>
  );
};

export default Banner;
