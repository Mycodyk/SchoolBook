"use client";

import { Overlay } from "../Overlay/Overlay";
import { FormIn } from "../SignIn/FormIn";
import Style from "./Banner.module.css";
import { useState } from "react";
import Link from "next/link";

export const Banner = () => {
  const [popUpIsOpened, setPopUpIsOpened] = useState(false);
  const openPopUp = () => {
    setPopUpIsOpened(true);
  };
  const closePopUp = () => {
    setPopUpIsOpened(false);
  };
  return (
    <div className={Style["banner"]}>
      <div className={Style["banner-container"]}>
        <p className={Style["banner-button-active"]}>Главная</p>
        <p className={Style["banner-losung"]}>Твой помощник Круглосуточно</p>
        <p className={Style["banner-text"]}>
          Встречайте электронный дневник - ваш надежный спутник в организации
          повседневных дел и достижении целей! Наш инновационный дневник поможет
          вам удобно вести записи о своих мыслях, планах и достижениях, всегда
          под рукой и доступен в любое время через мобильное приложение или
          веб-версию.
        </p>
        <div className={Style["banner-block"]}>
          <ul className={Style["banner-plus"]}>
            <li>Поддержка</li>
            <li>Доступность</li>
            <li>Лёгкость</li>
            <li>Стабильность</li>
            <li>Удобство</li>
          </ul>
        </div>
        <a className={Style["registration"]} href="/sign/sigup">
          Регистрация
        </a>
        <Link className={Style["sign-in"]} onClick={openPopUp} href="/">
          Войти
        </Link>
        <div className={Style["banner-image"]}>
          <p className={Style["support"]}>Поддержка</p>
          <p className={Style["fast"]}>Быстродействие</p>
          <p className={Style["reliability"]}>Надёжность</p>
        </div>
      </div>
      <Overlay isOpened={popUpIsOpened} close={closePopUp} />
      <FormIn isOpened={popUpIsOpened} close={closePopUp} />
    </div>
  );
};
