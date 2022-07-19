import styles from "./kfc.module.css";
import bbom from "../assets/images/bbom2.jpg";
import ratcha from "../assets/images/rratcha.jpg";
import tharin from "../assets/images/ttharin.jpg";

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
              <img src={bbom} alt="" />
            </div>
            <div
              className={
                page === 2
                  ? cx(styles.slides, styles.sliderActive)
                  : styles.slides
              }
            >
              <img src={ratcha} alt="" />
            </div>
            <div
              className={
                page === 3
                  ? cx(styles.slides, styles.sliderActive)
                  : styles.slides
              }
            >
              <img src={tharin} alt="" />
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
