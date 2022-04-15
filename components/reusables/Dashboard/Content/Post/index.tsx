import React from "react";
import PostCard from "../../../../home/PostCard";
import Infocard from "../../../../Noticepost/Infocard";
import styles from "./Post.module.scss";

const Post = () => {
  return (
    <div className={styles.cont}>
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
  );
};

export default Post;