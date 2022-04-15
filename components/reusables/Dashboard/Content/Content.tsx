import React from "react";
import styles from "./Content.module.scss";
import Details from "./Details";
import Donation from "./Donation";
import Post from "./Post";
import Profile from "./Profile/Profile";

const Content = () => {

  
  return (
    <div className={styles.container}>
    <Donation />
    </div>
  );
};

export default Content;
