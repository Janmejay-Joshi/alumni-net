import styles from "./Bottombar.module.scss";
import * as Ai from "react-icons/ai";
import * as Bs from "react-icons/bs";
import * as Io from "react-icons/io";
import * as Fa from "react-icons/fa";

import { useRouter } from "next/router";
import Link from "next/link";

const Bottombar = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      
        <li className={router.pathname == "/" ? styles.active : ""}>
          <Link href="/" ><Ai.AiFillHome /></Link>
        </li>
        <li className={router.pathname == "/notice" ? styles.active : ""}>
          <Link href="/notice"><Bs.BsFillBellFill /></Link>
        </li>
        <li className={router.pathname == "/a" ? "active" : ""}>
          <Link href="/a"><Io.IoIosAddCircle /></Link>
        </li>
        <li className={router.pathname == "/b" ? "active" : ""}>
          <Link href="/b"><Fa.FaGraduationCap /></Link>
        </li>
        <li className={router.pathname == "/c" ? "active" : ""}>
          <Link href="/c"><Bs.BsChatLeftTextFill /></Link>
        </li>

        
        
        
        
        
      
    </div>
  );
};

export default Bottombar;
