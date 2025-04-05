import { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import "../i18n";
import "../assets/styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  // const navItems = ["nav1", "nav2", "nav3", "nav4", "nav5", "nav6"];

  // const toggleDropdown = (key) => {
  //   setActiveDropdown((prev) => (prev === key ? null : key));
  // };

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
          <Link to={"/"}>
          <div className="header-logo">
            <img src="/images/rizo mulk logo.png" width={80} height={80} alt="Logo" />
            <span>
              <h1>Rizomulk Academy</h1>
              {/* <span className="description">{t("description")}</span> */}
            </span>
          </div>
          </Link>

          {/* Desktop nav */}
          <div className="header-nav desktop-nav">
           
              <div className="nav-item">
               <Link to={"/admission"}>
                <a href="">{t("nav1")}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                    <a href="">{t("drop1")}</a>
                  </div>
                </div>
               </Link> 
              </div>

              <div className="nav-item">
                <Link to={"/program"}>
                <a href="">{t("nav2")}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                  <a href="">{t("drop21")}</a>
                    <a href="">{t("drop22")}</a>
                    <a href="">{t("drop23")}</a>
                  </div>
                </div>
               </Link> 
              </div>

              <div className="nav-item">
                <Link to={"/academiclife"}>
                <a href="">{t("nav3")}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                    <a href="">{t("drop31")}</a>
                    <a href="">{t("drop32")}</a>
                    <a href="">{t("drop33")}</a>
                    
                  </div>
                </div>
                </Link>
              </div>

              <div className="nav-item">
                <a href="">{t("nav4")}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                  <a href="">{t("drop4")}</a>
                    
                  </div>
                </div>
              </div>
              <div className="nav-item">
                <a href="">{t("nav")}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                  <a href="">{t("drop5")}</a>
                    
                  </div>
                </div>
              </div>

              <div className="nav-item">
                <a href="">{t("nav5")}</a>
              </div>


              <div className="nav-item">
                <a href="">{t("nav6")}</a>
              </div>
      
          </div>

          {/* Desktop lang */}
          <div className="header-lang desktop-lang">
            <select onChange={changeLanguage} value={i18n.language} className="lang-select">
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="uz">O`zbekcha</option>
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
              <option value="uz">O`zbekcha</option>
            </select>
          </div>

          <div className="mobile-nav">
            <div className="nav-item">
               <Link to={"/admission"}>
                <a href="">{t("nav1")}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                    <a href="">{t("drop1")}</a>
                  </div>
                </div>
               </Link> 
              </div>

              <div className="nav-item">
                <Link to={"/program"}>
                <a href="">{t("nav2")}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                  <a href="">{t("drop21")}</a>
                    <a href="">{t("drop22")}</a>
                    <a href="">{t("drop23")}</a>
                  </div>
                </div>
               </Link> 
              </div>

              <div className="nav-item">
                <Link to={"/academiclife"}>
                <a href="">{t("nav3")}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                    <a href="">{t("drop31")}</a>
                    <a href="">{t("drop32")}</a>
                    <a href="">{t("drop33")}</a>
                    
                  </div>
                </div>
                </Link>
              </div>

              <div className="nav-item">
                <a href="">{t("nav4")}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                  <a href="">{t("drop4")}</a>
                    
                  </div>
                </div>
              </div>
              <div className="nav-item">
                <a href="">{t("nav")}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                  <a href="">{t("drop5")}</a>
                    
                  </div>
                </div>
              </div>

              <div className="nav-item">
                <a href="">{t("nav5")}</a>
              </div>


              <div className="nav-item">
                <a href="">{t("nav6")}</a>
              </div>
      
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
