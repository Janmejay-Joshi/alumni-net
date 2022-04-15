import styles from "./Donation.module.scss";

export default function Donation() {
  return (
    <>
        <div className={styles.main}>
            <h1 className={styles.main__heading}>Donation</h1>
            <div className={styles.input__container}>
              <label className={styles.label}>Description</label>
              <textarea
              rows={10}
                placeholder="Write Your Description/Message here"
              />
            </div>
            <div className={styles.btn_container}>
            <button
                type="submit"
                className={styles.btn}
              >
                Donate
              </button>
              </div>
        </div>
    </>
  );
}
