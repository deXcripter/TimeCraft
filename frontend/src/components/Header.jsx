import styles from './Header.module.css';

export default function Header() {
  return (
    <div className="bg-blue-400 flex items-center">
      <svg className="h-9 w-9"></svg>
      <span className={styles.logo}>TimeCraft 💡</span>
    </div>
  );
}
