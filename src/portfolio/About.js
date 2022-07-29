import styled from "styled-components";
import arduino from "../assets/images/arduino.png";
import python from "../assets/images/python.jpg";
import line from "../assets/images/line.png";
import node from "../assets/images/node.png";
import firebase from "../assets/images/firebase.png";
import reactlogo from "../assets/images/reactlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faDesktop,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Container = styled.section`
  font-family: "Kanit", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 64px; */
  width: 80%;
  margin: 0 auto 64px;
  color: #f1f1f1;
  > h2 {
    margin-bottom: 16px;
    letter-spacing: 1px;
    font-size: 32px;
  }
  .content {
    margin-bottom: 32px;
    font-size: 24px;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  .feature {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 32px;
  }
  .feature .item {
    width: 30%;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    border: 4px solid #f1f1f1;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 24px;
    @media (max-width: 1024px) {
      width: 45%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .feature .item .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .feature .item .header .label {
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 1px;
  }
  .feature .item .header .icon {
    font-size: 48px;
  }
  .feature .item .greeting {
    background-color: #f6c90e;
    font-family: "Kanit", sans-serif;
    width: 100%;
    text-align: center;
    border-radius: 4px;
    padding: 4px 16px;
    margin-top: 16px;
    font-size: 16px;
    border: none;
    opacity: 1;
    transition: opacity 0.3s;
    -webkit-text-fill-color: rgba(0, 0, 0, 1);
    -webkit-opacity: 1;
  }
  .feature .item a {
    /* color: #000000; */
    text-decoration: none;
  }
  .feature .item .greeting:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  .feature .item .greeting:disabled {
    background-color: #f6c90e;
    color: #000000;
    cursor: not-allowed;
  }
  .feature .item .greeting:disabled:hover {
    opacity: 0.8;
  }
  .agent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1024px) {
      flex-direction: row;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .agent .jobs {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 1024px) {
      width: 100%;
      flex-direction: row;
      margin-bottom: 24px;
    }
  }
  .agent .jobs .project {
    width: 33.33%;
    padding: 0 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
    @media (max-width: 1024px) {
      width: 100%;
      display: flex;
      margin-bottom: 0;
      padding: 0;
    }
  }
  .agent .jobs .project:hover {
    opacity: 0.6;
  }
`;

const About = () => {
  return (
    <Container id="about">
      <h2 className="title" id="about">
        ทักษะและประสบการณ์
      </h2>
      <p className="content">ทีมงานพร้อมให้บริการโปรเจคที่มีคุณภาพ</p>
      <div className="feature">
        <div className="item">
          <div className="header">
            <h3 className="label">ชวนคุย</h3>
            <div className="icon">
              <FontAwesomeIcon icon={faDesktop} color={"#F6C90E"} />
            </div>
          </div>
          <p className="line-clamp">
            ด้วยประสบการณ์ทำงานในสายงานกว่า 5 ปี
            <br />
            เรามีความถนัดในการพัฒนาระบบด้วย MERN Stack รวมทั้งภาษาอื่นๆ
          </p>
          <Link to="/comingsoon">
            <button type="button" className="greeting">
              ฉันคือใคร
            </button>
          </Link>
        </div>
        <div className="item">
          <div className="header">
            <h3 className="label">บริการหลังการขาย</h3>
            <div className="icon">
              <FontAwesomeIcon icon={faCog} color={"#F6C90E"} />
            </div>
          </div>
          <p className="">
            ไม่มีค่าบริการรายปี
            ยกเว้นแต่ลูกค้าต้องการให้เราดูแลเว็บไซต์เป็นพิเศษ
          </p>
          <Link to={"/gallery"} state={{ catalogue: "website" }}>
            <button type="button" className="greeting">
              เราทำอะไรบ้าง
            </button>
          </Link>
        </div>
        <div className="item">
          <div className="header">
            <h3 className="label">หากท่านสนใจ</h3>
            <div className="icon">
              <FontAwesomeIcon icon={faDollarSign} color={"#F6C90E"} />
            </div>
          </div>
          <p className="">
            สามารถส่งขอบเขตของงานหรือตัวอย่างระบบงานมายัง Email ของเรา
            <br />
            ทางเราจะทำการประเมินราคาของระบบงานนั้น
            ซึ่งราคาจะแตกต่างกันไปขึ้นอยู่กับความยากง่ายของระบบงาน
          </p>
        </div>
      </div>
      <div className="agent">
        <div className="jobs">
          <div className="project">
            <img src={arduino} style={{ width: "100%" }} alt="" />
          </div>
          <div className="project">
            <img src={python} style={{ width: "100%" }} alt="" />
          </div>
          <div className="project">
            <img src={reactlogo} style={{ width: "100%" }} alt="" />
          </div>
        </div>
        <div className="jobs">
          <div className="project">
            <img src={line} style={{ width: "100%" }} alt="" />
          </div>
          <div className="project">
            <img src={node} style={{ width: "100%" }} alt="" />
          </div>
          <div className="project">
            <img src={firebase} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
