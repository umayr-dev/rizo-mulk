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
              <span>{t("prog22")}</span>
              <span>{t("prog223")}</span>
              <span>{t("prog224")}</span>
            </div>
          </div>

          <div className="prog-card">
            <div className="programma-content">
              <h1>{t("pro4_1")}</h1>
              <span>{t("prog4_2")}</span>
              <span>{t("prog4_3")}</span>
              <span>{t("prog4_4")}</span>
              <span>{t("prog4_5")}</span>
              <span>{t("prog4_6")}</span>
              <span>{t("prog4_7")}</span>
              <span>{t("prog4_8")}</span>
            </div>
          </div>

          <div className="prog-card">
            <div className="programma-content">
              <h1>{t("prog1_1")}</h1>
              <span>{t("prog2_2")}</span>
              <span>{t("prog2_21")}</span>
              <span>{t("prog2_22")}</span>
            </div>
          </div>

          <div className="prog-card">
            <div className="programma-content">
              <h1>{t("prog3_1")}</h1>
              <span>{t("prog3_2")}</span>
            </div>
            {/* <img src="/images/programm3.jpeg" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Programma;
