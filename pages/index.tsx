import type { NextPage } from "next";
import styles from "../styles/PageStyles/Hero.module.scss";



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.hero_wrapper}>
          <div className={styles.hero}>
            <nav className={styles.nav}></nav>
            <div className={styles.slogan}></div>
          </div>
        </div>

        <div className={styles.infocard_left}></div>
        <div className={styles.infocard_right}></div>
        <div className={styles.infocard_left}></div>

        <div className={styles.signup}></div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
};

export default Home;
