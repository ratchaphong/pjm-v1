import styles from "./agent.module.css";
import bbom from "../assets/images/bbom2.jpg";
import bbom2 from "../assets/images/bbom.jpg";
import ratcha from "../assets/images/rratcha.jpg";
import tharin from "../assets/images/ttharin.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = ({ img, name }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgBx}>
        <img src={img} alt="" />
      </div>
      <div className={styles.contentBx}>
        <div className={styles.details}>
          <h2 className={styles.name}>
            {name}
            <br />
            <span>Hipster</span>
          </h2>
          <div className={styles.data}>
            <h3>
              342 <span>Posts</span>
            </h3>
            <h3>
              120k <span>Followers</span>
            </h3>
            <h3>
              50k <span>Following</span>
            </h3>
          </div>
          <div className={styles.actionBtn}>
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgentTemplate = () => {
  return (
    <div className={styles.container}>
      <header>
        <div>logo...</div>
        <div className={styles.signup}>
          <div>SignUp</div>
          <div>|</div>
          <div>
            <div>SignIn</div>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </header>
      <section className={styles.main}>
        <div className={styles.banner}>
          <img src={bbom} alt="" />
          <div className={styles.bannerText}>
            Hipster : Agent 47
            <Link to="/">
              <button type="button">welcome</button>
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <h2>Benefits</h2>
          <div className={styles.benefits}>
            <Card img={bbom2} name="Teeraphat" />
            <Card img={ratcha} name="Ratchaphong" />
            <Card img={tharin} name="Tharin" />
          </div>
          <h2>What dose hipster mean ?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            iaculis, urna ac accumsan eleifend, ex quam finibus dolor, sit amet
            blandit mauris arcu sit amet nisi. Sed tempus felis in orci porta
            rhoncus. Suspendisse laoreet porttitor tristique. Pellentesque
            tempor, odio in malesuada rutrum, diam mi efficitur sem, quis auctor
            ipsum ante eget nunc. Quisque pellentesque bibendum quam, in
            fringilla orci luctus quis. Vivamus interdum, ex eu sodales
            vestibulum, nisl tellus blandit mi, et luctus quam quam sed purus.
            Mauris mollis in nulla a tincidunt. Etiam tristique mauris ac lacus
            interdum elementum. Etiam et dolor lacinia, sagittis diam eget,
            hendrerit lacus. Aenean eu pharetra enim, ut malesuada elit. Proin
            aliquet tincidunt tempus. Donec non mauris tincidunt, rutrum metus
            vel, gravida velit.
          </p>
          <div className={styles.underline} />
          <div className={styles.questions}>
            <h2>Question</h2>
            <div className={styles.answer}>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
              <p>
                Proin iaculis, urna ac accumsan eleifend, ex quam finibus dolor,
                sit amet blandit mauris arcu sit amet nisi. Sed tempus felis in
                orci porta rhoncus. Suspendisse laoreet porttitor tristique.
                Pellentesque tempor, odio in malesuada rutrum, diam mi efficitur
                sem, quis auctor ipsum ante eget nunc. Quisque pellentesque
                bibendum quam, in fringilla orci luctus quis. Vivamus interdum,
                ex eu sodales vestibulum, nisl tellus blandit mi, et luctus quam
                quam sed purus. Mauris mollis in nulla a tincidunt. Etiam
                tristique mauris ac lacus interdum elementum. Etiam et dolor
                lacinia, sagittis diam eget, hendrerit lacus. Aenean eu pharetra
                enim, ut malesuada elit. Proin aliquet tincidunt tempus. Donec
                non mauris tincidunt, rutrum metus vel, gravida velit.
              </p>
            </div>
            <div className={styles.answer}>
              <b>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </b>
              <p>
                Sed in mi ac eros dignissim auctor. Morbi mauris mi, convallis
                sed felis id, tincidunt porta velit. Nunc accumsan scelerisque
                auctor. Vestibulum turpis mauris, vestibulum ultrices arcu in,
                sodales porta risus. In consequat est tincidunt ligula
                consectetur, sit amet luctus tellus luctus. Aenean et porttitor
                mauris. Morbi at diam efficitur, commodo diam quis, molestie
                est. Maecenas accumsan nisi egestas velit efficitur efficitur.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <div>Copyright @ 2020 PROJECTMAN</div>
          <div>
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgentTemplate;
