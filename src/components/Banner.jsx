import React from 'react'
import { useTranslation } from "next-i18next";
import "../i18n";
import "../assets/styles/Banner.css"; // CSS faylni import qilamiz
function Banner() {
    const { t, i18n } = useTranslation();
    
  return (
    <>
    <div className="container">
        <div className="banner">
            <div className="banner-content">
                <div className="title">
                <h1>{t("bannertitle")} <span className='orange'>{t("bannertitle1")}</span></h1>
                </div>
                <span>{t("bannerdescription")}</span>
                <div className="search">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f1f1f1" stroke-width="2" stroke-linecap="round" strokelinejoin="round" className="lucide lucide-search-icon lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    <input type="text"placeholder={t("search")} />
                    </span>
                    <button>{t("searchbtn")}</button>
                </div>
            </div>

            <div className="banner-img">
                <img src="/images/banner.png" width={650} height={400} alt="" />
            </div>
        </div>
        <div className="ustunlik">
            <div className="first">
                <img src="/images/online-test 1.png" alt="" />
                <div className="first-content">

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner