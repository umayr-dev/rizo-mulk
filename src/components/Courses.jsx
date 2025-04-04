import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import "../i18n";
import "../assets/styles/courses.css";
import Modal from "./Modal";

function Courses() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formatPrice = (price) => {
    return price.toLocaleString("ru-RU"); // Narxni "3 999 000" kabi formatlash
  };
  return (
    <>
      <div className="container">
        <div className="courses">
          {["course1", "course2", "course3"].map((course, index) => (
            <div className="course-card" key={index}>
              <h1>{t(course)}</h1>
              <span className="cost">{formatPrice([3999000, 6499000, 12999000][index])} {t("cost")}</span>
              <span>{t(`tarif${index + 1}`)}</span>
              <button onClick={() => setIsModalOpen(true)}>{t("btn")}</button>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Courses;
