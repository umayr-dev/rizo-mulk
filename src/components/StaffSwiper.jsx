import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/styles/staffswiper.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useTranslation } from "next-i18next";
import "../i18n";

const StaffSwiper = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null); // Mobil uchun aktiv elementni boshqarish

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const staff = [
    {
      name: `${t("aida")}`,
      position: `${t("aip")}`,
      image: "/images/aidaa.jpg",
      info: "Сертифицированный специалист   RIELTORNING MALAKA SERTIFIKATI №  2290 - son",
    },
    {
      name: `${t("qodir")}`,
      position: `${t("qp")}`,
      image: "/images/qodir0.PNG",
      info: "Ташкентский государственный Экономический университет- Бакалавр RIELTORNINСертифицированный специалист G MALAKA SERTIFIKATI №  2157 - son",
    },
    {
      name: `${t("roman")}`,
      position: `${t("rop")}`,
      image: "/images/roman2.jpg",
      info: "Сертифицированный специалист курса риелторов СПБ имени Н. ЛабетскогоСертифицированный специалист RIELTORNING MALAKA SERTIFIKATI 2289 - son",
    },
    {
      name: `${t("elena")}`,
      position: `${t("ep")}`,
      image: "/images/elenaa.jpg",
      info: "Московский гуманитарно-экономический институт «Психология»",
    },
    {
      name: `${t("nigora")}`,
      position: `${t("nip")}`,
      image: "/images/nigoraa.jpg",
      info: "ТГЭУ, Курсы Финансовой грамотности",
    },
    {
      name: `${t("yulduz")}`,
      position: `${t("yp")}`,
      image: "/images/yulduzz.jpg",
      info: "ТДИУ - менеджмент и маркетинг-бакалавр",
    },
    {
      name: `${t("xanifa")}`,
      position: `${t("xp")}`,
      image: "/images/xanifa.jpg",
      info: `${t("xi")}`,
    },
    {
      name: `${t("alex")}`,
      position: `${t("alp")}`,
      image: "/images/alex.jpg",
      info: `${t("ali")}`,
    },
    // {
    //   name: `${t("bekzod")}`,
    //   position: `${t("bp")}`,
    //   image: "/images/bekzod.jpg",
    //   info: `${t("bi")}`,
    // },
    {
      name: `${t("andrey")}`,
      position: `${t("anp")}`,
      image: "/images/andrey.JPG",
      info: `${t("ani")}`,
    },
    {
      name: `${t("nargizaa")}`,
      position: `${t("naap")}`,
      image: "/images/nargiza.jpg",
      info: `${t("naai")}`,
    },
  ];

  return (
    <div className="staff-swiper-container">
      <div className="staff-swiper">
        <h2>{t("staff")}</h2>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={10}
          loop={true}
          slidesPerView={4} // Default - katta ekran uchun
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            980: { slidesPerView: 4 }, // Katta ekranlar
            725: { slidesPerView: 3 }, // O‘rta ekranlar
            516: { slidesPerView: 2 }, // Planshet o‘lchamidagi ekranlar
            375: { slidesPerView: 1 }, // Kichik ekranlar (mobil uchun 1ta)
          }}
        >
          {staff.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className={`staff-card ${
                  activeIndex === index ? "active" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)} // Sichqoncha ustiga borganda
                onMouseLeave={() => setActiveIndex(null)} // Sichqoncha chiqib ketganda
                onClick={() => setActiveIndex(index)} // Mobil uchun bosganda
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="staff-image"
                />
                <div className="staff-content">
                  <h2>{member.name}</h2>
                  <p>{member.position}</p>
                  <p className="staff-info">{member.info}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation buttons butunlay tashqarida */}
      <div className="swiper-navigation-external">
        <button ref={prevRef} className="swiper-button-prev"></button>
        <button ref={nextRef} className="swiper-button-next"></button>
      </div>
    </div>
  );
};

export default StaffSwiper;
