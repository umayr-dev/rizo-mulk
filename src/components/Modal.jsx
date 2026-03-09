import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import axios from "axios";
import { notification } from "antd"; // Ant Design notification
import "../assets/styles/modal.css";
import "../i18n";

const Modal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "", // To'liq ism
    lastName: "", // Familiya
    email: "", // Email
    phone: "", // Telefon raqami
    telegram: "", // Telegram username
    course: "", // Kurs tanlovi
  });

  const [status, setStatus] = useState("");

  // Telefon raqamini avtomatik formatlash
  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Telefon raqamini faqat raqam va "+" bilan formatlash
    value = value.replace(/[^+\d]/g, "");

    // Agar foydalanuvchi +998 dan boshlamagan bo'lsa, uni qo'shish
    if (!value.startsWith("+998")) {
      value = "+998" + value.replace("+", ""); // Agar boshlanishda +998 bo'lmasa, uni qo'shamiz
    }

    // Telefonni faqat 13 ta raqamdan iborat qilish
    if (value.length > 13) {
      value = value.slice(0, 13); // Telefon raqami maksimal uzunligi 13 belgidan oshmasligi kerak
    }

    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };

  // Telefonni o'chirish
  const clearPhone = () => {
    setFormData((prevData) => ({
      ...prevData,
      phone: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const botToken = "7935816289:AAH-sgAo1-N_fmdKAdo66ab85ZX1tKnWOjw";
    const chatId = "-1002678371666";

    const message = `
      Yangi form ma'lumoti:

      ФИО: ${formData.fullName}
     Электронная почта: ${formData.email}
      Номер телефона : ${formData.phone}
      имя пользователя Tелеграммы : ${formData.telegram}
      Курс : ${formData.course}
    `;

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          chat_id: chatId,
          text: message,
        }
      );

      if (response.status === 200) {
        // Success notification
        notification.success({
          message: "Muvaffaqiyatli",
          description: "Form ma'lumotlari muvaffaqiyatli yuborildi!",
          duration: 3, // 3 seconds
        });

        setStatus("Form ma'lumotlari muvaffaqiyatli yuborildi!");

        // Formni tozalash
        setFormData({
          fullName: "",
          lastName: "",
          email: "",
          phone: "",
          telegram: "",
          course: "", // Kursni ham tozalash
        });

        // Modalni yopish
        setTimeout(() => {
          onClose();
        }, 1000); // Modalni tezroq yopish
      } else {
        setStatus("Xatolik yuz berdi, qayta urinib ko'ring.");
      }
    } catch (error) {
      console.error("Xatolik yuz berdi:", error); // Konsolga xatolikni chiqarish
      setStatus("Xatolik yuz berdi, qayta urinib ko'ring.");
    }
  };

  // Modal ochilganida body scrollini to'xtatish
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Body scrollini o'chirish
    } else {
      document.body.style.overflow = "auto"; // Modal yopilganda scrollni tiklash
    }
    return () => {
      document.body.style.overflow = "auto"; // Component o'chirilganda scrollni tiklash
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ width: "500px" }}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>{t("modaltitle")}</h2>
        <form onSubmit={handleSubmit}>
          <label>{t("fullname")} *</label>
          <input
            type="text"
            name="fullName"
            placeholder={t("fullname")}
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            required
          />

          <label>{t("phone1")} *</label>
          <div className="phone-container">
            <input
              type="tel"
              name="phone"
              placeholder="+998 93 818 60 66"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
            />
            {formData.phone && (
              <button type="button" onClick={clearPhone} className="clear-btn">
                X
              </button>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Отправить
          </button>
        </form>

        {status && <p>{status}</p>}
      </div>
    </div>
  );
};

export default Modal;
