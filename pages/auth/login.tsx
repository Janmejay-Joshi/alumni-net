import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  AppleLoginButton,
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import BlobBackground from "../../components/auth/BlobBackground";
import styles from "../../styles/PageStyles/Login.module.scss";

interface LoginInput {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInput>();
  const emailVerifyRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const onSubmit: SubmitHandler<LoginInput> = (data) => console.log(data);

  return (
    <>
      <BlobBackground />
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>{"Log In"}</h2>
          <div className={styles.auth}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="UserPass Form"
              className={styles.userpass}
            >
              <div className={styles.input_container}>
                <span>{"Email"}</span>
                <input
                  type={"email"}
                  className={styles.input}
                  {...register("email", {
                    required: true,
                    pattern: emailVerifyRegex,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p>{"This field is required"}</p>
                )}
                {errors?.email?.type === "pattern" && <p>{"Email only"}</p>}
              </div>
              <div className={styles.input_container}>
                <span>{"Password"}</span>
                <input
                  type={"password"}
                  className={styles.input}
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors?.password?.type === "required" && (
                  <p>{"This field is required"}</p>
                )}
                {errors?.password?.type === "minLength" && (
                  <p>{"Password Should be Over 8 Characters"}</p>
                )}
              </div>
            </form>
            <div className={styles.seperator} />
            <div className={styles.socialauth}>
              <GoogleLoginButton />
              <FacebookLoginButton />
              <AppleLoginButton />
            </div>
          </div>
          <div className={styles.nextstep}>
            <div>
              <input
                type="submit"
                form="UserPass Form"
                value="Next Step"
                className={styles.submit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
