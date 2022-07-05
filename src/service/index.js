import styles from "./service.module.css";
import cx from "classnames";
import Loading from "../loading";
import { useState } from "react";

function Service() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    return setIsLoading(false);
  }, 1500);

  return (
    <div className={styles.container}>
      {isLoading && <Loading />}
      <div>
        <div className={styles.card}>
          <div className={styles.percent}>
            <div className={cx(styles.dot, styles.js)}></div>
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{
                  stroke: "#04fc43",
                  strokeDashoffset: "calc(440 - (440 * 85) / 100)",
                }}
              />
            </svg>
            <div className={styles.number}>
              <h2>
                85<span>%</span>
              </h2>
              <p>Javascript</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.percent}>
            <div className={cx(styles.dot, styles.jquery)}></div>
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{
                  stroke: "#fee800",
                  strokeDashoffset: "calc(440 - (440 * 19) / 100)",
                }}
              />
            </svg>
            <div className={styles.number}>
              <h2>
                19<span>%</span>
              </h2>
              <p>JQuery</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.percent}>
            <div className={cx(styles.dot, styles.html)}></div>
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{
                  stroke: "#ff00be",
                  strokeDashoffset: "calc(440 - (440 * 65) / 100)",
                }}
              />
            </svg>
            <div className={styles.number}>
              <h2>
                65<span>%</span>
              </h2>
              <p>Html</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.percent}>
            <div className={cx(styles.dot, styles.css)}></div>
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{
                  stroke: "#06ccff",
                  strokeDashoffset: "calc(440 - (440 * 45) / 100)",
                }}
              />
            </svg>
            <div className={styles.number}>
              <h2>
                45<span>%</span>
              </h2>
              <p>Css</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
