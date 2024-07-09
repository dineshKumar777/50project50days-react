import { useState } from "react";
import styles from "../css/day4.module.css";
import { Search } from "lucide-react";

export default function Day4HiddenSearch() {
  const [search, setSearch] = useState(false);

  const handleclick = () => {
    setSearch(!search);
  };

  return (
    <div>
      <a href="/">Back to Home</a>
      <h1>Day 4: Hidden search</h1>
      <div className={`${styles.search} ${search ? styles.active : ""}`}>
        <input type="text" placeholder="search.." />
        <button
          title="search"
          type="button"
          className={styles.btn}
          onClick={handleclick}
        >
          <Search />
        </button>
      </div>
    </div>
  );
}
