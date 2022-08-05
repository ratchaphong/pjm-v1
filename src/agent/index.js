import styles from "./agent.module.css";
import bbom2 from "../assets/images/bbom.jpg";
import ratcha from "../assets/images/rratcha.jpg";
import tharin from "../assets/images/ttharin.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faCog,
  faDollar,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
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

const Item = ({ title, icon, button }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardText}>
        <div className={styles.cardHeader}>
          <h3>{title}</h3>
          <span>
            <FontAwesomeIcon icon={icon} color={"#00529a"} />
          </span>
        </div>
        <p>
          at ultricies dui molestie. Aenean ac mauris at purus sagittis
          pharetra. Etiam maximus urna vitae dui pretium euismod. Vestibulum
          maximus justo at nunc varius, sit amet ultricies turpis porta.
        </p>
      </div>
      {button && <button>Lorem ipsum dolor</button>}
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
          {/* <img src={bbom} alt="" /> */}
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className={styles.bannerText}>
            PROJECTMAN : Hipster
            <Link to="/">
              <button type="button">welcome</button>
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <h2>Privilege</h2>
          <div className={styles.privilege}>
            <Item title="Mauris vestibulum" icon={faShieldAlt} button />
            <Item title="Vestibulum sit amet" icon={faCog} />
            <Item title="Cras vestibulum" icon={faDollar} />
          </div>
          <div className={styles.privilegeImage}>
            <img
              src="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <h2>About Us</h2>
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
