import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronUp,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./friday.module.css";
import { Link } from "react-router-dom";

const Cards = ({ title, img }) => {
  return (
    <div className={styles.cards}>
      <div className={styles.cardsImage}>
        <img src={img} alt="" />
      </div>
      <div className={styles.cardsText}>
        <h3>{title}</h3>
        <p>
          Donec vel tempus felis, a eleifend felis. Vestibulum imperdiet
          bibendum volutpat.
        </p>
      </div>
    </div>
  );
};

const FridayTemplate = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>
            PROJECTMAN
            <span>
              <FontAwesomeIcon icon={faChevronUp} />
            </span>
          </h1>
        </div>
        <ul>
          <li>Package</li>
          <li>About Us</li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </header>
      <div className={styles.body}>
        <div className={styles.intro}>
          <div className={styles.introText}>
            <div className={styles.introLogo}>
              <h1>
                PROJECTMAN
                <span>
                  <FontAwesomeIcon icon={faChevronUp} />
                </span>
              </h1>
              <h3>Improve to the best</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Mauris commodo velit at justo lobortis vulputate.
              <br />
              Maecenas ornare augue non massa lacinia,
              <br />
              et elementum purus ullamcorper.
            </p>
            <Link to="/">
              <button>Let's start</button>
            </Link>
          </div>
          <div className={styles.introImage}>
            <img
              src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
            />
          </div>
        </div>
        <div className={styles.service}>
          <Cards
            title={"Donec vel tempus"}
            img={
              "https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            }
          />
          <Cards
            title={"Nunc ornare quam"}
            img={
              "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            }
          />
          <Cards
            title={"Cras vestibulum"}
            img={
              "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
          />
          <Cards
            title={"Nunc luctus odio enim"}
            img={
              "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
          />
        </div>
        <div className={styles.youtube}>
          <div>
            <iframe
              //   width="1000"
              //   height="600"
              src="https://www.youtube.com/embed/gipuoHGMw_Q?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
        <div className={styles.contact}>
          <h1>Contact Us</h1>
          <p>
            Etiam tristique venenatis augue vitae blandit. Integer sed orci
            nibh. Nunc luctus odio enim, nec accumsan quam fermentum vitae. In
            molestie nulla arcu, quis gravida leo tristique a.
          </p>
          <div className={styles.contactText}>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    color="rgb(95, 46, 234)"
                  />
                </span>
                <label>
                  taciti sociosqu ad litora torquent per conubia nostra.
                </label>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} color="rgb(95, 46, 234)" />
                </span>
                <label>torquent per conubia nostra.</label>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} color="rgb(95, 46, 234)" />
                </span>
                <label>accumsan felis eget nunc bibendum.</label>
              </li>
            </ul>
            <div className={styles.contactImage}>
              <img
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerItem}>
          <div className={styles.footerText}>
            @ 2019 PJM Corporation Group.
            <br /> All rights reserved.
          </div>
          <div className={styles.footerIcons}>
            <div className={styles.footerIcon}>
              <FontAwesomeIcon icon={faFacebookF} color={"rgb(95, 46, 234)"} />
            </div>
            <div className={styles.footerIcon}>
              <FontAwesomeIcon icon={faInstagram} color={"rgb(95, 46, 234)"} />
            </div>
            <div className={styles.footerIcon}>
              <FontAwesomeIcon icon={faTwitter} color={"rgb(95, 46, 234)"} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FridayTemplate;
