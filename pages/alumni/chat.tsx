import React from "react";
import Navigation from "../../components/reusables/Navigation";
import styles from "../../styles/PageStyles/Chat.module.scss";

export default function Chat() {
  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.info_cards}>
          <div className={styles.group_desc}></div>
          <div className={styles.available_chats}></div>
        </div>
        <div className={styles.chat_container}>
          <div className={styles.chat_wraper}>
            <div className={styles.chat_box}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((data, index) => {
                return data % 2 == 0 ? (
                  <div className={styles.chat_recive}>
                    <div className={styles.profile_pic}></div>
                    <div className={styles.message_wraper}>
                      <div className={styles.message}></div>
                      <span className={styles.timestamp}>{`Date ${data * 1.5}`}</span>
                    </div>
                  </div>
                ) : (
                  <div className={styles.chat_sent}>
                    <div className={styles.message_wraper}>
                      <div className={styles.message}></div>
                      <span className={styles.timestamp}>{`Date ${data * 1.5}`}</span>
                    </div>
                    <div className={styles.profile_pic}></div>
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
