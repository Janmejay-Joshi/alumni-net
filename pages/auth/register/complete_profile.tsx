import React from "react";
import styles from "../../../styles/PageStyles/Complete_prof.module.scss";
import BlobBackground from "../../../components/auth/BlobBackground";
import Progress from "../../../components/auth/Progress/Progress";
import FirstStep from "../../../components/auth/Steps/FirstStep";
import SecondStep from "../../../components/auth/Steps/SecondStep";




const complete_profile = () => {

 

  return (
    <>
      <BlobBackground />

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_head}>
           <Progress />
          </div>
          <div className={styles.card__content}>
            <FirstStep/>
          </div>
        </div>
      </div>
    </>
  );
};

export default complete_profile;
