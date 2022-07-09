import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const delay = 5;

const Container = styled.section`
  font-family: "Kanit", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
  color: #f1f1f1;
  > div:first-of-type h2 {
    margin-bottom: 16px;
    letter-spacing: 1px;
    font-size: 32px;
  }
  .typewriter h2 {
    overflow: hidden;
    white-space: nowrap;
    border-right: 4px solid #f6c90e;
    animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
  }
  .content {
    width: 80%;
    text-align: center;
    font-size: 24px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  .underline {
    width: 160px;
    height: 4px;
    margin: 24px auto 64px;
    background-color: #f6c90e;
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #f6c90e;
    }
  }
`;

const Carousel = styled.div`
  width: 100%;
  height: 100vh;

  input[type="radio"] {
    display: none;
  }

  &.container {
    max-width: 800px;
    max-height: 400px;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
      max-height: 200px;
    }
  }

  .card {
    position: absolute;
    width: 60%;
    height: 100%;
    left: 0;
    right: 0;
    margin: auto;
    transition: transform 0.4s ease;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 60%;
    }
  }

  .cards {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  #item-1:checked ~ .cards #song-3,
  #item-2:checked ~ .cards #song-1,
  #item-3:checked ~ .cards #song-2 {
    transform: translatex(-40%) scale(0.8);
    opacity: 0.4;
    z-index: 0;
    @media (max-width: 768px) {
      transform: translatex(-30%) scale(0.8);
    }
  }

  #item-1:checked ~ .cards #song-2,
  #item-2:checked ~ .cards #song-3,
  #item-3:checked ~ .cards #song-1 {
    transform: translatex(40%) scale(0.8);
    opacity: 0.4;
    z-index: 0;
    @media (max-width: 768px) {
      transform: translatex(30%) scale(0.8);
    }
  }

  #item-1:checked ~ .cards #song-1,
  #item-2:checked ~ .cards #song-2,
  #item-3:checked ~ .cards #song-3 {
    transform: translatex(0) scale(1);
    opacity: 1;
    z-index: 1;
    img {
      box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
      filter: blur(2px);
    }
    .notice {
      opacity: 1;
    }
  }
  .notice {
    opacity: 0;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #f1f1f1;
    border-radius: 4px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    background: #00000050;
    transition: opacity 0.3s ease;
    > h1 {
      font-size: 32px;
      letter-spacing: 3px;
    }
    > p {
      letter-spacing: 1px;
      color: #f1f1f1;
    }
    > a {
      letter-spacing: 1px;
      color: #f6c90e;
    }
    @media (max-width: 768px) {
      width: 150px;
      padding: 8px;
      row-gap: 8px;
      border: unset;
      background: unset;
      > h1 {
        font-size: 24px;
        letter-spacing: 3px;
      }
      > p {
        font-size: 12px;
      }
      > a {
        font-size: 8px;
      }
      span {
        display: none;
      }
    }
  }
`;

const Notice = ({ header, content, link }) => {
  return (
    <div className="notice">
      <h1>{header}</h1>
      <p className="line-clamp">{content}</p>
      <a href={link}>
        <span>รายละเอียด</span>เพิ่มเติม
      </a>
    </div>
  );
};

const Work = () => {
  const [page, setPage] = useState(1);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setPage((v) => (v >= 3 ? 1 : v + 1));
    }, delay * 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <Container id="works">
      <div className="">
        <h2>ผลงาน</h2>
      </div>
      <p className="content">ตัวอย่างผลงานที่ร่วมพัฒนากับทีมงานที่ผ่านมา</p>
      <div className="underline" />
      <Carousel className="container">
        <input type="radio" name="slider" id="item-1" checked={page === 1} />
        <input type="radio" name="slider" id="item-2" checked={page === 2} />
        <input type="radio" name="slider" id="item-3" checked={page === 3} />
        <div className="cards">
          <label
            className="card"
            for="item-1"
            id="song-1"
            onClick={() => {
              setPage(1);
            }}
          >
            <img
              // src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
              src="https://www.borntodev.com/wp-content/uploads/2019/01/pexels-photo-1181275-3.jpeg"
              alt="song"
            />
            <Notice
              header={
                <>
                  <span>เริ่มต้น</span> Arduino <span>ระเบิดไอเดีย Maker</span>
                </>
              }
              content={
                <>
                  เรียนรู้ และเข้าใจในโมดูลเซ็นเซอร์
                  <br />
                  เพื่อพัฒนาผลงานอย่างเต็มประสิทธิภาพ
                </>
              }
              link="/gallery"
            />
          </label>
          <label
            className="card"
            for="item-2"
            id="song-2"
            onClick={() => {
              setPage(2);
            }}
          >
            <img
              // src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
              src="https://www.borntodev.com/wp-content/uploads/2018/11/pexels-photo-1438081.jpeg"
              alt="song"
            />
            <Notice
              header={
                <>
                  <span>เส้นทางเข้าสู่</span>นักพัฒนาขั้นสุด
                </>
              }
              content={
                <>
                  หลักสูตรพัฒนาสำหรับ developer
                  <br />
                  ทำให้คุณพัฒนาได้อย่างต่อเนื่อง
                </>
              }
              link="/gallery"
            />
          </label>
          <label
            className="card"
            for="item-3"
            id="song-3"
            onClick={() => {
              setPage(3);
            }}
          >
            <img
              // src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              src="https://www.borntodev.com/wp-content/uploads/2020/04/helloquence-5fNmWej4tAA-unsplash-1.jpg"
              alt="song"
            />
            <Notice
              header={<>ครบทุกพื้นฐานภาษา</>}
              content={
                <>
                  ทำให้คุณรู้สึกสนุก และเข้าใจการเขียนเชิงโปรแกรม
                  <span>
                    <br />
                    ภายในหนึ่งเดือน
                  </span>
                </>
              }
              link="/gallery"
            />
          </label>
        </div>
      </Carousel>
    </Container>
  );
};

export default Work;
