import React from "react";
import styles from "./Content.module.scss";
import Profile from "./Profile/Profile";

const Content = () => {

  
  return (
    <div className={styles.container}>
    <Profile />
    </div>
  );
};

export default Content;
