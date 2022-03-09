import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import data from "./Data";
import Link from "next/link";
import { GiHamburgerMenu, GiRamProfile } from "react-icons/gi";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";
import { AiOutlineProfile, AiOutlineTeam } from "react-icons/ai";
import { BsFilePost } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className={styles.sidebar} style={!active ? { width: "4rem" } : {}}>
        <header>
          <div
            className={styles.header__text}
            style={!active ? { display: "none" } : {}}
          >
            <span className={styles.header__text__title}>Alumni-Connect</span>
          </div>

          <div className={styles.header__icon} onClick={() => toggleActive()}>
            {active ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </div>
        </header>
        <div className={styles.nav_menu}>
          <div className={styles.menu}>
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <CgDetailsMore
                  className={styles.icons}
                  style={
                    !active
                      ? {
                          position: "relative",
                          left: "-3.2rem",
                          fontSize: "1.8rem",
                        }
                      : {}
                  }
                />
                <Link href="/">
                  <span className={styles.nav__text}>My Details</span>
                </Link>
              </li>
              <li className={styles.nav_link}>
                <AiOutlineProfile
                  className={styles.icons}
                  style={
                    !active
                      ? {
                          position: "relative",
                          left: "-3.2rem",
                          fontSize: "1.8rem",
                        }
                      : {}
                  }
                />
                <Link href="/">
                  <span className={styles.nav__text}>Profile</span>
                </Link>
              </li>
              <li className={styles.nav_link}>
                <BsFilePost
                  className={styles.icons}
                  style={
                    !active
                      ? {
                          position: "relative",
                          left: "-3.2rem",
                          fontSize: "1.8rem",
                        }
                      : {}
                  }
                />
                <Link href="/">
                  <span className={styles.nav__text}>Posts</span>
                </Link>
              </li>
              <li className={styles.nav_link}>
                <IoMdNotificationsOutline
                  className={styles.icons}
                  style={
                    !active
                      ? {
                          position: "relative",
                          left: "-3.2rem",
                          fontSize: "1.8rem",
                        }
                      : {}
                  }
                />
                <Link href="/">
                  <span className={styles.nav__text}>Notices</span>
                </Link>
              </li>
              <li className={styles.nav_link}>
                <AiOutlineTeam
                  className={styles.icons}
                  style={
                    !active
                      ? {
                          position: "relative",
                          left: "-3.2rem",
                          fontSize: "1.8rem",
                        }
                      : {}
                  }
                />
                <Link href="/">
                  <span className={styles.nav__text}>Connections</span>
                </Link>
              </li>
              <li className={styles.nav_link}>
                <FaDonate
                  className={styles.icons}
                  style={
                    !active
                      ? {
                          position: "relative",
                          left: "-3.2rem",
                          fontSize: "1.8rem",
                        }
                      : {}
                  }
                />
                <Link href="/">
                  <span className={styles.nav__text}>Donations</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
