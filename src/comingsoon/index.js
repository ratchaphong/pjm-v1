// import styles from "./notfound.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const countDownDate = new Date("01/01/2023").getTime();

const textFly = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const fadeIn = keyframes` 
  0%{
    filter: blur(16px);
    opacity: 0;
  }
  90%{
    filter: blur(8px);
    opacity: 0.5;
  }
  100%{
    filter: blur(0px);
    opacity: 1;
  }
`;

const fadeInMobile = keyframes` 
  0%{
    filter: blur(16px);
    opacity: 0;
  }
  90%{
    filter: blur(8px);
    opacity: 0.2;
  }
  100%{
    filter: blur(0px);
    opacity: 0.3;
  }
`;

const Image = styled.div`
  position: absolute;
  top: 35%;
  left: 60%;
  width: 400px;
  height: 300px;
  animation: ${fadeIn} 6s ease-in;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1024px) {
    width: 300px;
    height: 250px;
  }
  @media (max-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.3;
    animation: ${fadeInMobile} 6s ease-in;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Oswald", sans-serif;
  color: #f1f1f1;
`;

const Background = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000000;
`;

const ContainerText = styled.div`
  position: absolute;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 670px;
  height: 100%;
  left: 5%;
  animation: ${textFly} 2s ease-out;
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    left: 0%;
  }
`;

const Error = styled.h1`
  font-size: 72px;
  font-weight: bold;
  text-align: center;
  > span:nth-child(2) {
    color: #f6c90e;
  }
  @media (max-width: 1024px) {
    font-size: 72px;
  }
  @media (max-width: 768px) {
    font-size: 48px;
    text-transform: uppercase;
    > span {
      display: none;
    }
    > span:nth-child(2) {
      display: inline;
      color: #f6c90e;
    }
  }
`;

const SmallText = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  border-radius: 24px;
  border: unset;
  outline: none;
  color: #393d43;
  background-color: #f6c90e;
  font-weight: bold;
  padding: 16px 24px;
  font-size: 16px;
  border-radius: 12px;
  text-transform: uppercase;
  transition: opacity 0.3s ease;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Timer = styled.div`
  display: flex;
  gap: 36px;
  margin: 24px 0;
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Text = () => (
  <ContainerText id="cloud-text">
    <Error>
      <span>We're </span>
      <span>coming</span> soon<span>.</span>
    </Error>
    <SmallText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et gravida
      neque, id sodales metus. Etiam faucibus egestas quam, auctor pellentesque
      velit aliquam eget. Fusce nec felis in augue ullamcorper molestie et nec
      lacus.
    </SmallText>
    <Timer>
      <div>
        <h1 id="days">0</h1>
        <p>Days</p>
      </div>
      <div>
        <h1 id="hours">0</h1>
        <p>Hours</p>
      </div>
      <div>
        <h1 id="minutes">0</h1>
        <p>Minutes</p>
      </div>
      <div>
        <h1 id="seconds">0</h1>
        <p>Seconds</p>
      </div>
    </Timer>
    <Link to="/">
      <CustomButton type="button">back to home</CustomButton>
    </Link>
  </ContainerText>
);

const NotFound = () => {
  function myTimer() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (distance < 0) {
      clearInterval(myTimer);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    }
  }

  useEffect(() => {
    const myInterval = setInterval(myTimer, 1000);
    return () => {
      clearInterval(myInterval);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Background>
        <Text />
        <Image id="ricardo">
          <img
            src={"https://c.tenor.com/8eYVSq_gYIsAAAAC/gachi.gif"}
            alt="gachi"
          />
        </Image>
      </Background>
    </Container>
  );
};

export default NotFound;
