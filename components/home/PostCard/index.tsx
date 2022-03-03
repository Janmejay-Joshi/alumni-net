import React from "react";
import styles from "./PostCard.module.scss";

export default function PostCard(props: {}) {
  return (
    <div className={styles.container}>
      <div className={styles.user_info}>
        <img
          src={"https://picsum.photos/seed/picsum/50/50"}
          alt="Profile Pic"
          className={styles.profile_pic}
        />
        <div className={styles.info}>
          <span className={styles.name}>{"Janmejay Joshi"}</span>
          <span className={styles.timestamp}>{"46 min ago"}</span>
        </div>
      </div>
      <div className={styles.content}></div>
    </div>
  );
}
