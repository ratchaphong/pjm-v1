import styled from "styled-components";
import bbom2 from "../assets/images/bbom.jpg";
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
  margin-bottom: 64px;
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
    display: flex;
    flex-direction: column;
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
    &:hover {
      opacity: 0.6;
    }
    @media (max-width: 1024px) {
      width: 100%;
      display: flex;
      margin-bottom: 0;
      padding: 0;
    }
  }
  .motto {
    padding: 64px 32px;
    width: 100%;
    border: 4px solid #f1f1f1;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    column-gap: 36px;
    margin-bottom: 64px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .motto .label {
    width: 68%;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 36px;
    }
    > div {
      display: flex;
      flex-direction: column;
      row-gap: 24px;
      @media (max-width: 1024px) {
        > p span {
          display: none;
        }
      }
    }
    > div section b {
      /* color: #02254b; */
      color: #f6c90e;
      letter-spacing: 1px;
    }
    > div section ul {
      padding-left: 24px;
      list-style: circle;
    }
  }
  .motto .label h2 {
    margin-bottom: 16px;
    font-size: 32px;
    letter-spacing: 2px;
    /* color: #02254b; */
    color: #f6c90e;
    @media (max-width: 1024px) {
      > span {
        display: none;
      }
    }
  }
  .motto .image {
    width: 32%;
    @media (max-width: 768px) {
      overflow: hidden;
      width: unset;
    }
  }
  .motto .image .design {
    max-width: 100%;
    border-radius: 4%;
  }
`;

const About = () => {
  return (
    <Container>
      <div className="motto">
        <div className="label">
          <h2>
            ทำความรู้จักกับ PROJECTMAN
            <span>
              <br />
              นำทีมโดย อดีตนักเรียนทุนกิจกรรมดีเด่น
            </span>
          </h2>
          <div>
            <p>
              นาย ธีรภัทร์ น้ำเพชร ชื่อเล่น น้องบอม
              <br />
              <span>จบปริญญาตรีภาควิชา</span>วิศวกรรมไฟฟ้า
              <br />
              <span>
                สาขา อิเล็กทรอนิกส์และระบบคอมพิวเตอร์ มหาวิทยาลัยศิลปากร
              </span>
            </p>
            <section>
              <b>กิจกรรมที่ผ่านมา</b>
              <ul>
                <li>เคยรับทุนกิจกรรมดีเด่น</li>
                <li>เป็นประธานรุ่นภาควิชาวิศวกรรมไฟฟ้า</li>
                <li> เป็นผู้ควบคุมกิจกรรมประชุมเชียร์ (พี่ซ้อมน้อง)</li>
                <li>การแข่งขันและได้รับรางวัลมากมาย</li>
              </ul>
            </section>
            <section>
              <b>เป็นคนแบบไหนชอบทำอะไร</b>
              <ul>
                <li>เป็นคนที่มีความเป็นผู้นำสูง</li>
                <li>กล้าคิดกล้าตัดสินใจและรับฟังคนอื่นด้วยเสมอ</li>
                <li>มีความคิดสร้างสรรค์กล้าคิดกล้าทำมีไอเดียใหม่ ๆ อยู่เสมอ</li>
              </ul>
            </section>
          </div>
        </div>
        <div className="image">
          <img src={bbom2} className="design" alt="" />
        </div>
      </div>
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
          <p className="">
            ด้วยประสบการณ์ทำงานในสายงานกว่า 5 ปี
            <br />
            เรามีความถนัดในการพัฒนาระบบด้วย MERN Stack รวมทั้งภาษาอื่นๆ
          </p>
          <button type="button" className="greeting" disabled>
            ฉันคือใคร
          </button>
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
          <Link to={"/gallery"}>
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
