import styles from "./Header.module.css";
import Profile from "./Profile";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.div1}>1 </div>
      <div className={styles.div2}>2</div>
      <div className={styles.div3}>
        <Profile />
      </div>
    </header>
  );
}

export default Header;
