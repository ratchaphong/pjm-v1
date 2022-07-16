import enhancer from "./dashboard.compose";
import styles from "./dashboard.module.css";
import bbom from "../assets/images/bbom.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faBarChart,
  faBars,
  faBarsProgress,
  faCartPlus,
  faCog,
  faFile,
  faMoon,
  faShapes,
  faShoppingCart,
  faSignOut,
  faSun,
  faTableCells,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Sales = ({ name, className, icon, total, number }) => {
  return (
    <div className={className}>
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <div className={styles.middle}>
        <div className={styles.left}>
          <h3>Total {name}</h3>
          <h1>$ {total}</h1>
        </div>
        <div className={styles.progress}>
          <svg>
            <circle cx={38} cy={38} r={36}></circle>
          </svg>
          <div className={styles.number}>
            <p className={styles.infoDarkText}>{number} %</p>
          </div>
        </div>
      </div>
      <small className={styles.infoDarkText}>Last 24 Hours</small>
    </div>
  );
};

const Update = ({ name, content, time }) => {
  return (
    <div className={styles.update}>
      <div className={styles.profilePhoto}>
        <img src={bbom} alt="" />
      </div>
      <div className={styles.message}>
        <p className={styles.infoDarkText}>
          <b className={styles.infoText}>{name}</b>
          {content}
        </p>
        <small className={styles.infoDarkText}>{time}</small>
      </div>
    </div>
  );
};

const Item = ({ title, icon, time, percent, people }) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.right}>
        <div className={styles.info}>
          <h3>{title}</h3>
          <small className={styles.infoDarkText}>{time}</small>
        </div>
        <h5 className={percent > 0 ? styles.successText : styles.errorText}>
          {percent}%
        </h5>
        <h3>{people}</h3>
      </div>
    </div>
  );
};

const Sidebar = ({ onClick = () => {} }) => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.logo}>
          {/* <img src={bbom} alt="" /> */}
          <h2>
            PROJECT<span>MAN</span>
          </h2>
          <small>community</small>
        </div>
        <div className={styles.close} onClick={onClick}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
      <ul className={styles.sidebar}>
        <li className={styles.active}>
          <span>
            <FontAwesomeIcon icon={faTableCells} />
          </span>
          <h3>Dashboard</h3>
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h3>Customer</h3>
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faBarChart} />
          </span>
          <h3>Analytics</h3>
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faFile} />
          </span>
          <h3>Reports</h3>
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faCog} />
          </span>
          <h3>Setting</h3>
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faSignOut} />
          </span>
          <h3>Logout</h3>
        </li>
      </ul>
    </>
  );
};

const Dashboard = (props) => {
  const { onChange } = props;
  const [isHumberger, setIsHamburger] = useState(false);
  const onClick = () => {
    setIsHamburger(!isHumberger);
  };
  return (
    <div className={styles.container}>
      <aside>
        <div className={styles.humberger} onClick={onClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {isHumberger && (
          <div className={styles.fixed}>
            <Sidebar onClick={onClick} />
          </div>
        )}
        <Sidebar />
      </aside>
      <main>
        <section id="dashboard">
          <h1>Dashboard</h1>
          <div className={styles.date}>
            <input
              type={"date"}
              onChange={(e) => {
                onChange({ date: e.target.value });
              }}
            />
          </div>
          <div className={styles.insights}>
            <Sales
              name={"Sales"}
              className={styles.sales}
              icon={faBarChart}
              total={"25,514"}
              number={"80"}
            />
            <Sales
              name={"Expenses"}
              className={styles.expenses}
              icon={faBarsProgress}
              total={"15,514"}
              number={"30"}
            />
            <Sales
              name={"Income"}
              className={styles.income}
              icon={faShapes}
              total={"5,514"}
              number={"19"}
            />
          </div>
          <div className={styles.recentOrder}>
            <h2>Recent Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Number</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pending</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pending</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pending</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pending</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pending</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pending</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pending</td>
                  <td>Details</td>
                </tr>
              </tbody>
            </table>
            <small>Show All</small>
          </div>
        </section>
      </main>
      <div className={styles.right}>
        <div className={styles.top}>
          <button type="button" id="menu-btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={styles.themeToggler}>
            <span className={styles.themeTogglerActive}>
              <FontAwesomeIcon icon={faSun} />
            </span>
            <span>
              <FontAwesomeIcon icon={faMoon} />
            </span>
          </div>
          <div className={styles.profile}>
            <div className={styles.info}>
              <p>
                Hey, <b>Daniel</b>
              </p>
              <small className={styles.textMuted}>Admin</small>
            </div>
            <div className={styles.profilePhoto}>
              <img src={bbom} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.recentUpdates}>
          <h2>Recent Updates</h2>
          <div className={styles.updates}>
            <Update
              name="Mike Tyson"
              content=" received his order of Night lion tech GPS drone."
              time="2 Minutes Ago"
            />
            <Update
              name="Mike Tyson"
              content=" received his order of Night lion tech GPS drone."
              time="2 Minutes Ago"
            />
          </div>
        </div>
        <div className={styles.salesAnalytics}>
          <h2>Recent Updates</h2>
          <Item
            title="ONLINE ORDERS"
            icon={faShoppingCart}
            time="Last 24 Hours"
            percent={39}
            people="9849"
          />
          <Item
            title="OFFLINE ORDERS"
            icon={faCartPlus}
            time="Last 24 Hours"
            percent={-9}
            people="1849"
          />
          <Item
            title="NEW CUSTOMER"
            icon={faUser}
            time="Last 24 Hours"
            percent={-81}
            people="49"
          />

          <div className={styles.addProduct}>
            <div>
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faAdd} />
              </span>
              <h3>Add Product</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default enhancer(Dashboard);
