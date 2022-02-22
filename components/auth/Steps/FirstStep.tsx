import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../../styles/PageStyles/Complete_prof.module.scss";
 


interface FirstStep {
  fname: string;
  email: string;
  phone: number;
  url: string;
  bio: string;
}

const FirstStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstStep>();
  const emailVerifyRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const onSubmit: SubmitHandler<FirstStep> = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <h2 className={styles.content__title}>STEP 1 </h2>
      <h1 className={styles.content__subtitle}>Your Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.form__contaienr}>
          <div className={styles.form__left}>
            <div className={styles.input__div}>
              <span>{"Full Name*"}</span>
              <input
                type={"text"}
                placeholder={"Full Name"}
                className={styles.input}
                {...register("fname", {
                  required: true,
                })}
              />
              {errors?.email?.type === "required" && (
                <p style={{color : "var(--notification-red)", fontSize:  "0.825rem", margin: 0, padding: 0 }}>{"This field is required"}</p>
              )}
            </div>

            <div className={styles.input__div}>
              <span>{"Email*"}</span>
              <input
                type={"email"}
                className={styles.input}
                {...register("email", {
                  required: true,
                  pattern: emailVerifyRegex,
                })}
              />
              {errors?.email?.type === "required" && (
                <p style={{color : "var(--notification-red)", fontSize:  "0.825rem" ,margin :0 , padding: 0 }}>{"This field is required"}</p>
              )}
              {errors?.email?.type === "pattern" && <p style={{color : "var(--notification-red)", fontSize:  "0.825rem" ,margin :0 , padding: 0 }}>{"Email only"}</p>}
            </div>
            <div className={styles.input__div}>
              <span>{"Phone*"}</span>
              <input
                type={"number"}
                className={styles.input}
                {...register("phone", {
                  required: true,
                })}
              />
              {errors?.email?.type === "required" && (
                <p style={{color : "var(--notification-red)", fontSize:  "0.825rem" ,margin :0 , padding: 0 }}>{"This field is required"}</p>
              )}
            </div>
          </div>

          <div className={styles.form__right}>
            <div className={styles.input__div}>
              <span>{"Add Your Website URL (if any)"}</span>
              <input
                type={"text"}
                className={styles.input}
                {...register("url")}
              />
            </div>
            <div className={styles.input__div}>
              <span>{"About Yourself"}</span>
              <textarea
                placeholder={"Short Description about yourself!!!!"}
                className={styles.input}
                {...register("bio")}
              />
            </div>
          </div>
        </div>
        <div className={styles.btn__container}>
          <button className={styles.btn__next}>
            Next{" "}
            <i className={styles.btn__icn}>
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4998 14.625C1.17996 14.625 0.859961 14.509 0.616211 14.2771C0.12793 13.8132 0.12793 13.0617 0.616211 12.5979L5.98418 7.49995L0.616211 2.40112C0.12793 1.93726 0.12793 1.18579 0.616211 0.721924C1.10449 0.258057 1.89551 0.258057 2.38379 0.721924L8.63379 6.65942C9.12207 7.12329 9.12207 7.87476 8.63379 8.33862L2.38379 14.2761C2.13965 14.5099 1.81973 14.625 1.4998 14.625Z"
                  fill="white"
                />
              </svg>
            </i>
          </button>
        </div>
      </form>
    </>
  );
};

export default FirstStep;
