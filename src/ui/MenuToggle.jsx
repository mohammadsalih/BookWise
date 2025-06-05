import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useAppContext } from "../context/appContext";

import styles from "./MenuToggle.module.css";

function MenuToggle() {
  const { setNavOpen } = useAppContext();

  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div className={styles.container} onClick={handleToggle}>
      <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
    </div>
  );
}

export default MenuToggle;
