import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./MenuToggle.module.css";

function MenuToggle() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
    </div>
  );
}

export default MenuToggle;
