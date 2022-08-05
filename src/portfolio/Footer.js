import {
  faFacebook,
  faLine,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.section`
  font-family: "Kanit", sans-serif;
  width: 100%;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #000000;
  color: #f1f1f1;
  padding: 0 10%;
  box-sizing: border-box;
  /* @media (max-width: 1024px) {
    height: 240px;
  } */
  .content {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-top: 1px solid;
    padding: 48px 0;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .content .brand {
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      font-size: 24px;
      &:hover {
        opacity: 0.6;
      }
    }
    @media (max-width: 1024px) {
      width: 30%;
      min-width: 180px;
      margin-top: 16px;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <div className="content">
        <div style={{ textAlign: "center" }}>
          Copyright © 2022 By Projectman
        </div>
        <div className="brand">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLine} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
