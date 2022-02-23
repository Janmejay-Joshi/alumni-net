import React from "react";
import Navigation from "../../components/reusables/Navigation";
import styles from "../../styles/PageStyles/Chat.module.scss";

export default function Chat() {
  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
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
        <div className={styles.chat_container}>
          <div className={styles.chat_wraper}>
            <div className={styles.chat_box}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((data, index) => {
                return data % 2 == 0 ? (
                  <div className={styles.chat_recive} key={index}>
                    <div className={styles.profile_pic_wraper}>
                      <img
                        src={"https://picsum.photos/seed/ipsum/80/80"}
                        alt="College"
                        className={styles.profile_pic}
                      />
                    </div>
                    <div className={styles.message_wraper}>
                      <div className={styles.message}></div>
                      <span className={styles.timestamp}>{`Date ${
                        data * 1.5
                      }`}</span>
                    </div>
                  </div>
                ) : (
                  <div className={styles.chat_sent} key={index}>
                    <div className={styles.message_wraper}>
                      <div className={styles.message}></div>
                      <span className={styles.timestamp}>{`Date ${
                        data * 1.5
                      }`}</span>
                    </div>
                    <div className={styles.profile_pic_wraper}>
                      <img
                        src={"https://picsum.photos/seed/lorem/80/80"}
                        alt="College"
                        className={styles.profile_pic}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.textbar_wraper}>
              <div className={styles.textbar}>
                <textarea className={styles.textbox}></textarea>
                <div className={styles.send}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
