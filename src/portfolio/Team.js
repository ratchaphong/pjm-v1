import styled from "styled-components";
import bbom2 from "../assets/images/bbom.jpg";
import mmark from "../assets/images/ttharin.jpg";
import rratcha from "../assets/images/rratcha.jpg";
import bbas from "../assets/images/bbas.jpg";
import mumm from "../assets/images/mum.jpg";
import logo_review from "../assets/images/logo_review.png";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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
  .container {
    max-width: 1024px;
    width: 100%;
    overflow: hidden;
    padding: 24px 0;
  }
  .container .main-card {
    display: flex;
    justify-content: space-evenly;
    width: 200%;
    transition: 1s;
  }
  .container .main-card .cards {
    width: calc(100% / 2 - 8px);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }
  .container .main-card .cards .card {
    width: calc(100% / 3 - 16px);
    border: 2px solid #f1f1f1;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.4s ease;
  }
  .container .main-card .cards .card:hover {
    transform: translateY(-16px);
    border: 4px solid #f6c90e;
  }
  .container .cards .card .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 16px;
  }
  .container .cards .card .content .img {
    height: 130px;
    width: 130px;
    border-radius: 50%;
    padding: 4px;
    background: unset;
    transition: all 0.4s ease;
  }
  .container .cards .card:hover .img {
    background: #f6c90e;
  }
  .container .card .content .img img {
    height: 100%;
    width: 100%;
    border: 4px solid #ffff;
    border-radius: 50%;
    object-fit: cover;
  }
  .container .cards .card .name {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;
    display: inline-block;
    color: #f1f1f1;
    overflow: hidden;
    background: linear-gradient(to right, #f6c90e, #f6c90e 50%, #f1f1f1 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
    text-decoration: none;
  }
  .container .cards .card:hover .name {
    background-position: 0 100%;
  }
  .container .card .content .name span {
    display: none;
    @media (max-width: 1024px) {
      display: block;
    }
  }
  .container .card .content .job {
    font-size: 16px;
    color: #f1f1f1;
  }
  .container .card .content .media-icons {
    display: flex;
  }
  .container .card .content .media-icons a {
    text-align: center;
    line-height: 33px;
    height: 35px;
    width: 35px;
    margin: 0 4px;
    font-size: 14px;
    color: #fff;
    border-radius: 50%;
    border: 2px solid transparent;
    background: #ad974f;
    transition: all 0.3s ease;
  }
  .container .card .content .media-icons .fa {
    background: #1877f2;
  }
  .container .card .content .media-icons .tw {
    background: #1da1f2;
  }
  .container .card .content .media-icons .in {
    background: #c32aa3;
  }
  .container .card .content .media-icons .yu {
    background: #f00;
  }
  .container .card .content .media-icons a:hover {
    color: #ad974f;
    background-color: #fff;
    border-color: #ad974f;
  }
  .container .card .content .media-icons .fa:hover {
    color: #1877f2;
    background-color: #fff;
    border-color: #1877f2;
  }
  .container .card .content .media-icons .tw:hover {
    color: #1da1f2;
    background-color: #fff;
    border-color: #1da1f2;
  }
  .container .card .content .media-icons .in:hover {
    color: #c32aa3;
    background-color: #fff;
    border-color: #c32aa3;
  }
  .container .card .content .media-icons .yu:hover {
    color: #f00;
    background-color: #fff;
    border-color: #f00;
  }
  .container .button {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px;
  }
  .button label {
    height: 16px;
    width: 16px;
    border-radius: 24px;
    background: #fff;
    margin: 0 4px;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .button label.active {
    width: 36px;
  }
  #one:checked ~ .button .one {
    width: 36px;
    background-color: #f6c90e;
  }
  #one:checked ~ .button .two {
    width: 16px;
  }
  #two:checked ~ .button .one {
    width: 16px;
  }
  #two:checked ~ .button .two {
    width: 36px;
    background-color: #f6c90e;
  }
  input[type="radio"] {
    display: none;
  }
  #two:checked ~ .main-card {
    margin-left: -100%;
  }
  @media (max-width: 768px) {
    .container .main-card .cards .card {
      margin: 20px 0 10px 0;
      width: calc(100% / 2 - 10px);
      height: fit-content;
    }
  }
  @media (max-width: 600px) {
    .container .main-card .cards .card {
      width: 100%;
      height: fit-content;
    }
  }
`;

const InterviewContainer = styled.div`
  padding: 64px 32px;
  width: 100%;
  height: 600px;
  border: 4px solid #f1f1f1;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  column-gap: 36px;
  /* margin-bottom: 64px; */
  @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
  }
  .label {
    width: 68%;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 36px;
    }
    /* > div {
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
      color: #f6c90e;
      letter-spacing: 1px;
    }
    > div section ul {
      padding-left: 24px;
      list-style: circle;
    } */
  }
  .label .header {
    margin-bottom: 16px;
    font-size: 32px;
    letter-spacing: 2px;
    color: #f6c90e;
    @media (max-width: 1024px) {
      > span {
        display: none;
      }
    }
  }
  .label .context {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    animation: SlideIn 1s linear forwards;
    @media (max-width: 1024px) {
      > p span {
        display: none;
      }
    }
  }
  .label .context section b {
    color: #f6c90e;
    letter-spacing: 1px;
  }
  .label .context section ul {
    padding-left: 24px;
    list-style: circle;
  }
  .image {
    width: 32%;
    overflow: hidden;
    @media (max-width: 768px) {
      overflow: hidden;
      width: unset;
    }
  }
  .image .design {
    max-width: 100%;
    border-radius: 4%;
    opacity: 0;
    animation: fadeIn 1s linear forwards;
    filter: grayscale(0.8) contrast(1.3) brightness(1.2);
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes SlideIn {
    0% {
      transform: translateY(-4rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const WaitingText = styled.div`
  position: relative;
  text-align: center;
  > p:nth-child(1),
  > p:nth-child(2) {
    font-family: "Edosz";
    letter-spacing: 1px;
  }
  > p:nth-child(1) {
    opacity: 0;
    animation: fadeIn 1s linear forwards;
    font-size: 64px;
    color: #870f06;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  > p:nth-child(2) {
    font-size: 32px;
    margin: 16px 0 32px 0;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  > div:last-of-type {
    position: absolute;
    width: 150px;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: 0.2;
    /* filter: grayscale(1); */
    @media (max-width: 768px) {
      width: 120px;
    }
  }
  > div:last-of-type img {
    width: 100%;
    object-fit: cover;
    display: block;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Card = ({
  index,
  img,
  name,
  job,
  fa = "#",
  tw = "#",
  ins = "#",
  yu = "#",
  setSeletctedItem = () => {},
}) => {
  return (
    <div className="card">
      <div className="overlay"></div>
      <div className="content">
        <div className="img" onClick={() => setSeletctedItem(index)}>
          <img src={img} alt="" />
        </div>
        <div className="details">
          <div className="name">{name}</div>
          <div className="job">{job}</div>
        </div>
        <div className="media-icons">
          <a className="fa" href={fa}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="tw" href={tw}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="in" href={ins}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="yu" href={yu}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [selectedItem, setSeletctedItem] = useState(1);
  return (
    <Container id="team">
      <h2 className="title">ทีมงาน</h2>
      <div className="container">
        <input type="radio" name="dot" id="one" defaultChecked />
        <input type="radio" name="dot" id="two" />
        <div className="main-card">
          <div className="cards">
            <Card
              index={1}
              img={bbom2}
              name="ธีรภัทร์ น้ำเพชร"
              job="Team Lead"
              fa="#"
              tw="#"
              ins="#"
              yu="#"
              setSeletctedItem={setSeletctedItem}
            />
            <Card
              index={2}
              img={rratcha}
              name={
                <>
                  รัฐชพงษ์ <span></span> ชมสารวิวัฒน์
                </>
              }
              job="Web Developer"
              fa="#"
              tw="#"
              ins="#"
              yu="#"
              setSeletctedItem={setSeletctedItem}
            />
            <Card
              index={3}
              img={mmark}
              name="ธารินทร์ ภู่พูลเพียน"
              job="Mobile Developer"
              fa="#"
              tw="#"
              ins="#"
              yu="#"
              setSeletctedItem={setSeletctedItem}
            />
          </div>
          <div className="cards">
            <Card
              index={4}
              img={bbas}
              name="ชัยวุฒิ กตัญวิญญู"
              job="System Analytics"
              fa="#"
              tw="#"
              ins="#"
              yu="#"
              setSeletctedItem={setSeletctedItem}
            />
            <Card
              index={5}
              img={mumm}
              name="ภัทรพล อ่องมี"
              job="Project Manager"
              fa="#"
              tw="#"
              ins="#"
              yu="#"
              setSeletctedItem={setSeletctedItem}
            />
          </div>
        </div>
        <div className="button">
          <label htmlFor="one" className="active one"></label>
          <label htmlFor="two" className="two"></label>
        </div>
      </div>
      <InterviewContainer>
        <div className="label">
          <h2 className="header">
            ทำความรู้จักกับ PROJECTMAN
            <span>
              <br />
              นำทีมโดย อดีตนักเรียนทุนกิจกรรมดีเด่น
            </span>
          </h2>
          {selectedItem === 1 ? (
            <div className="context">
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
                  <li>
                    มีความคิดสร้างสรรค์กล้าคิดกล้าทำมีไอเดียใหม่ ๆ อยู่เสมอ
                  </li>
                </ul>
              </section>
            </div>
          ) : (
            <WaitingText>
              {selectedItem === 2 && (
                <>
                  <p className="name">ratchaphong</p>
                  <p className="position">web developer of projectman family</p>
                  <div>
                    <img src={logo_review} alt="" />
                  </div>
                </>
              )}
              {selectedItem === 3 && (
                <>
                  <p className="name">tharin</p>
                  <p className="position">
                    mobile developer of projectman family
                  </p>
                  <div>
                    <img src={logo_review} alt="" />
                  </div>
                </>
              )}
              {selectedItem === 4 && (
                <>
                  <p className="name">chaiwut</p>
                  <p className="position">
                    system analytics of projectman family
                  </p>
                  <div>
                    <img src={logo_review} alt="" />
                  </div>
                </>
              )}
              {selectedItem === 5 && (
                <>
                  <p className="name">pattharaphon</p>
                  <p className="position">
                    project manager of projectman family
                  </p>
                  <div>
                    <img src={logo_review} alt="" />
                  </div>
                </>
              )}
              <p>อยู่ระหว่างการจัดเตรียมเนื้อหา ขออภัยในความไม่สะดวก</p>
            </WaitingText>
          )}
        </div>
        <div className="image">
          {/* <img
            src={
              selectedItem === 1
                ? bbom2
                : selectedItem === 2
                ? rratcha
                : selectedItem === 3
                ? mmark
                : selectedItem === 4
                ? bbas
                : mumm
            }
            className="design"
            alt=""
          /> */}
          {selectedItem === 1 && <img src={bbom2} className="design" alt="" />}
          {selectedItem === 2 && (
            <img src={rratcha} className="design" alt="" />
          )}
          {selectedItem === 3 && <img src={mmark} className="design" alt="" />}
          {selectedItem === 4 && <img src={bbas} className="design" alt="" />}
          {selectedItem === 5 && <img src={mumm} className="design" alt="" />}
        </div>
      </InterviewContainer>
    </Container>
  );
};

export default Team;
