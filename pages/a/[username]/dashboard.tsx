import React ,{useState} from "react";
import Content from "../../../components/reusables/Dashboard/Content/Content";
import Sidebar from "../../../components/reusables/Dashboard/Sidebar/Sidebar";
import Navigation from "../../../components/reusables/Navigation";
import styles from "../../../styles/Dashboard/AlumniDashboard.module.scss";




export default function Dashboard() {


 
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.dashboard__container}>
        <div className={styles.dashboard__sidebar}>
          <Sidebar />
        </div>
        <div className={styles.dashboard__content}>
          <Content />
        </div>
      </div>
    </div>
  );
}
