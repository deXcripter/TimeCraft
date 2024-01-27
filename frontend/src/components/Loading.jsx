import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
}

export default Loading;
