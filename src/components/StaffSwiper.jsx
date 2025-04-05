import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/styles/staffswiper.css";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "next-i18next";
import "../i18n";
const StaffSwiper = () => {
  const { t, } = useTranslation();
  const staff = [
    { name: `${t("aida")}`, position: `${t("aip")}`, image: "/images/aida.jpg" },
    { name: `${t("qodir")}`, position: `${t("qp")}`, image: "/images/qodir.jpg" },
    { name: `${t("roman")}`, position: `${t("rop")}`, image: "/images/roman.jpg" },
    { name: `${t("nargiza")}`, position: `${t("nap")}`, image: "/images/.jpg" },
    { name: `${t("rizo")}`, position: `${t("rp")}`, image: "/images/rizo.jpg" },
    { name: `${t("elena")}`, position: `${t("ep")}`, image: "/images/elena.jpg" },
    { name: `${t("nigora")}`, position:`${t("nip")}`, image: "/images/nigora.jpg" },
    { name: `${t("alexandr")}`, position: `${t("ap")}`, image: "/images/.jpg" },
    { name: `${t("yulduz")}`, position: `${t("yp")}`, image: "/images/yulduz.JPG" },
    { name: `${t("sardor")}`, position: `${t("sp")}`, image: "/images/sardor.jpg" },
  ];

  return (
    <div className="staff-swiper">
      <h2>Our Staff</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4} // Default - katta ekran uchun
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          980: { slidesPerView: 4 }, // Katta ekranlar
          725: { slidesPerView: 3 },  // O‘rta ekranlar
          516: { slidesPerView: 2 },  // Planshet o‘lchamidagi ekranlar
          375: { slidesPerView: 1 },  // Kichik ekranlar (mobil uchun 1ta)

        }}
      >
        {staff.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="staff-card">
              <img src={member.image} alt={member.name} className="staff-image" />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StaffSwiper;
