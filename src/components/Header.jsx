import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import "../i18n";
import "../assets/styles/Header.css";

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const navItems = ["nav1", "nav2", "nav3", "nav4", "nav5", "nav6"];

  const toggleDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="container">
      <header>
        <div className="header">
          <div className="header-logo">
            <img src="/images/logo.png" width={80} height={80} alt="Logo" />
            <span>
              <h1>Rizomulk Academy</h1>
              <span className="description">{t("description")}</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="header-nav desktop-nav">
            {navItems.map((key, index) => (
              <div className="nav-item" key={index}>
                <a href={`#${key}`}>{t(key)}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                    <a href="#sub1">Sub link 1</a>
                    <a href="#sub2">Sub link 2</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop lang */}
          <div className="header-lang desktop-lang">
            <select onChange={changeLanguage} value={i18n.language} className="lang-select">
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="uz">O'zbekcha</option>
            </select>
          </div>

          {/* Burger */}
          <div className="burger" onClick={() => setMenuOpen(true)}>
            ☰
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && <div className="mobile-overlay"></div>}

        {/* Mobile menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
          <div className="mobile-close" onClick={() => setMenuOpen(false)}>✖</div>

          <div className="mobile-lang">
            <select onChange={changeLanguage} value={i18n.language} className="lang-select">
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="uz">O'zbekcha</option>
            </select>
          </div>

          <div className="mobile-nav">
            {navItems.map((key, index) => (
              <div key={index} className="mobile-nav-item">
                <div
                  className="mobile-nav-title"
                  onClick={() => toggleDropdown(key)}
                >
                  {t(key)} {activeDropdown === key ? "▲" : "▼"}
                </div>
                {activeDropdown === key && (
                  <div className="mobile-subnav">
                    <a href="#sub1">Sub item 1</a>
                    <a href="#sub2">Sub item 2</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
