import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = styled.div`
  font-family: "Kanit", sans-serif;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 0;
  color: #f7f7f7;
  background-color: #00000040;
  backdrop-filter: blur(1px);
  transition: height 0.5s;
  display: flex;
  justify-content: space-between;
  padding: 0 4%;
  box-sizing: border-box;
  &.active {
    height: 8%;
  }
  .icon {
    align-self: center;
    /* opacity: ${(props) => (props.isSticky ? "1" : "0")}; */
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 20px;
    transition: all 0.3s;
    &:hover {
      font-size: 24px;
      cursor: pointer;
    }
  }
  .humberger {
    display: none;
    align-self: center;
    opacity: ${(props) => (props.isSticky ? "1" : "0")};
    transition: opacity 0.3s;
    font-size: 20px;
    transition: all 0.3s;
    &:hover {
      font-size: 24px;
      cursor: pointer;
    }
  }
  .tabs {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: ${(props) => (props.isSticky ? "1" : "0")};
    transition: opacity 0.3s;
  }
  .tabs .menu {
    font-size: 16px;
    letter-spacing: 1px;
    transition: all 0.3s;
    text-decoration: none;
    &:hover {
      font-weight: bold;
      font-size: 20px;
      color: #f6c90e;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    .icon {
      display: none;
    }
    .humberger {
      display: flex;
    }
    .tab {
      opacity: 0;
    }
  }
`;

const Hamberger = styled.nav`
  /* font-family: "Klee One", cursive; */
  font-family: "Kanit", sans-serif;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #000000;
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .close {
    position: absolute;
    right: 8%;
    top: 2%;
    font-size: 48px;
  }
  .close:hover {
    color: #ccc;
    font-weight: bold;
    cursor: pointer;
  }
  .menu {
    color: #f1f1f1;
    font-size: 36px;
    margin-bottom: 32px;
    transition: all 0.8s;
  }
  .menu:hover {
    color: #ccc;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Navigator = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHumberger, setIsHumberger] = useState(false);

  useEffect(() => {
    function tracking() {
      setIsSticky(window.scrollY > 600);
    }
    window.addEventListener("scroll", tracking);
    return () => window.removeEventListener("scroll", tracking);
  }, []);

  const onClose = () => {
    setIsHumberger(!isHumberger);
  };

  return (
    <>
      <Navbar className={isSticky ? "active" : ""} isSticky={isSticky}>
        <div className="tabs">
          <div className="menu">
            <LinkScroll to="home" smooth={true}>
              หน้าแรก
            </LinkScroll>
          </div>
          <div className="menu">
            <LinkScroll to="works" smooth={true} offset={-64}>
              ผลงาน
            </LinkScroll>
          </div>
          <div className="menu">
            <LinkScroll to="about" smooth={true} offset={-64}>
              ทักษะ
            </LinkScroll>
          </div>
          <div className="menu">
            <LinkScroll to="team" smooth={true} offset={-64}>
              ทีมงาน
            </LinkScroll>
          </div>
          <div className="menu">
            <LinkScroll to="contact" smooth={true} offset={-64}>
              ติดต่อ
            </LinkScroll>
          </div>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="humberger" onClick={() => setIsHumberger(!isHumberger)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </Navbar>
      {isHumberger && (
        <Hamberger>
          <div className="close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="menu">
            <LinkScroll to="home" smooth={true} onClick={onClose}>
              หน้าแรก
            </LinkScroll>
          </div>
          <div className="menu">
            <LinkScroll to="works" smooth={true} offset={-64} onClick={onClose}>
              ผลงาน
            </LinkScroll>
          </div>
          <div className="menu">
            <LinkScroll to="about" smooth={true} offset={-64} onClick={onClose}>
              ทักษะ
            </LinkScroll>
          </div>
          <div className="menu">
            <LinkScroll to="team" smooth={true} offset={-64} onClick={onClose}>
              ทีมงาน
            </LinkScroll>
          </div>
          <div className="menu">
            <LinkScroll
              to="contact"
              smooth={true}
              offset={-64}
              onClick={onClose}
            >
              ติดต่อ
            </LinkScroll>
          </div>
        </Hamberger>
      )}
    </>
  );
};

export default Navigator;
