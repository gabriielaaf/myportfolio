import ThemeToggle from "../ui/ThemeToggle";
import NavigationMenu from "../navigation/NavigationMenu";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        gabrielaaf
      </span>

      <div className={styles.actions}>
        <ThemeToggle />
        <NavigationMenu />
      </div>
    </header>
  );
}

export default Header;