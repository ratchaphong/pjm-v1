import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import bbom from "../assets/images/ttherapat.jpg";

const Container = styled.section`
  font-family: "Kanit", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #f1f1f1;
  width: 100%;
  height: 100vh;
  gap: 36px;
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
    display: flex;
    flex-direction: column;
    color: #f1f1f1;
    @media (max-width: 768px) {
      width: 80%;
    }
  }
  .wrapper {
    width: 100%;
    max-width: 768px;
    font-size: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (max-width: 1024px) {
      max-width: 600px;
      font-size: 24px;
    }
    @media (max-width: 768px) {
      max-width: 300px;
      font-size: 12px;
    }
  }
  .wrapper .static {
    color: #f1f1f1;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 8px;
    }
  }
  .wrapper .static span {
    animation: blink-space 0.5s infinite;
  }
  .wrapper .dynamic {
    width: fit-content;
  }
  .wrapper .dynamic > div {
    width: fit-content;
    overflow: hidden;
    white-space: nowrap;
    border-right: 4px solid;
    letter-spacing: 1.5px;
    animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
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
  @keyframes blink-space {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #f1f1f1;
    }
  }
`;

const Banner = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === 5 - 1 ? 0 : prevIndex + 1)),
      5000
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Container id="home">
      <div className="image">
        <img src={bbom} className="background" alt="" />
      </div>
      <div className="wrapper">
        <section className="static">
          C : \USERS\PROJECTMAN {`>`} type script.txt<span>_</span>
        </section>
        <section className="dynamic">
          {index === 0 && <div>ผู้ให้บริการรับทำโปรเจคคอมพิวเตอร์</div>}
          {index === 1 && <div>Website (Landing Page, CMS, E-Commerce)</div>}
          {index === 2 && (
            <div>Microcontroller (Arduino, NodeMCU, Raspberry Pi)</div>
          )}
          {index === 3 && <div>iOS และ Android Mobile Application</div>}
          {index === 4 && <div>จบครบในที่เดียว</div>}
        </section>
      </div>
    </Container>
  );
};

export default Banner;
