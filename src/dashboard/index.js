import enhancer from "./backoffice.compose";
import styles from "./backoffice.module.css";
import bbom from "../assets/images/bbom.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faBarChart,
  faBars,
  faCog,
  faFile,
  faMoon,
  faPeopleGroup,
  faShoppingCart,
  faSignOut,
  faSun,
  faTableCells,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Customer from "./customer";
import Setting from "./setting";
import Dashboard from "./dashboard";
import Product from "./product";
import cx from "classnames";

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
      <div className={styles.left}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className={styles.info}>
          <h3>{title}</h3>
          <small className={styles.infoDarkText}>{time}</small>
        </div>
      </div>
      <div className={styles.right}>
        <h5 className={percent > 0 ? styles.successText : styles.errorText}>
          {percent}%
        </h5>
        <h3>{people}</h3>
      </div>
    </div>
  );
};

const Sidebar = ({
  onClick = () => {},
  signout = () => {},
  isState = "",
  setIsState = () => {},
}) => {
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
        <li
          className={isState === "dashboard" ? styles.active : {}}
          onClick={() => {
            setIsState("dashboard");
          }}
        >
          <span>
            <FontAwesomeIcon icon={faTableCells} />
          </span>
          <h3>Dashboard</h3>
        </li>
        <li
          className={isState === "customer" ? styles.active : {}}
          onClick={() => {
            setIsState("customer");
          }}
        >
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h3>Customer</h3>
        </li>
        <li className={styles.inactive}>
          <span>
            <FontAwesomeIcon icon={faBarChart} />
          </span>
          <h3>Analytics</h3>
        </li>
        <li className={styles.inactive}>
          <span>
            <FontAwesomeIcon icon={faFile} />
          </span>
          <h3>Reports</h3>
        </li>
        <li
          className={isState === "setting" ? styles.active : {}}
          onClick={() => {
            setIsState("setting");
          }}
        >
          <span>
            <FontAwesomeIcon icon={faCog} />
          </span>
          <h3>Setting</h3>
        </li>
        <li onClick={signout}>
          <span>
            <FontAwesomeIcon icon={faSignOut} />
          </span>
          <h3>Logout</h3>
        </li>
      </ul>
    </>
  );
};

const BackOffice = (props) => {
  const {
    onChange,
    onClick,
    isHumberger,
    signout,
    users,
    user,
    isState,
    setIsState,
    onSubmitSetting,
    customers,
    customer,
    selectedCustomer,
    onSubmitCustomer,
    onDeleteCustomer,
    updateTime,
    isAddCustomer,
    setIsAddCustomer,
    onAddCustomer,
    products,
    product,
    selectedProduct,
    onDeleteProduct,
    isAddProduct,
    setIsAddProduct,
    onSubmitProduct,
    onAddProduct,
  } = props;
  return (
    <div className={styles.container}>
      <aside>
        <div className={styles.humberger} onClick={onClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div
          className={
            isHumberger ? styles.fixed : cx(styles.fixed, styles.reverse)
          }
        >
          <Sidebar
            onClick={onClick}
            signout={signout}
            isState={isState}
            setIsState={setIsState}
          />
        </div>
        <Sidebar signout={signout} isState={isState} setIsState={setIsState} />
      </aside>
      <main>
        {isState === "dashboard" && (
          <Dashboard
            onChange={onChange}
            products={products}
            selectedProduct={selectedProduct}
            setIsState={setIsState}
          />
        )}
        {isState === "customer" && (
          <Customer
            customers={customers}
            customer={customer}
            selectedCustomer={selectedCustomer}
            onSubmitCustomer={onSubmitCustomer}
            onDeleteCustomer={onDeleteCustomer}
            isAddCustomer={isAddCustomer}
            setIsAddCustomer={setIsAddCustomer}
            onAddCustomer={onAddCustomer}
          />
        )}
        {isState === "setting" && (
          <Setting data={user} onSubmitSetting={onSubmitSetting} />
        )}
        {isState === "product" && (
          <Product
            products={products}
            product={product}
            selectedProduct={selectedProduct}
            onSubmitProduct={onSubmitProduct}
            onDeleteProduct={onDeleteProduct}
            isAddProduct={isAddProduct}
            setIsAddProduct={setIsAddProduct}
            onAddProduct={onAddProduct}
          />
        )}
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
                Hey, <b>{user?.firstName || "Daniel"}</b>
              </p>
              <small className={styles.textMuted}>Admin</small>
            </div>
            <div className={styles.profilePhoto}>
              <img src={user?.img || bbom} alt="" />
            </div>
          </div>
        </div>
        {customers && customers.length > 0 && (
          <div className={styles.recentUpdates}>
            <h2>Recent Updates</h2>
            <div className={styles.updates}>
              {[...customers]
                .reverse()
                .slice(0, 2)
                .map((customer, i) => (
                  <Update
                    index={i}
                    name={`${customer.firstName} ${customer.lastName}`}
                    content=" have registered."
                    time={updateTime(customer.createdAt)}
                  />
                ))}
            </div>
          </div>
        )}
        <div className={styles.salesAnalytics}>
          <h2>Recent Updates</h2>
          <Item
            title="NEW ORDERS"
            icon={faShoppingCart}
            time="Last 24 Hours"
            percent={7}
            people={products ? products.length : 0}
          />
          <Item
            title="NEW USER"
            icon={faUser}
            time="Last 24 Hours"
            percent={-9}
            people={users ? users.length : 0}
          />
          <Item
            title="NEW CUSTOMER"
            icon={faPeopleGroup}
            time="Last 24 Hours"
            percent={-8}
            people={customers ? customers.length : 0}
          />
          <div
            className={styles.addProduct}
            onClick={() => {
              setIsState("product");
              setIsAddProduct(true);
            }}
          >
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

export default enhancer(BackOffice);
