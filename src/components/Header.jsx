import React from "react";
import { useTranslation } from "next-i18next";
import "../i18n";
import "../assets/styles/Header.css"; // CSS faylni import qilamiz

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="container">
      <header>
        <div className="header">
          <div className="header-logo">
            <img src="/images/logo.png" width={40} height={40} alt="Logo" />
            <span>
              <h1>Rizomulk Academy</h1>
              <span className="description">{t("description")}</span>
            </span>
          </div>
          <div className="header-nav">
            <a href="#home">{t("nav1")}</a>
            <a href="#courses">{t("nav2")}</a>
            <a href="#teacher">{t("nav3")}</a>
            <a href="#student">{t("nav4")}</a>
          </div>
          <div className="header-lang">
            <select onChange={changeLanguage} value={i18n.language} className="lang-select">
              <option value="ru">Русский</option>
              <option value="en"> English</option>
              <option value="uz"> O'zbekcha</option>
            </select>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
