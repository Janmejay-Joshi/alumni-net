import type { NextPage } from "next";
import { GiClick } from "react-icons/gi";
import styles from "../styles/PageStyles/Hero.module.scss";
import { FaGraduationCap } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div className={styles.hero_wrapper}>
          <main>
          <div className={styles.header}>
            <div className={styles.block_logo}>
              <FaGraduationCap color="white" size={35} />
              <span className={styles.title}>Alumni Connect</span>
            </div>
            <div className={styles.menu}>
              <li className={styles.navitem}>Home</li>
              <li className={styles.navitem}>Features </li>
              <li className={styles.navitem}>Contact</li>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.center_container}>
              <div className={styles.main_head}>
                A Complete Solution for managing the asupicious alumni network
              </div>
              <button className={styles.button}>
                <div className={styles.click_icon}>
                  <GiClick />
                </div>
                <div className={styles.click_text}>Click to Explore</div>
              </button>
            </div>
            <div className={styles.bottom_icon}>
              <img
                src="assets/images/Hero/alumni_icon.svg"
                style={{ height: "300px" }}
              />
            </div>
          </div>

          <div className={styles.contents}>
            <div className={styles.block_white}>
              <div className={styles.left_block}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                odit impedit quasi rerum perferendis atque facilis voluptatibus
                nam sit eveniet repudiandae amet harum praesentium, molestiae
                recusandae numquam earum fuga voluptas.
              </div>
              <div className={styles.right_block}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda sint tempore minus placeat blanditiis explicabo omnis
                impedit laboriosam? Atque nulla, architecto, at illo iure eius
                delectus, impedit molestiae quibusdam minus mollitia ducimus
                esse veritatis perferendis. Tempora eaque sint hic veritatis,
                minus architecto consectetur animi similique facilis deleniti
                laborum error veniam dicta molestias temporibus praesentium
                esse?
              </div>
            </div>
            <div className={styles.block_grey}></div>
            <div className={styles.block_white}></div>
          </div>
          <div className={styles.features_block}>
            <h1 className={styles.feature_header}>Features</h1>
            <h3 className={styles.feature_subheader}>Features</h3>

            <div className={styles.features_wrapper}>
              <div className={styles.feature_item}>aaaa</div>
              <div className={styles.feature_item}>aaaa</div>
              <div className={styles.feature_item}>aaaa</div>
            </div>
          </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
