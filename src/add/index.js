import styles from "./add.module.css";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmbulance,
  faCar,
  faDesktop,
  faHeart,
  faHeartCircleCheck,
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
import { faOldRepublic } from "@fortawesome/free-brands-svg-icons";

// const slideImages = ["bbom2", "rratcha"];
const slideImages = [
  "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];
const delay = 5000;

const Card = ({ name, img }) => {
  return (
    <div className={styles.albumImg}>
      <img src={img} alt="" />
      <div className={styles.albumContent}>
        <div className={styles.albumInfo}>
          <h3>{name}</h3>
          <p>Contrary to popular belief.</p>
        </div>
        <p className={styles.albumText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
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
        {/* <div className={styles.photograph}>
          <img src={bbom3} alt="" />
          <img src={ratcha} alt="" />
          <img src={mark} alt="" />
          <img src={bass} alt="" />
        </div> */}
        <div className={styles.banner}>
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt=""
          />
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
          <button type="button" className={styles.tagUnactive}>
            Life and Health
            <FontAwesomeIcon icon={faHeartCircleCheck} />
          </button>
          <button type="button" className={styles.tagUnactive}>
            Annuity
            <FontAwesomeIcon icon={faDesktop} />
          </button>
          <button type="button" className={styles.tagUnactive}>
            Car Insurance and Act
            <FontAwesomeIcon icon={faCar} />
          </button>
        </div>
        <div className={styles.cards}>
          {/* <Card name={"Teerapat"} img={bbom} />
          <Card name={"Ratchaphong"} img={ratcha} />
          <Card name={"Tharin"} img={mark} />
          <Card name={"Chaiwut"} img={bass} /> */}
          <Card
            name={"Travel"}
            img={
              "https://images.unsplash.com/photo-1581091870598-36ce9bad5c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
          <Card
            name={"Accident"}
            img={
              "https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            }
          />
          <Card
            name={"Health"}
            img={
              "https://images.unsplash.com/photo-1573165265437-f5e267bb3db6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            }
          />
          <Card
            name={"Cancer"}
            img={
              "https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
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
                    // src={require(`../assets/images/${image}.jpg`)}
                    src={image}
                    alt={image}
                  />
                  {/* <div className={styles.nameText}>{image}</div> */}
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
