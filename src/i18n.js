import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tarjima matnlari
const resources = {
  uz: {
    translation: {
      description: "Qo'shimcha ta'lim va ofline kurslar",
      nav1: "Qabul",
      nav2: "Dastur",
      nav3: "Akademik hayot",
      nav4: "Biz haqimizda",
      nav5: "Bizning kontaktlar",
      nav6: "Ijtimoiy tarmoqlarimiz",
      bannertitle1: "qo'shiling",
      bannertitle: "Bizga",
      
      bannerdescription: "O'qituvchilar va talabalar uchun juda ko'p.Loyiha ta'limni yanada qulayroq qilishga harakat qilmoqda",
      search: "Saytdan izlash...",
      searchbtn: "Qidirish",
    }
  },
  en: {
    translation: {
      description: "Further education and ofline courses",
      nav1: "Admissin",
      nav2: "Program",
      nav3: "Akademic life",
      nav4: "About us",
      nav5: "Our contacts",
      nav6: "Social Media",
      bannertitle: "Join the",
      bannertitle1: " first",
      bannerdescription: "And much more for teachers and students. The project tries to make education more accessible",
      search: "Search the site...",
      searchbtn: "Search",
    }
  },
  ru: {
    translation: {
      description: "Дополнительное образование и офлайн-курсы",
      nav1: "поступление",
      nav2: "Программа",
      nav3: "Академическая жиз",
      nav4: "О нас",
      nav5: "Наши контакты",
      nav6: "Соц сети",
      bannertitle: "*Присоединяйся к",
      bannertitle1: "первым",
      bannerdescription: "и создавай свое будущее уже сегодня! Знания, которые открывают двери к лучшей карьере! *Мы создаем лидеров недвижимости. Присоединяйся – стань одним из лучших",
      search: "Искать по сайту...",
      searchbtn: "Найти",
    }
  }
};

i18n
  .use(initReactI18next) // React uchun integratsiya
  .init({
    resources,
    lng: "ru", // Standart til
    fallbackLng: "uz", // Agar tarjima topilmasa, ushbu til ishlatiladi
    interpolation: {
      escapeValue: false, // React JSX bilan moslashuv
    }
  });

export default i18n;
