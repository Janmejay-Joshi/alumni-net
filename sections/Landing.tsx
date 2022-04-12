import Image from "next/image";
import React from "react";
import styles from "../styles/PageStyles/HeroPage/Landing.module.scss";
import Alumni_image from "../public/assets/images/Hero/alumni_icon.svg";
import { GiClick } from "react-icons/gi";
type Props = {};

const Landing = (props: Props) => {
  return (
    <div className={styles.main__container} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__left}>
            <h1>
              A Complete Solution for Managing the auspicious alumni network 🚀
            </h1>
            <div className={styles.button_container}>
              <button>
                <GiClick />
                Continue As Alumni
              </button>
              <button>
                <GiClick />
                Continue As College
              </button>
            </div>
          </div>
          <div className={styles.content__right}>
            <Image
              className={styles.hero__image}
              src={Alumni_image}
              alt="alumni-connect"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
