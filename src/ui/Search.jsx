import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Search.module.css";

import { useAppContext } from "../context/appContext";

function Search() {
  const { searchQuote, setSearchQuote } = useAppContext();

  return (
    <div className={styles.searchContainer}>
      <FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass} />

      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchQuote(e.target.value)}
        value={searchQuote}
      />
    </div>
  );
}

export default Search;
