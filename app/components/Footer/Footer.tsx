import Style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={Style["footer"]}>
      <div className={Style["footer-container"]}>
        <div className={Style["big"]}>
          <img
            className={Style["footer-image"]}
            src="/images/logo.svg"
            alt="Логотип SchoolBook"
          />
          <p className={Style["footer-bigtext"]}>Твой помощник Круглосуточно</p>
        </div>
        <div className={Style["footer-info"]}>
          <div className={Style["category"]}>
            <p className={Style["category-name"]}>Компания</p>
            <ul className={Style["questions_lists"]}>
              <li>Вакансии</li>
              <li>Юр. информация</li>
              <li>Связь</li>
              <li>Адрес</li>
            </ul>
          </div>
          <div className={Style["category"]}>
            <p className={Style["category-name"]}>Ссылки</p>
            <ul className={Style["questions_lists"]}>
              <li>App Store</li>
              <li>Google Play</li>
              <li>RuStore</li>
              <li>AppGallery</li>
            </ul>
          </div>
          <div className={Style["category"]}>
            <p className={Style["category-name"]}>Документы</p>
            <ul className={Style["questions_lists"]}>
              <li>Документы</li>
              <li>Школам</li>
              <li>Ученикам</li>
              <li>Родителям</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={Style["footer-buttons"]}>
        <img
          className={Style["footer-button"]}
          src="/images/socials.png"
          alt=""
        />
        <img
          className={Style["footer-button"]}
          src="/images/socials-1.png"
          alt=""
        />
        <img
          className={Style["footer-button"]}
          src="/images/socials-2.png"
          alt=""
        />
        <img
          className={Style["footer-button"]}
          src="/images/socials-3.png"
          alt=""
        />
        <img
          className={Style["footer-button"]}
          src="/images/socials-4.png"
          alt=""
        />
      </div>
      <h6 className={Style["footer-company"]}>AIR STUDIOS 2024</h6>
    </footer>
  );
};
