import React, { Children } from "react";

import styles from "../styles/Dashboard/CollegeDashboard.module.scss";

import Sidebaralt from "../components/reusables/Dashboard/Side-bar/Sidebaralt";
import Navigation from "../components/reusables/Navigation";


 export function DashboardLayout({children} : {children : React.ReactNode}) {
  return (
<>
    <Navigation />
   
    <div className={styles.container}>
    
    <Sidebaralt />
    <div className={styles.content_container}>
      {children}
    
      </div>
    </div>
    </>
  );
}

// Dashboard.PageLayout =DashboardLayout ;

export default DashboardLayout;
