import { useTranslation } from "next-i18next";
import "../i18n";
import "../assets/styles/courses.css";
import Modal from "./Modal";
import { useState } from "react";

function Courses() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const formatPrice = (price) => {
  //   return price.toLocaleString("ru-RU"); // Narxni "3 999 000" kabi formatlash
  // };
  return (
    <>
      <div className="container">
        <div className="courses">
          <div className="course-card">
            <h1>{t("course1")}</h1>
            <span className="cost ">
              {t("price")} {t("cost")}
            </span>
            <div className="course-content">
              <span className="zb1">{t("tarif1")}</span>
              <span>{t("tarif1_1")}</span>
              <span>{t("tarif1_2")}</span>
              <span>{t("tarif1_3")}</span>
              <span>{t("tarif1_4")}</span>
            </div>
            <button onClick={() => setIsModalOpen(true)}>{t("btn")}</button>
          </div>
          <div className="course-card">
            <h1>{t("course2")}</h1>
            <span className="cost">
              {t("price2")} {t("cost")}
            </span>
            <div className="course-content">
              <span>+{t("course1")}</span>
              <span>{t("tarif2")}</span>
              <span>{t("tarif2_0")}</span>
              <span>{t("tarif2_2")}</span>
              <span>{t("tarif2_3")}</span>
              <span>{t("tarif2_1")}</span>
            </div>
            <button onClick={() => setIsModalOpen(true)}>{t("btn")}</button>
          </div>
          <div className="course-card">
            <h1 className="zb">{t("course3")}</h1>
            <span className="cost">
              {t("price3")} {t("cost")}
            </span>
            <div className="course-content">
              <span>+{t("course1")}</span>
              <span>+ {t("course2")}</span>
              <span>{t("tarif3")}</span>
              <span>{t("tarif3_1")}</span>
              <span>{t("tarif3_2")}</span>
              <span>{t("tarif3_3")}</span>
              <span>{t("tarif3_4")}</span>
              <span>{t("tarif3_5")}</span>
            </div>
            <button onClick={() => setIsModalOpen(true)}>{t("btn")}</button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Courses;
