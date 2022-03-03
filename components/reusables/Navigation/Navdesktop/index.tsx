import React, { useEffect, useState } from "react";
import styles from "./Navdesktop.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

import * as Go from "react-icons/go";

import Dropdown from "../../../Nav/Dropdown";
import Searchbox from "../../../Nav/Searchbox";

export default function Navdesktop() {
  const [dropdown, setDropdown] = useState(false);
  const [searchbox, setSearchbox] = useState(false);

  const router = useRouter();

  const handleSearchClick = () => {
    setSearchbox(!searchbox);
  };
  const handleProfileClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.block_logo}>
        <img src="/icon.png" style={{ height: "100%" }} />
        <span className={styles.title}>Alumni Connect</span>
      </div>
      <div className={styles.block_menu}>
        <div
          className={`${styles.navitem} ${
            router.pathname == "/" ? styles.navitem__active : ""
          }`}
        >
          <Link href="/">Home</Link>
        </div>
        <div
          className={`${styles.navitem} ${
            router.pathname == "/notice" ? styles.navitem__active : ""
          }`}
        >
          <Link href="/notice">Notices</Link>
        </div>
        <div
          className={`${styles.navitem} ${
            router.pathname == "/a" ? styles.navitem__active : ""
          }`}
        >
          <Link href="/">Colleges</Link>
        </div>
        <div
          className={`${styles.navitem} ${
            router.pathname == "/a/chat" ? styles.navitem__active : ""
          }`}
        >
          <Link href="/a/chat">Messenger</Link>
        </div>
      </div>
      <div className={styles.block_profile}>
        <div className={styles.searchicon}>
          <Go.GoSearch onClick={handleSearchClick} />
        </div>
        <div className={styles.profile}>
          <img
            src="/assets/images/Nav/profile.svg"
            className={styles.profilepic}
            onClick={handleProfileClick}
            alt="profilepic"
          />
        </div>
        {dropdown && <Dropdown />}
        {searchbox && <Searchbox />}
      </div>
    </div>
  );
}
