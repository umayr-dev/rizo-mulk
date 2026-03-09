import "../assets/styles/admissin.css";
import { useTranslation } from "next-i18next";
import "../i18n";
function Faq() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container">
        <div className="faq">
          <div className="programma">
            <div className="prog-card1">
              <span>1. {t("prog_kard")}</span>
            </div>
            <div className="prog-card1">
              <span>2.{t("prog_kard2")}</span>
            </div>
            <div className="prog-card1">
              <span>3.{t("prog_kard3")}</span>
              
            </div>
            <div className="prog-card1">
              <a
                href="/faq.docx"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "10px",
                  color: "#007bff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  window.open("/faq2.pdf", "_blank");
                }}
              >
                {t("faq")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
