import { Link, useLocation } from "react-router";

import ThemeToggle from "../ui/ThemeToggle";
import NavigationMenu from "../navigation/NavigationMenu";
import styles from "./Header.module.css";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        gabrielaaf
      </Link>

      <div className={styles.actions}>
        <ThemeToggle />

        {pathname !== "/" && (
          <NavigationMenu key={pathname} />
        )}
      </div>
    </header>
  );
}

export default Header;