// import styles from "./notfound.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const textFly = keyframes`
  /* from {
    left: -100%;
  }
  to {
    left: 0;
  } */
   0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
`;

const fly = keyframes` 
  from {
    /* transform: translateX(-100vw); */
    left: -200%;
  }
  to {
    /* transform: translateX(65vw); */
    left: 60%;
  }
`;

const flyMobile = keyframes` 
  from {
    left: -200%;
  }
  to {
    left: 50%;
  }
`;

const Image = styled.div`
  position: absolute;
  top: 35%;
  left: 60%;
  width: 400px;
  height: 300px;
  /* transform: translateX(65vw); */
  animation: ${fly} 2s linear 0s 1 normal;
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
    opacity: 0.5;
    animation: ${flyMobile} 2s linear 0s 1 normal;
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
  animation: ${textFly} 2s ease-out 0s 1 normal;
  a {
    text-decoration: none;
  }
`;

const Error = styled.h1`
  font-size: 96px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 72px;
  }
  @media (max-width: 768px) {
    font-size: 64px;
  }
`;

const SmallText = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
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
  margin: 24px 0;
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

const Text = () => (
  <ContainerText id="cloud-text">
    <Error>ERROR 404</Error>
    <SmallText>page not found</SmallText>
    <Link to="/">
      <CustomButton type="button">back to home</CustomButton>
    </Link>
  </ContainerText>
);

const NotFound = () => {
  useEffect(() => {
    const text = document.getElementById("cloud-text");
    const ricardo = document.getElementById("ricardo");

    const parallax = (e, target, offset) => {
      var x = e.clientX / offset;
      var y = e.clientY / offset;
      if (target.id === "ricardo" && window.innerWidth > 768) {
        target.style.transform = `translateX(${x}px) translateY(${y}px)`;
      } else {
        target.style.transform = `translateX(${x}px) translateY(${y}px)`;
      }
    };

    setTimeout(() => {
      window.addEventListener("mousemove", (e) => {
        parallax(e, ricardo, 50);
        parallax(e, text, 500);
      });
    }, 2000);
    return () => window.removeEventListener("mousemove", parallax);
  }, []);

  return (
    <Container>
      <Background>
        <Text />
        <Image id="ricardo">
          <img
            src={
              "http://pa1.narvii.com/7311/ccca80b95301292363706e134309d28e85805a33r1-480-270_00.gif"
            }
            alt="ricardo"
          />
        </Image>
      </Background>
    </Container>
  );
};

export default NotFound;
