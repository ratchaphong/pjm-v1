import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faListAlt,
  faMapMarkedAlt,
  faPhoneAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./life.module.css";
import logo_review from "../assets/images/logo_review.png";
import { Link } from "react-router-dom";

const LifeTemplate = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          {/* <img src={logo_review} alt="" /> */}
          <h1>PROJECTMAN</h1>
          <small>
            <span></span>SOFTWARE HOUSE<span></span>
          </small>
        </div>
      </header>
      <div className={styles.body}>
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <h1>PROJECTMAN INSURE</h1>
            <Link to={"/"}>
              <button>
                Lorem ipsum dolor
                <FontAwesomeIcon icon={faSearch} color={"#ffffff"} />
              </button>
            </Link>
            <button disabled>
              Consectetur adipiscing
              <FontAwesomeIcon icon={faListAlt} color={"#ffffff"} />
            </button>
          </div>
        </div>
        <div className={styles.aboutUs}>
          <div className={styles.aboutUsText}>
            <h2>About Us</h2>
            <p>
              Vivamus venenatis suscipit nulla, a facilisis ante venenatis sed.
              Curabitur rhoncus ex ac orci pellentesque commodo. Vivamus
              consequat erat urna, non aliquet metus lobortis id. Cras porta
              ante elit, et sodales turpis accumsan non. Duis sem neque, sodales
              non dui id, tincidunt dignissim metus. Curabitur posuere tortor
              eget sapien interdum, et malesuada nulla fermentum. Praesent sed
              cursus nunc. Donec sodales nec erat eu tempor. Donec semper, neque
              vitae congue vestibulum, elit urna ultrices turpis, a vestibulum
              justo neque porta mauris. Ut quam tellus, placerat a nulla at,
              imperdiet luctus lacus.
            </p>
          </div>
          <div className={styles.image}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              alt=""
            />
          </div>
        </div>
        <div className={styles.alliance}>
          <h2>Alliance</h2>
          <div className={styles.allianceItem}>
            <img
              src="https://images.unsplash.com/photo-1579389082289-3d6922d506c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1554902843-260acd0993f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1455875836392-d7b9747e584c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>
        <div className={styles.contactUs}>
          <h2>Contact Us</h2>
          <div className={styles.contactUs}>
            <div className={styles.contactUsItem}>
              <div className={styles.contactUsIcon}>
                <FontAwesomeIcon icon={faMapMarkedAlt} color={"#ffffff"} />
              </div>
              <div>
                Vivamus venenatis suscipit nulla, a facilisis ante venenatis
                sed.
              </div>
            </div>
            <div className={styles.contactUsItem}>
              <div className={styles.contactUsIcon}>
                <FontAwesomeIcon icon={faPhoneAlt} color={"#ffffff"} />
              </div>
              <div>Vivamus venenatis suscipit nulla,</div>
            </div>
            <div className={styles.contactUsItem}>
              <div className={styles.contactUsIcon}>
                <FontAwesomeIcon icon={faEnvelope} color={"#ffffff"} />
              </div>
              <div>Curabitur rhoncus ex ac orci pellentesque commodo.</div>
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
              <FontAwesomeIcon icon={faFacebookF} color={"#333"} />
            </div>
            <div className={styles.footerIcon}>
              <FontAwesomeIcon icon={faInstagram} color={"#333"} />
            </div>
            <div className={styles.footerIcon}>
              <FontAwesomeIcon icon={faTwitter} color={"#333"} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LifeTemplate;
