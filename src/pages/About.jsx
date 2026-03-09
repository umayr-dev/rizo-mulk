import { useTranslation } from "next-i18next";
import "../assets/styles/Banner.css"; // CSS faylni import qilamiz
import StaffSwiper from "../components/StaffSwiper";
function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container">
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
      <StaffSwiper />

      <div className="container">
        <div className="partner">
          <h2>{t("partner")}</h2>
          <div className="image">
            <img src="/images/day1.png" width={200} height={170} alt="" />
            <img src="/images/day2.png" width={180} alt="" />
            <img src="/images/day3.png" width={420} height={200} alt="" />
            <img src="/images/day4.png" width={280} height={180} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
