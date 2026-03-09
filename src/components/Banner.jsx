import { useTranslation } from "next-i18next";
import "../assets/styles/Banner.css"; // CSS faylni import qilamiz
function Banner() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <div className="title">
              <h1>
                {t("bannertitle")}{" "}
                <span className="orange">{t("bannertitle1")}</span>
              </h1>
            </div>
            <span>{t("bannerdescription")}</span>
          </div>

          <div className="banner-img">
            <img src="/images/forbes.png" width={700} height={420} alt="" />
            <span>
              {t("forbes").split("Forbes").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <>
                    {part}
                    <a
                      href="https://www.forbes.ru/forbeslife/540033-nedela-potreblenia-akademia-rieltorov-i-letnie-festivali?image=521654#:~:text=%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F%20%D1%80%D0%B8%D0%B5%D0%BB%D1%82%D0%BE%D1%80%D0%BE%D0%B2%20Rizomulk%20Academy%20%D0%B2%20%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D0%B5"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue", fontWeight: "bold" }}
                    >
                      Forbes
                    </a>
                  </>
                ) : (
                  part
                )
              )}
            </span>
          </div>
        </div>

        <div className="ustunlik">
          <div className="card">
            <span>
              <img
                width={54}
                height={54}
                src="/images/online-test 1.png"
                alt=""
              />
            </span>
            <div className="card-content">
              <h1>{t("banner1")}</h1>
              <span>{t("b1d")}</span>
            </div>
          </div>
          <div className="card">
            <span>
              <img width={54} height={54} src="/images/exam 1.png" alt="" />
            </span>
            <div className="card-content">
              <h1>{t("banner2")}</h1>
              <span>{t("b2d")}</span>
            </div>
          </div>
          <div className="card">
            <span>
              <img
                width={54}
                height={54}
                src="/images/certification 1.png"
                alt=""
              />
            </span>
            <div className="card-content">
              <h1>{t("banner3")}</h1>
              <span>{t("b3d")}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
