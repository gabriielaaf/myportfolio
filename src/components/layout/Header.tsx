import { Link } from "react-router";

import ThemeToggle from "../ui/ThemeToggle";
import NavigationMenu from "../navigation/NavigationMenu";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        gabrielaaf
      </Link>

      <div className={styles.actions}>
        <ThemeToggle />
        <NavigationMenu />
      </div>
    </header>
  );
}

export default Header;