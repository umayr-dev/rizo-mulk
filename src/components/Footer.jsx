import { useState, useRef, useEffect } from "react";
import "../assets/styles/footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [mapInteractive, setMapInteractive] = useState(false);
  const mapRef = useRef(null);

  const botToken = "7935816289:AAH-sgAo1-N_fmdKAdo66ab85ZX1tKnWOjw";
  const chatId = "-1002678371666";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  // Map control functions
  const enableMapInteraction = () => {
    setMapInteractive(true);
    if (mapRef.current) {
      mapRef.current.style.pointerEvents = "auto";
    }
  };

  const disableMapInteraction = () => {
    setMapInteractive(false);
    if (mapRef.current) {
      mapRef.current.style.pointerEvents = "none";
    }
  };

  const toggleMapInteraction = () => {
    if (mapInteractive) {
      disableMapInteraction();
    } else {
      enableMapInteraction();
    }
  };

  // Escape tugmasi bilan map interaction ni o'chirish
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape" && mapInteractive) {
        disableMapInteraction();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [mapInteractive]);

  // const clearPhone = () => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     phone: "",
  //   }));
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const message = `
      🔹 <b>Yangi Xabar!</b> 🔹
      📝 <b>Ism:</b> ${formData.name}
      📧 <b>Email:</b> ${formData.phone}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const params = {
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    };

    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });

      alert("Xabar yuborildi!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      alert("Xabar yuborishda muammo yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="map-placeholder">
            <div className="map-container">
              <iframe
                ref={mapRef}
                width={800}
                height={350}
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6349337483216!2d69.27439629999999!3d41.3168048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2a6565712d%3A0x790feb8933429946!2z0J3QsNGG0LjQvtC90LDQu9GM0L3QsNGPINCR0LjQsdC70LjQvtGC0LXQutCwINCj0LfQsdC10LrQuNGB0YLQsNC90LAg0LjQvC4g0JAuINCd0LDQstC-0Lg!5e0!3m2!1sru!2s!4v1744184772722!5m2!1sru!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ pointerEvents: mapInteractive ? "auto" : "none" }}
              ></iframe>

              {/* Map Control Overlay */}
              {!mapInteractive && (
                <div className="map-overlay" onClick={enableMapInteraction}>
                  <div className="map-overlay-content">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p>Xaritani faollashtirish uchun bosing</p>
                    <small>ESC tugmasi bilan chiqish</small>
                  </div>
                </div>
              )}

              {/* Map Controls */}
              {mapInteractive && (
                <div className="map-controls">
                  <button
                    className="map-control-btn"
                    onClick={disableMapInteraction}
                    title="Xaritani o'chirish"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button
                    className="map-control-btn"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/place/Национальная+Библиотека+Узбекистана+им.+А.+Навои/@41.3168048,69.27439629999999,17z",
                        "_blank"
                      )
                    }
                    title="Google Maps da ochish"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </button>
                </div>
              )}
            </div>
            <div className="location-info">
              <span>{t("f2")}</span>
              <span>{t("f1")}</span>
              <span>{t("f3")}</span>
              <span>{t("f5")}</span>
              <span>{t("f4")}</span>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>{t("order")}</h3>
            <input
              type="text"
              name="name"
              placeholder="ИМЯ"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="+998 90 000 00 00"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
            />
            {/* {formData.phone && (
              <button type="button" onClick={clearPhone} className="clear-btn">
                X
              </button>
            )} */}
            <button type="submit" disabled={loading}>
              {loading ? "Yuborilmoqda..." : `${t("sbbtn")}`}
            </button>
          </form>
          <div className="contact-info">
            <h3>{t("contact")}</h3>
            <p>
              <strong>{t("gps")}</strong>
            </p>
            <p>{t("jps")}</p>
            <p>
              <strong>{t("tel")}</strong> +998 77 070 38 83
            </p>
            <p>
              <strong>{t("eml")}:</strong>
              <span> rizomulk@gmail.com</span>
            </p>
            <div className="social">
              <a href="https://www.instagram.com/rizomulkacademy?igsh=MTh5OWM4ZzZ1b3F5Zg==">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Instagram
              </a>
              <a href="https://www.facebook.com/share/1Yf3JgZyGk/?mibextid=wwXIfr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook-icon lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </a>
              <a href="https://youtube.com/@rizomulkacademy?si=WBsWEif16ywofRs2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube-icon lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
