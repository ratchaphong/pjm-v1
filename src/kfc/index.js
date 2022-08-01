import styles from "./kfc.module.css";
import bbom from "../assets/images/bbom2.jpg";

import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const KfcTemplate = () => {
  const [page, setPage] = useState(1);
  const [toggle, setToggle] = useState(false);

  const onNext = () => {
    if (page > 2) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  const onPrev = () => {
    if (page < 2) {
      setPage(3);
    } else {
      setPage(page - 1);
    }
  };

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.container}>
      <section className={styles.main}>
        <header>
          <a href="/">
            <img src={bbom} className={styles.logo} alt="" />
          </a>
          <div
            className={
              toggle ? cx(styles.toggle, styles.toggleActive) : styles.toggle
            }
            onClick={onToggle}
          ></div>
          <ul
            className={
              toggle
                ? cx(styles.navigation, styles.navigationActive)
                : styles.navigation
            }
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contacts</a>
            </li>
          </ul>
        </header>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>
              Its Finger
              <br />
              Licking <span>Good.</span>
            </h2>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet
              erat nullam tortor quis elit lacus blandit vitae. Nostra dapibus
              bibendum; curae magnis commodo metus vestibulum tristique.
              Tristique volutpat consectetur congue lorem pharetra habitant.
              Sodales gravida egestas venenatis dignissim molestie cursus porta.
              Massa lacus pulvinar aliquam mi tristique.
            </p>
            <a href="/" className={styles.btn}>
              Order Now
            </a>
          </div>
          <div className={styles.slider}>
            <div
              className={
                page === 1
                  ? cx(styles.slides, styles.sliderActive)
                  : styles.slides
              }
            >
              <img
                src={
                  "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
                alt=""
              />
            </div>
            <div
              className={
                page === 2
                  ? cx(styles.slides, styles.sliderActive)
                  : styles.slides
              }
            >
              <img
                src={
                  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
                alt=""
              />
            </div>
            <div
              className={
                page === 3
                  ? cx(styles.slides, styles.sliderActive)
                  : styles.slides
              }
            >
              <img
                src={
                  "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80"
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <ul className={styles.sci}>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
          <div className={styles.prevNext}>
            <p>Always Fresh</p>
            <span className={styles.prev} onClick={onPrev}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <span className={styles.next} onClick={onNext}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default KfcTemplate;
