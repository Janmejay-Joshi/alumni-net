import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Navigation from "../../components/reusables/Navigation";
import { auth, db } from "../../firebase";
import { Thread, ThreadID, postMessage } from "../../firebase/chatFunctions";
import styles from "../../styles/PageStyles/Chat.module.scss";

interface MessageInput {
  message: string;
}

export default function Chat() {
  const [threadID, setThreadID] = useState<ThreadID>("xDBMQLtLa2D0JsoY9Dql");
  const [thread, setThread] = useState<Thread>();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "chat_threads", threadID),
      (snapshot: any) => {
        const updatedThread = snapshot.data();
        setThread(updatedThread);
      },
      (error: any) => console.log(error)
    );
    return unsubscribe;
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<MessageInput>();

  const onSubmit = (data: MessageInput) => {
    if (user != null) {
      console.log(data.message);
      postMessage(threadID, data.message, user);
    }
  };

  console.log(thread);

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
              {thread
                ? thread.chat.map((data, index) => {
                    const time = new Date(data.timestamp);
                    return data.uid != user.uid ? (
                      <div className={styles.chat_recive} key={index}>
                        <div className={styles.profile_pic_wraper}>
                          <img
                            src={data.profile_pic}
                            alt="Profile Pic"
                            className={styles.profile_pic}
                          />
                        </div>
                        <div className={styles.message_wraper}>
                          <div className={styles.message}>{data.message}</div>
                          <span className={styles.timestamp}>
                            {time.toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.chat_sent} key={index}>
                        <div className={styles.message_wraper}>
                          <div className={styles.message}>{data.message}</div>
                          <span className={styles.timestamp}>
                            {time.toLocaleTimeString()}
                          </span>
                        </div>
                        <div className={styles.profile_pic_wraper}>
                          <img
                            src={data.profile_pic}
                            alt="Profile Pic"
                            className={styles.profile_pic}
                          />
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
            <div className={styles.textbar_wraper}>
              <form
                className={styles.textbar}
                id="textbar"
                onSubmit={handleSubmit(onSubmit)}
              >
                <textarea
                  className={styles.textbox}
                  form="textbar"
                  {...register("message")}
                ></textarea>
                <input className={styles.send} type="submit" />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
