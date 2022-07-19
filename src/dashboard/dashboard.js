import {
  faBarChart,
  faBarsProgress,
  faEdit,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./dashboard.module.css";

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

const Dashboard = ({ onChange, products, selectedProduct, setIsState }) => {
  return (
    <section id="dashboard" className={styles.dashboard}>
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
      {products && products.length > 0 && (
        <div className={styles.recentOrder}>
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Product Number</th>
                <th>Product Name</th>
                <th>Status</th>
                <th>Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={index}>
                  <td>{p.productNumber}</td>
                  <td>{p.productName}</td>
                  <td>{p.status}</td>
                  <td>{p.stock}</td>
                  <td
                    onClick={() => {
                      selectedProduct(p._id);
                      setIsState("product");
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <small
            onClick={() => {
              setIsState("product");
            }}
          >
            Show All
          </small>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
