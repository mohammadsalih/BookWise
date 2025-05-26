import Header from "../ui/Header";
import Navigation from "../ui/Navigation";

import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <Header />
      <main>
        <Navigation />
      </main>
    </div>
  );
}

export default HomePage;
