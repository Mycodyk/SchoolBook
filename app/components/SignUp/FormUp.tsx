import { SignUp } from "./SignUp";
import styles from "./SignUp.module.css";

export const FormUp = () => {
  return (
    <>
      <SignUp>
        <div className={styles["form"]}>
          <p className={styles["title"]}>Регистрация в SchoolBook</p>
          <p className={styles["desc"]}>
            Основной аккаунт будет использоваться для подключения к учебным
            заведениям. SchoolBook позволяет хранить все данные об успеваемости
            на основном аккаунте даже после окончания учебы.
          </p>
          <div className={styles["inputDiv"]}>
            <div className={styles["input"]}>
              <input
                type="email"
                placeholder="Почта"
                className={styles["inputPlace"]}
              />
              <input
                type="password"
                placeholder="Пароль"
                className={styles["inputPlace"]}
              />
              <input
                type="password"
                placeholder="Повторите пароль"
                className={styles["inputPlace"]}
              />
            </div>
            <div className={styles["input"]}>
              <input
                type="name"
                placeholder="Имя"
                className={styles["inputPlace"]}
              />
              <input
                type="secondname"
                placeholder="Фамилия"
                className={styles["inputPlace"]}
              />
              <input
                type="patronymic"
                placeholder="Отчество (при наличии)"
                className={styles["inputPlace"]}
              />
            </div>
            <div className={styles["links"]}>
              <a href="/" className={styles["back"]}>
                Назад
              </a>
              <a href="/" className={styles["create"]}>
                Создать аккаунт
              </a>
            </div>
          </div>
        </div>
      </SignUp>
    </>
  );
};
