import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import PostCard from "../../components/home/PostCard";
import Navigation from "../../components/reusables/Navigation";
import { auth } from "../../firebase";
import styles from "../../styles/PageStyles/Home.module.scss";

export default function Chat() {
  const [user, loading, error] = useAuthState(auth);

  return user ? (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.contact_section}>
          <div className={styles.info_cards}>
            <div className={styles.group_desc}>
              <div className={styles.image_wraper}>
                <div className={styles.image}>
                  <img
                    src={"https://picsum.photos/seed/picsum/80/80"}
                    alt="Branch"
                    style={{
                      transform: "translate(50px,0)",
                    }}
                  />
                  <img
                    src={"https://picsum.photos/seed/lorem/80/80"}
                    alt="College"
                  />
                </div>
              </div>

              <div className={styles.info}>
                <span className={styles.heading}>
                  {"Artificial Inteligence and Robotics"}
                </span>
                <span className={styles.subheading}>{"Class of 2020"}</span>
              </div>
            </div>
            <div className={styles.available_chats_wraper}>
              <span className={styles.title}>{"Chat Threads"}</span>
              <div className={styles.available_chats}>
                {[1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7].map((data, index) => {
                  return (
                    <div className={styles.thread} key={index}>
                      <div className={styles.image_wraper}>
                        <img
                          src={"https://picsum.photos/seed/ssadm/80/80"}
                          alt="College"
                          className={styles.image}
                        />
                      </div>
                      <span className={styles.title}></span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className={styles.post_section}>
          <div className={styles.post}>{"What's on your Mind?"}</div>
          <div className={styles.feed}>

        <PostCard/>
          </div>
        </section>
        <section className={styles.event_know_section}>
        </section>
      </main>
    </div>
  ) : loading ? null : null;
}
