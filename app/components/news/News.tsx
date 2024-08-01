import React from "react";
import Style from "./News.module.css";

export const News = () => {
  return (
    <div className={Style["news"]}>
      <h2 className={Style["news-title"]}>Новости</h2>
      <div className={Style["news-articles-grid"]}></div>
    </div>
  );
};
