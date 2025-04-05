import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/styles/staffswiper.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const StaffSwiper = () => {
  const staff = [
    { name: "John Doe", position: "Frontend Developer", image: "/images/john.jpg" },
    { name: "Jane Smith", position: "Backend Developer", image: "/images/jane.jpg" },
    { name: "Alice Johnson", position: "UI/UX Designer", image: "/images/alice.jpg" },
    { name: "Bob Brown", position: "Project Manager", image: "/images/bob.jpg" },
    { name: "Charlie White", position: "DevOps Engineer", image: "/images/charlie.jpg" },
  ];

  return (
    <div className="staff-swiper">
      <h2>Our Staff</h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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