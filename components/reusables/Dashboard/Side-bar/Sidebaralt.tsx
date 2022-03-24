import React from "react";
import styles from "./Sidebar.module.scss";
import {MdOutlineManageAccounts, MdVerified} from 'react-icons/md';
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase"


const Sidebaralt = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <span className={styles.logo}>Alumni Connect</span>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
            <p className={styles.title}>Alumni Management</p>
          <li>
          <MdOutlineManageAccounts className={styles.icon}/>
            <span><Link href={`/c/${user?.uid}/dashboard/alumnimanager`} passHref >Alumni Manager</Link></span>
          </li>
          <li>
          <MdVerified className={styles.icon}/>
            <span><Link href={`/c/${user?.uid}/dashboard/verifyalumni`} passHref >Verify Alumni </Link></span>
          </li>
            <p className={styles.title}>Profile Management</p>
          <li>
          <CgProfile className={styles.icon}/>
          <span><Link href={`/c/${user?.uid}/dashboard/editprofile`} passHref >Edit Profile</Link></span>
          </li>
          <li>
            <IoIosNotificationsOutline className={styles.icon}/>
            <span><Link href={`/c/${user?.uid}/dashboard/notices`} passHref >Notices</Link></span>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Sidebaralt;
