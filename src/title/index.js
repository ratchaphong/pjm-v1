import styles from "./title.module.css";

function Title() {
  return (
    <div className={styles.container}>
      <ul>
        <li style={{ zIndex: 6 }}>
          <a href="/home">Home</a>
        </li>
        <li style={{ zIndex: 5 }}>
          <a href="/about">About</a>
        </li>
        <li style={{ zIndex: 4 }}>
          <a href="/service">Service</a>
        </li>
        <li style={{ zIndex: 3 }}>
          <a href="/portfolio">Portfolio</a>
        </li>
      </ul>
    </div>
  );
}

export default Title;
