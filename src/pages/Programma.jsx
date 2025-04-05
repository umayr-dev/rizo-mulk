import { useTranslation } from "next-i18next";
import "../i18n";
import "../assets/styles/admissin.css";

function Programma() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container">
        <div className="programma">
          <div className="prog-card">
            <div className="programma-content">
              <h1>{t("prog")}</h1>
              <span>{t("prog2")}</span>
            </div>
            <img src="/images/programm.jpeg" alt="" />
          </div>

          <div className="prog-card">
            <div className="programma-content">
              <h1>{t("prog1_1")}</h1>
              <span>{t("prog2_2")}</span>
            </div>
            <img src="/images/programm2.jpeg" alt="" />
          </div>

          <div className="prog-card">
            <div className="programma-content">
              <h1>{t("prog3_1")}</h1>
              <span>{t("prog3_2")}</span>
            </div>
            <img src="/images/programm3.jpeg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Programma;
