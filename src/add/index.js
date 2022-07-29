import styles from "./add.module.css";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmbulance,
  faHeart,
  faMobile,
  faPhone,
  faPlane,
  faSave,
  faStar,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import bbom from "../assets/images/bbom.jpg";
import bbom3 from "../assets/images/bbom2.jpg";
import ratcha from "../assets/images/rratcha.jpg";
import mark from "../assets/images/ttharin.jpg";
import bass from "../assets/images/bbas.jpg";

const slideImages = ["bbom2", "rratcha"];
const delay = 5000;

const Card = ({ name, img }) => {
  return (
    <div className={styles.albumImg}>
      <img src={img} alt="" />
      <div className={styles.albumContent}>
        <div className={styles.albumInfo}>
          <h3>{name}</h3>
          <p>Specialist</p>
        </div>
        <p className={styles.albumText}>Lorem...</p>
      </div>
    </div>
  );
};

const AddTemplate = () => {
  const [state, setState] = useState("recomendation");
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
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <ul className={styles.navigation}>
          <li className={cx(styles.mainNav, styles.navActive)}>Home</li>
          <li className={styles.nav}>
            Promotion
            <ul className={styles.subNav}>
              <li>
                <a href="/">Gallery</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Recommendation</a>
              </li>
            </ul>
          </li>
          <li className={cx(styles.nav, styles.navInactive)}>Service</li>
          <li className={cx(styles.nav, styles.navInactive)}>Contact</li>
        </ul>
        <div className={styles.login}>
          <span>
            <FontAwesomeIcon icon={faUserCircle} />
          </span>
          <div className={styles.sign}>SignUp</div>
          <div className={styles.sign}>|</div>
          <div className={styles.sign}>Login</div>
        </div>
      </header>
      <div className={styles.body}>
        <div className={styles.photograph}>
          <img src={bbom3} alt="" />
          <img src={ratcha} alt="" />
          <img src={mark} alt="" />
          <img src={bass} alt="" />
        </div>
        <div className={styles.tags}>
          <button
            type="button"
            className={
              state === "recomendation"
                ? cx(styles.tag, styles.tagActive)
                : styles.tag
            }
            onClick={() => {
              setState("recomendation");
            }}
          >
            Recommendation
            <FontAwesomeIcon icon={faStar} />
          </button>
          <button
            type="button"
            className={
              state === "travel" ? cx(styles.tag, styles.tagActive) : styles.tag
            }
            onClick={() => {
              setState("travel");
            }}
          >
            Travel <FontAwesomeIcon icon={faPlane} />
          </button>
          <button
            type="button"
            className={
              state === "accident"
                ? cx(styles.tag, styles.tagActive)
                : styles.tag
            }
            onClick={() => {
              setState("accident");
            }}
          >
            Accident <FontAwesomeIcon icon={faPhone} />
          </button>
          <button type="button" className={styles.tagUnactive}>
            Health <FontAwesomeIcon icon={faHeart} />
          </button>
          <button type="button" className={styles.tagUnactive}>
            Cancer
            <FontAwesomeIcon icon={faAmbulance} />
          </button>
          <button type="button" className={styles.tagUnactive}>
            Mobile
            <FontAwesomeIcon icon={faMobile} />
          </button>
          <button type="button" className={styles.tagUnactive}>
            Saving
            <FontAwesomeIcon icon={faSave} />
          </button>
        </div>
        <div className={styles.cards}>
          <Card name={"Teerapat"} img={bbom} />
          <Card name={"Ratchaphong"} img={ratcha} />
          <Card name={"Tharin"} img={mark} />
          <Card name={"Chaiwut"} img={bass} />
        </div>
        <div className={styles.alliance}>
          <div className={styles.title}>Alliance</div>
          <div className={styles.slideshow}>
            <div
              className={styles.slides}
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {slideImages.map((image, index) => (
                <div className={styles.slide}>
                  <div className={styles.numberText}>
                    {index + 1} / {slideImages.length}
                  </div>
                  <img
                    src={require(`../assets/images/${image}.jpg`)}
                    alt={image}
                  />
                  <div className={styles.nameText}>{image}</div>
                </div>
              ))}
            </div>
            <div className={styles.dots}>
              {slideImages.map((_, idx) => (
                <div
                  key={idx}
                  className={
                    index === idx
                      ? cx(styles.dot, styles.dotActive)
                      : styles.dot
                  }
                  onClick={() => {
                    setIndex(idx);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.extension}>
          <div className={styles.service}>
            <div>
              <b>Home</b>
              <ul>
                <li>
                  <a href="/">Recommendation</a>
                </li>
                <li>
                  <a href="/">Travel</a>
                </li>
                <li>
                  <a href="/">Accident</a>
                </li>
              </ul>
            </div>
            <div>
              <b>Promotion</b>
              <ul>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Question</a>
                </li>
              </ul>
            </div>
            <div>
              <b>Alliance</b>
              <ul>
                <li>
                  <a href="/">PROJECTMAN CO., LTD.</a>
                </li>
                <li>
                  <a href="/">PROJECTMAN LAWYER CO., LTD.</a>
                </li>
                <li>
                  <a href="/">PROJECTMAN CONSTRUCTION CO., LTD.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>© 2020 PROJECTMAN.</div>
      </footer>
    </div>
  );
};

export default AddTemplate;
