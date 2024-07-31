"use client";
import Styles from "./Overlay.module.css";

export const Overlay = (props: { isOpened: boolean; close: () => void }) => {
  return (
    <div
      className={`${Styles["overlay"]} ${
        props.isOpened && Styles["overlay_is-opened"]
      }`}
      onClick={() => props.close()}
    ></div>
  );
};
