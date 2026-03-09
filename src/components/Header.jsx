import { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import "../i18n";
import "../assets/styles/Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
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
    window.scrollTo(0, 0);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, pathname ]);

  return (
    <div className="container">
      <header>
        <div className="header">
          <Link to={"/"}>
          <div className="header-logo">
            <img src="/images/rizo mulk logo.png" width={100} height={100} alt="Logo" />
            <span>
              <h1>Rizomulk Academy</h1>
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
                    <a href="">{t("drop11")}</a>
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
                  <a href="">{t("drop44")}</a>
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
                    {/* <a href="">{t("drop31")}</a> */}
                    <a href="">{t("drop32")}</a>
                    <a href="">{t("drop34")}</a>
                  </div>
                </div>
                </Link>
              </div>

              <div className="nav-item">
                <Link to={"/about"}>
                <a href="">{t("nav4")}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                  <a href="">{t("drop4")}</a>
                  <a href="">{t("drop4_1")}</a>
                  <a href="">{t("drop4_2")}</a>
                  </div>
                </div>
                </Link>
              </div>
              <div className="nav-item">
                <Link to={"/faq"}>
                <a href="">{t("nav")}</a>
                <div className="nav-dropdown">
                  <div className="dropdown-content">
                  <a href="">{t("drop5")}</a>
                  <a href="">{t("drop5_1")}</a>
                  <a href="">{t("drop5_2")}</a>
                  <a href="">{t("drop5_3")}</a>
                    
                  </div>
                </div>
                </Link>
              </div>

              <div className="nav-item">
                <a href="#footer">{t("nav5")}</a>
              </div>


              {/* <div className="nav-item">
                <a href="#footer">{t("nav6")}</a>
              </div>
       */}
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
         <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)}></div>}


        {/* Mobile menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
        <div className="mobile-close" onClick={() =>  {console.log("Close clicked"); setMenuOpen(false)}}>✖</div>


          <div className="mobile-lang">
            <select onChange={changeLanguage} value={i18n.language} className="lang-select">
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="uz">O`zbekcha</option>
            </select>
          </div>

          <div className="mobile-nav">
            <div className="nav-item1">
               <Link  to={"/admission"} onClick={() => setMenuOpen(false)}>
                {t("nav1")}
               </Link> 
              </div>

              <div className="nav-item1">
                <Link to={"/program"} onClick={() => setMenuOpen(false)}>
                {t("nav2")}
               </Link> 
              </div>

              <div className="nav-item1">
                <Link to={"/academiclife"} onClick={() => setMenuOpen(false)}>
                {t("nav3")}
                </Link>
              </div>

              <div className="nav-item1">
                <Link
              onClick={() => setMenuOpen(false)}
                 to={"/about"}>
            {t("nav4")}
                </Link>
               
              </div>
              <div className="nav-item1">
                <Link to={"/faq"} onClick={()=> setMenuOpen(false)}>
                {t("nav")}
                </Link>
              </div>

              <div className="nav-item1">
                <a  onClick={() => setMenuOpen(false)} href="#footer">{t("nav5")}</a>
              </div>


              {/* <div className="nav-item1">
                <a id="#footer" onClick={() => setMenuOpen(false)} href="#footer">{t("nav6")}</a>
                
              </div> */}
      
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
