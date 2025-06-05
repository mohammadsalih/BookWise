import styles from "./Header.module.css";

import Logo from "./logo";
import MenuToggle from "./MenuToggle";
import Profile from "./Profile";
import Search from "./Search";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.div1}>
        <MenuToggle />
        <Logo />
      </div>
      <div className={styles.div2}>
        <Search />
      </div>
      <div className={styles.div3}>
        <Profile />
      </div>
    </header>
  );
}

export default Header;
