import { useAppContext } from "../context/appContext";

import Navigation from "../ui/Navigation";
import Header from "../ui/Header";

import styles from "./HomePage.module.css";

function HomePage() {
  const { navOpen } = useAppContext();

  return (
    <div className={styles.homePage}>
      <Header />

      <main className={styles.mainContentContainer}>
        <Navigation />

        <div className={`${styles.mainContent} ${navOpen && styles.shifted}`}>
          <h1>hey</h1>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
