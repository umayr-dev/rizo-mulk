import React from 'react'
import { useTranslation } from "next-i18next";
import "../i18n";
import "../assets/styles/courses.css"
function Courses() {
    const { t, i18n } = useTranslation();
  return (
    <>
    <div className="container">
        <div className="courses">
            <div className="course-card">
                <h1>{t("course1")}</h1>
                <span>3 999 000{t("cost")}</span>
                <span>{t("tarif1")}</span>
                <button>{t("btn")}</button>

            </div>

            <div className="course-card">
                <h1>{t("course2")}</h1>
                <span>6 499 000 {t("cost")}</span>
                <span>{t("tarif2")}</span>
                <button>{t("btn")}</button>

            </div>

            <div className="course-card">
                <h1>{t("course3")}</h1>
                <span>12 999 000 {t("cost")}</span>
                <span>{t("tarif3")}</span>
                <button>{t("btn")}</button>

            </div>
        </div>
    </div>
    </>
  )
}

export default Courses