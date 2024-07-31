"use client";

import { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import { props } from "@/app/types/types";

export const SignUp = (props: props) => {
  return (
    <>
      <div className={styles["div"]}>{props.children}</div>
    </>
  );
};
