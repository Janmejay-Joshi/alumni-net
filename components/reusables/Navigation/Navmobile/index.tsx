import styles from "./Navmobile.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";
import Navmenu from "./Navmenu";
import Bottombar from "./Bottombar";

const Navmobile = () => {
  const [value, setValue] = useState("");
  const [showmenu, setShowmenu] = useState(false);

  function handleChangeMenu() {
    setShowmenu(!showmenu);
  }
  function handleChange(e:any) {
    setValue(e.target.value);
  }
  function handleSubmit(e:any) {
    e.preventDefault();
    console.log(value);
  }
  if(!showmenu){
  return (
    <>
    <div className={styles.container}>
      <div className={styles.menu_button}>
        <GiHamburgerMenu onClick={handleChangeMenu} />
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
    <Bottombar />
    </>
  );
  }else{
    return <Navmenu handleChangeMenu={handleChangeMenu} />
  }
};
export default Navmobile;
