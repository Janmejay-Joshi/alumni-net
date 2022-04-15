import React from "react";
import Connections from "./Connections";
import styles from "./Content.module.scss";
import Details from "./Details";
import Donation from "./Donation";
import Post from "./Post";
import Profile from "./Profile/Profile";

const Content = () => {

  
  return (
    <div className={styles.container}>
    <Connections />
    </div>
  );
};

export default Content;
