"use client";

import Link from "next/link";
import Style from "./Header.module.css";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <header className={Style["header"]}>
        <div className={Style["header_container"]}>
          {pathname === "/" ? (
            <img
              className={Style["header-image"]}
              src="/images/logo.svg"
              alt="Логотип SchoolBook"
            />
          ) : (
            <Link href="/">
              <img
                className={Style["header-image"]}
                src="/images/logo.svg"
                alt="Логотип SchoolBook"
              />
            </Link>
          )}

          <nav className={Style["nav_menu"]}>
            <ul className={Style["header_links"]}>
              <li>Контакты</li>
              <li>Информация</li>
              <li>О нас</li>
              <a href="/sign/signup" className={Style["registration"]}>
                Регистрация
              </a>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
