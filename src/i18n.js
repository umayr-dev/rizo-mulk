import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tarjima matnlari
const resources = {
  uz: {
    translation: {
      description: "Qo'shimcha ta'lim va onlayn kurslar",
      nav1: "Asosiy",
      nav2: "Kurslar",
      nav3: "Bizning jamoa",
      nav4: "O'quvchilar",
      bannertitle1: "kurslari",
      bannertitle: "O'quv",
      bannertitle2: "Vazifa generatorlari",
      bannerdescription: "O'qituvchilar va talabalar uchun juda ko'p.Loyiha ta'limni yanada qulayroq qilishga harakat qilmoqda",
      search: "Saytdan izlash...",
      searchbtn: "Qidirish",
    }
  },
  en: {
    translation: {
      description: "Further education and online courses",
      nav1: "Home",
      nav2: "Courses",
      nav3: "Our Team",
      nav4: "Student",
      bannertitle: "Learning",
      bannertitle1: "Courses",
      bannertitle2: "Task generators    ",
      bannerdescription: "And much more for teachers and students. The project tries to make education more accessible",
      search: "Search the site...",
      searchbtn: "Search",
    }
  },
  ru: {
    translation: {
      description: "Дополнительное образование и онлайн-курсы",
      nav1: "Главная",
      nav2: "Курсы",
      nav3: "Hаша команда",
      nav4: "Ученику",
      bannertitle: "Учебные",
      bannertitle1: "курсы",
      bannertitle2: "Генераторы задач",
      bannerdescription: "И многое другое для учителей и обучающихся.Проект старается сделать онлайн образовательние более доступным",
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
