import styles from "./loading.module.css";

function Loading() {
  return (
    <div className={styles.container}>
      <svg className={styles.loading}>
        <circle cx={70} cy={70} r={70} />
      </svg>
    </div>
  );
}

export default Loading;
