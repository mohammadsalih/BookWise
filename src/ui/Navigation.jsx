import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import { useAppContext } from "../context/appContext";

import Styles from "./Navigation.module.css";

function Navigation() {
  const { navOpen } = useAppContext();

  return (
    <nav className={`${Styles.sidebar} ${navOpen && Styles.open}`}>
      <ul className={Styles.navList}>
        <li className={Styles.navItem}>
          <NavLink to="/home" className={Styles.navLink}>
            <FontAwesomeIcon icon={faHouse} />

            <span>Home</span>
          </NavLink>
        </li>

        <li className={Styles.navItem}>
          <NavLink to="/saved" className={Styles.navLink}>
            <FontAwesomeIcon icon={faHouse} />

            <span>Saved books</span>
          </NavLink>
        </li>

        <li className={Styles.navItem}>
          <NavLink to="/read" className={Styles.navLink}>
            <FontAwesomeIcon icon={faHouse} />

            <span>read books</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
