import Style from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={Style["header"]}>
        <div className={Style["header_container"]}>
          <img
            className={Style["header-image"]}
            src="/images/logo.png"
            alt="Логотип SchoolBook"
          />
          <nav className={Style["nav_menu"]}>
            <ul className={Style["header_links"]}>
              <li>Контакты</li>
              <li>Информация</li>
              <li>О нас</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
