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
      banner1: "Missiya",
      banner2: "Qiymatlar",
      banner3: "Tasavvur",
      b1d: "Ko‘chmas mulk sohasida yangi avlod professionallarini tayyorlash: ambitsiyali, analitik fikrlaydigan va bozorni chuqur tushunadigan rieltorlarni shakllantirish. Ular kasbdagi standartlar va yondashuvlarni o‘zgartirish qobiliyatiga ega bo‘ladilar. Biz amaliy, qadrli va ijtimoiy jihatdan muhim ta’limni taqdim etamiz. Bu bizning tinglovchilarimizga nafaqat bilim, balki real tajriba, ishonch va o‘sish uchun ilhom beradi.",

    b2d: "Bizning akademiyamiz — bilim va rivojlanishga chanqoq bo‘lganlar uchun makon. Bu yerda yosh yoki jins muhim emas, muhim narsa — o‘sishga va oldinga harakat qilishga bo‘lgan istakdir!(Quyidagi matn kvadrat shaklida berilishi kerak)Har bir xato — aniq natijaga yaqinlashish yo‘lidir. Biz yutuqlarni qadrlaymiz va xatolarni tahlil qilamiz.Jamiyat rivojiga faol hissa qo‘shish va insonlar uchun foydali tashabbuslarni yaratish.Halollik — asos, shaffoflik — qoidamiz.",

    b3d: "2023-yilda Rizomulk Group homiyligida bo‘lib o‘tgan birinchi 'Xalqaro ko‘chmas mulk forumi'.Jamiyat rivojiga faol hissa qo‘shish va insonlar uchun foydali tashabbuslarni yaratish.Talabalar, jamoa va bitiruvchilar yutuqlari orqali yuqori akademik standart va qadriyatlarni shakllantirishga qo‘shilgan hissasi uchun.Sifatli ta’limni rivojlantirishga qo‘shilgan hissasi uchun.",

    course1: "Ekspress kurs",
      cost: "so'm",
      tarif1: "-Tezlashtirilgan trening-Mijozlar bilan ishlashning asosiy ko'nikmalari-Kasbni tez boshlash strategiyasi-Qisqa o'qitish muddati",
      btn: "Yozilish",

      course2: "Umumiy kurs",
      tarif2: "-Guruh treningi-Shaxsiy o'sish va marketing-Haqiqiy investorlar bilan amaliyot-Imtihonlarga tayyorgarlik +eng yaxshi talabalar uchun ishga joylashish imkoniyati.",

      course3: "Individual trening",
      tarif3: "-Ustoz bilan shaxsiy darslar.-Mijoz soʻroviga koʻra obʼyektlarni qidirish-Moslashuvchan jadval.-Oʻz zaif tomonlaringizni chuqur oʻrganish.-Alohida holatlar va strategiyalar-Qisqa vaqt ichida maksimal natijaga erishmoqchi boʻlganlar uchun.",
      title: "Ismingiz",
phone: "Telefon raqamingiz",
clock:"Sizga qulay vaqt",
acces:"Men Maxfiylik siyosatiga muvofiq shaxsiy ma'lumotlarni qayta ishlashga roziman.",
call:"menga qo'ng'iroq qiling",
modaltitle: "Qo'ng'iroqqa buyurtma berish",
subscribe:"Bizga Qo'shiling",
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
      banner1: "Mission",
      banner2: "Values",
      banner3: "Visison",
      b1d: "Training a new generation of real estate professionals: ambitious realtors with an analytical mindset and deep market understanding, capable of changing standards and approaches in the profession.",

    b2d: "Our academy is a space for everyone eager for knowledge and development. Here, age and gender do not matter—only your desire to grow and move forward!(The following text should be presented in a square format)Every mistake is a step towards hitting the target. ",

    b3d: "The first 'International Real Estate Forum — 2023' under the auspices of Rizomulk Group.For active participation in the development of society and the creation of meaningful initiatives for people.For contributions to the development of quality education and the formation of values through the achievements of students.",

    course1:"Express course",
      cost: "Sum",
      tarif1: "- Accelerated training - Basic skills for working with clients - Strategy for a quick start in the profession - Short training periods",
btn: "apply",

course2: "General course",
tarif2: "-Group training-Personal growth and marketing-Practice with real investors-Preparation for exams + employment opportunities for the best students.",

course3: " Individual training",
tarif3: "- Personal lessons with a mentor. - Search for objects according to customer requests. - Flexible schedule. - In-depth study of your weaknesses. - Individual cases and strategies. - For those who want to maximize results in a short time.",

title: "Name",
phone: "Your Phone Number",
clock:"Convenient time",
acces:"I agree to the processing of personal data in accordance with the Privacy Policy.",
call:"Call me back",
modaltitle: "ORDER A CALL",
subscribe:"Joining",
    }
  },
  ru: {
    translation: {
      description: "Дополнительное образование и офлайн-курсы",
      nav1: "Поступление",
      nav2: "Программа",
      nav3: "Академическая жизнь",
      nav4: "О нас",
      nav5: "Наши контакты",
      nav6: "Социальные сети",
      bannertitle: "*Присоединяйся к",
      bannertitle1: "первым",
      bannerdescription: "и создавай свое будущее уже сегодня! Знания, которые открывают двери к лучшей карьере! *Мы создаем лидеров недвижимости. Присоединяйся – стань одним из лучших",
      search: "Искать по сайту...",
      searchbtn: "Найти",
      banner1: "Миссия",
      banner2: "Ценности",
      banner3: "Видение",
      b1d:"готовить новое поколение профессионаловв сфере недвижимости: амбициозных риелторов с аналитическим складом ума и глубоким пониманием рынка, способных менять стандарты и подходы в профессии.",
      b2d: "Наша академия — пространство для всех, кто жаждет знаний и развития.Здесь неважны возраст и пол, важно только твое желание расти и двигаться вперед!(ниже тест оформить в форме квадрате)*Каждый промах — это шаг к точному попаданию. Ценим взлёты, разбираем падения.",
      b3d: "Первый «Международный форум недвижимости — 2023» под эгидой Rizomulk Group.За активное участие в развитии общества и создании полезных инициатив для людей.За вклад в развитие качественного образования и формирование ценностей через достижения студентов.",

      course1:"Экспресс  курс",
      cost: "сум",
      tarif1: "-Ускоренная подготовка-Базовые навыки работы с клиентами-Стратегия быстрого старта в профессию-Короткие сроки обучения",
      btn: "оформить",

      course2: "Общий курс",
      tarif2: "-Групповое обучение-Личностный рост и маркетинг-Практика с реальными инвесторами-Подготовка к экзаменам +возможность трудоустройства для лучших студентов.",

      course3: " Индивидуальное обучение",
      tarif3: "-Персональные занятия с ментором.-Поиск объектов под запросы клиентов- Гибкий график.-Углубленная проработка ваших слабых сторон.-Индивидуальные кейсы и стратегии-Тех, кто хочет максимизировать результат за короткий срок.",

      modaltitle: "ЗАКАЗАТЬ ЗВОНОК",
      title: "Имя",
      phone: "Ваш телефон",
      clock:"Удобное время",
      acces:"Я даю согласие на обработку персональных данных в соответствии с Политикой конфиденциальности.",
      call:"Перезвоните мне",
      subscribe:"Присоединение",
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
