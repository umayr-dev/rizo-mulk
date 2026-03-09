import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Play } from "lucide-react";
import "../assets/styles/academiclife.css";
import { useTranslation } from "next-i18next";
const academicData = [
  {
    id: 2,
    type: "image",
    url: "/images/academiclife.jpg",
    title: "Science Diagram",
  },
  {
    id: 7,
    type: "image",
    url: "/images/academiclife4.jpg",
    title: "Science Diagram",
  },
  {
    id: 8,
    type: "image",
    url: "/images/academiclife5.jpg",
    title: "Science Diagram",
  },
  {
    id: 9,
    type: "image",
    url: "/images/academiclife6.jpg",
    title: "Science Diagram",
  },
  {
    id: 10,
    type: "image",
    url: "/images/academiclife7.jpg",
    title: "Science Diagram",
  },
  // {
  //   id: 11,
  //   type: "image",
  //   url: "/images/i.jpg",
  //   title: "Science Diagram",
  // },
  {
    id: 12,
    type: "image",
    url: "/images/i1.jpg",
    title: "Science Diagram",
  },
  // {
  //   id: 13,
  //   type: "image",
  //   url: "/images/i2.jpg",
  //   title: "Science Diagram",
  // },
  {
    id: 14,
    type: "image",
    url: "/images/i3.jpg",
    title: "Science Diagram",
  },
  {
    id: 15,
    type: "image",
    url: "/images/i4.jpg",
    title: "Science Diagram",
  },
  {
    id: 16,
    type: "image",
    url: "/images/i5.jpg",
    title: "Science Diagram",
  },
  {
    id: 17,
    type: "image",
    url: "/images/i6.jpg",
    title: "Science Diagram",
  },
  {
    id: 18,
    type: "image",
    url: "/images/i7.jpg",
    title: "Science Diagram",
  },
  {
    id: 19,
    type: "image",
    url: "/images/i8.jpg",
    title: "Science Diagram",
  },
];
const academicCampus = [
  {
    id: 2,
    type: "image",
    url: "/images/campus.PNG",
    title: "Science Diagram",
  },
  {
    id: 7,
    type: "image",
    url: "/images/campus1.PNG",
    title: "Science Diagram",
  },
  {
    id: 8,
    type: "image",
    url: "/images/campus2.PNG",
    title: "Science Diagram",
  },
  {
    id: 9,
    type: "image",
    url: "/images/campus3.PNG",
    title: "Science Diagram",
  },
  {
    id: 10,
    type: "image",
    url: "/images/campus4.PNG",
    title: "Science Diagram",
  },
  {
    id: 11,
    type: "image",
    url: "/images/campus5.PNG",
    title: "Science Diagram",
  },
  // {
  //   id: 11,
  //   type: "image",
  //   url: "/images/campus6.PNG",
  //   title: "Science Diagram",
  // },
];

const academicVideos = [
  {
    id: 1,
    type: "video",
    url: "/videos/video3.mp4",
    title: "Academic Life Video 1",
  },
  {
    id: 2,
    type: "video",
    url: "/videos/video.MP4",
    title: "Academic Life Video 2",
  },
  {
    id: 3,
    type: "video",
    url: "/videos/video1.MP4",
    title: "Academic Life Video 3",
  },
  {
    id: 4,
    type: "video",
    url: "/videos/video2.MP4",
    title: "Academic Life Video 4",
  },
];
export default function AcademicLife() {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoModal, setSelectedVideoModal] = useState(null);

  return (
    <>
      <div className="container">
        <div className="academic-container">
          <h2 className="academic-title">{t("life")}</h2>
          <Swiper
            navigation
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="academic-swiper"
          >
            {academicData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="academic-card">
                  {item.type === "video" ? (
                    <div className="academic-video-wrapper">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="academic-thumbnail"
                      />
                      <button
                        onClick={() => setSelectedVideo(item.url)}
                        className="academic-play-button"
                      >
                        <Play className="play-icon" />
                      </button>
                    </div>
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="academic-thumbnail"
                      onClick={() => setSelectedVideo(item.url)} // Rasmga bosilganda modalni ochish
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {selectedVideo && (
            <div className="academic-modal">
              <div className="academic-modal-content">
                <img
                  src={selectedVideo}
                  alt="Original Image"
                  className="academic-original-image"
                />
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="academic-close-button"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Video Swiper Section */}
        <div className="academic-container">
          <h2 className="academic-title">{t("videos")}</h2>
          <Swiper
            navigation
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="academic-swiper"
          >
            {academicVideos.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="academic-card">
                  <div className="academic-video-wrapper">
                    <video
                      src={item.url}
                      className="academic-thumbnail"
                      muted
                      loop
                      preload="metadata"
                    />
                    <button
                      onClick={() => setSelectedVideoModal(item.url)}
                      className="academic-play-button"
                    >
                      <Play className="play-icon" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {selectedVideoModal && (
            <div className="academic-modal">
              <div className="academic-modal-content">
                <video
                  src={selectedVideoModal}
                  controls
                  autoPlay
                  className="academic-original-video"
                >
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={() => setSelectedVideoModal(null)}
                  className="academic-close-button"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* <div className="video-wrapper">
          <video width="60%" height="auto" controls>
            <source src="/videos/video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}

        <div className="academic-container">
          <h2 className="academic-title">{t("campus")}</h2>
          <Swiper
            navigation
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="academic-swiper"
          >
            {academicCampus.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="academic-card">
                  {item.type === "video" ? (
                    <div className="academic-video-wrapper">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="academic-thumbnail"
                      />
                      <button
                        onClick={() => setSelectedVideo(item.url)}
                        className="academic-play-button"
                      >
                        <Play className="play-icon" />
                      </button>
                    </div>
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="academic-thumbnail"
                      onClick={() => setSelectedVideo(item.url)} // Rasmga bosilganda modalni ochish
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {selectedVideo && (
            <div className="academic-modal">
              <div className="academic-modal-content">
                <img
                  src={selectedVideo}
                  alt="Original Image"
                  className="academic-original-image"
                />
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="academic-close-button"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="oav">
          <h1>{t("oav")}</h1>
          <a href="/html.htm">https://rizomulkacademy.uz/html.htm</a>
          <a href="/htm1.htm">https://rizomulkacademy.uz/htm1.htm</a>
          <a href="/fayl.htm">https://rizomulkacademy.uz/fayl.htm</a>
          <a href="/f1.htm">https://rizomulkacademy.uz/f1.htm</a>
          <a href="/f2.htm">https://rizomulkacademy.uz/f2.htm</a>
          <a href="/f3.htm">https://rizomulkacademy.uz/f3.htm</a>
        </div>
      </div>
    </>
  );
}
