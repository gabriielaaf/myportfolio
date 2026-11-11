import ThemeToggle from "../ui/ThemeToggle";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        gabrielaaf
      </span>

      <ThemeToggle />
    </header>
  );
}

export default Header;