import React from "react";
import "../assets/styles/modal.css";
import { useTranslation } from "next-i18next";
import "../i18n";
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
   const { t, i18n } = useTranslation();
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>{t("modaltitle")}</h2>
        <form>
          <label>{t("title")} *</label>
          <input type="text" placeholder={t("title")} required />
          
          <label>{t("phone")}*</label>
          <input type="tel" placeholder={t("phone")} required />
          
          <label>{t("clock")}</label>
          <input type="text" placeholder={t("clock")} required />

          <div className="checkbox-container">
            <input type="checkbox" id="agree" required />
            <label htmlFor="agree">
              {t("acces")}{" "}
              <a href="#">Политикой конфиденциальности</a>.
            </label>
          </div>

          <button type="submit" className="submit-btn">
           {t("call")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
