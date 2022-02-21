import React from "react";
import styles from "./LoginBackground.module.scss";

export default function BlobBackground() {
  return (
    <div className={styles.container}>
      <img src="/assets/images/auth/BlobTL.svg" className={styles.TL} />
      <img src="/assets/images/auth/BlobTR.svg" className={styles.TR} />
      <img src="/assets/images/auth/BlobBL.svg" className={styles.BL} />
      <img src="/assets/images/auth/BlobBR.svg" className={styles.BR} />
    </div>
  );
}
