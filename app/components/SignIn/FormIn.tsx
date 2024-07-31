import { props } from "@/app/types/types";
import { SignIn } from "./SignIn";
import styles from "./SignIn.module.css";
import Link from "next/link";

export const FormIn = (props: props) => {
  return (
    <>
      <SignIn>
        <div
          className={`${styles["popup"]} ${
            props.isOpened && styles["popup_is-opened"]
          }`}
        >
          <div className={styles["form"]}>
            <p className={styles["title"]}>Вход в SchoolBook</p>
            <div className={styles["inputDiv"]}>
              <input
                type="email"
                placeholder="Логин или почта"
                className={styles["inputPlace"]}
              />
              <input
                type="password"
                placeholder="Пароль"
                className={styles["inputPlace"]}
              />
            </div>
            <Link href="" className={styles["forget"]}>
              Не помню пароль
            </Link>
            <div className={styles["login"]}>
              <div className={styles["links"]}>
                <a href="" className={styles["log"]}>
                  Войти
                </a>
                <a href="" className={styles["passkey"]}>
                  Войти по PassKey
                </a>
              </div>
              <div className={styles["other"]}>Или</div>
              <div className={styles["connectitives"]}>
                <a href="" className={styles["VK"]}>
                  <img src="/images/VK.svg" alt="VK" />
                  Войти с VK ID
                </a>
                <a href="" className={styles["Yandex"]}>
                  <img src="/images/Yandex.svg" alt="Yandex" />
                  Войти с Яндекс ID
                </a>
              </div>
            </div>
            <div className={styles["notacc"]}>
              <p>Нет аккаунта?</p>
              <a href="/sign/signup" className={styles["sign"]}>
                Зарегестрируйтесь
              </a>
            </div>
          </div>
        </div>
      </SignIn>
    </>
  );
};
