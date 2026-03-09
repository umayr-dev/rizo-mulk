import "../assets/styles/admissin.css";
import { useTranslation } from "react-i18next";

function Admissin() {
  const { i18n, t } = useTranslation();

  // Tilga qarab rasmni tanlash
  const getImageByLanguage = () => {
    switch (i18n.language) {
      case "ru":
        return "/images/rupptx.jpg"; // Ruscha rasm
      case "en":
        return "/images/enpptx.jpg"; // Inglizcha rasm
      case "uz":
        return "/images/uzpptx.jpg"; // O'zbekcha rasm
      default:
        return "/images/rupptx.jpg"; // Default rasm
    }
  };

  return (
    <>
      <div className="container">
        <div className="admissin">
          <img
            src={getImageByLanguage()}
            width={1200}
            height={800}
            alt="Instruction"
          />
        </div>
        <div className="admissin2">
          <img src="/images/kun1.png" alt="Kun 1" />
          <img src="/images/kun2.png" alt="Kun 2" />
          <img src="/images/kun3.png" alt="Kun 3" />
          <img src="/images/day41.png" alt="Kun 4" />
        </div>
        <div className="admissin3">
          <div className="admissin3-card">
            <span>{t("book")}</span>
            <a
              href="/books.xlsx"
              download
              style={{
                marginLeft: "10px",
                color: "#007bff",
                textDecoration: "underline",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              Download
              <img src="/images/download.png" alt="Download Icon" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admissin;
