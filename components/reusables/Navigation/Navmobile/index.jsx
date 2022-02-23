import styles from "./Navmobile.module.scss";
import { GiHamburgerMenu } from "react-icons/Gi";

import { useState } from "react";

const Navmobile = () => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.menu_button}>
        <GiHamburgerMenu />
      </div>
      <div className={styles.searchbox}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input_search}
            type="text"
            placeholder="Search.."
            name="search"
            value={value}
            onChange={handleChange}
          ></input>
        </form>
      </div>
      <div className={styles.profile}></div>
    </div>
  );
};
export default Navmobile;
