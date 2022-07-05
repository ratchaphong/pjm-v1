import styles from "./home.module.css";
import img1 from "../assets/images/golden3.jpg";
import img2 from "../assets/images/golden2.jpg";
import img3 from "../assets/images/golden1.jpg";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  const [state, setState] = useState(true);

  const onClick = () => {
    setState(!state);
  };

  return (
    <div className={styles.container}>
      {state ? (
        <div className={styles.box} onClick={onClick}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      ) : (
        <div className={styles.card} onClick={onClick}>
          <div className={styles.imgBox}>
            <img src={img3} alt="" />
            <img src={img2} alt="" />
          </div>
          <div className={styles.details}>
            <div className={styles.content}>
              <h2>
                Someone Famous
                <br />
                <span>Graphic Designer</span>
              </h2>
              <div className={styles.social}>
                <a href="/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
