import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tarjima matnlari
const resources = {
  uz: {
    translation: {
      // description: "Qo'shimcha ta'lim va ofline kurslar",
      nav:"Faq",
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
drop1: "Qabul bo‘yicha to‘liq qo‘llanma",
drop21: "Yuridik xizmatlar",
drop22: "Marketing + Geoanalitika",
drop23: "Marketing + Geoanalitika",
drop31: "Akademistlarga ko‘mak",
drop32: "Kampus",
drop33: "Roman oqimining fotosuratlari va videolari",
drop4: "1 Vizyon  2 Missiya  3 Qadriyatlar",
drop5: "1 Akademiya nimalarni o‘rgatadi? 2 Ta’lim yo‘nalishlari qanday? 3 Talabalarga kimlar dars beradi? 4 Akademiya qayerda joylashgan?",
prog: "1. Yuridik xizmatlar",
prog2: "RIELTORLIK FAOLIYATINI HUQUQIY TARTIBGA SOLISH. Rieltorlik faoliyati to‘g‘risidagi qonun, Rieltorlik faoliyatining standartlari, Ichki nazorat qoidalari. Rieltorlik xizmatlari iste’molchilari va uchinchi tomonlarning huquqlarini himoya qilishning o‘ziga xos xususiyatlari. Rieltorlik faoliyatining huquqiy asoslari. Rieltorlik faoliyatida FATF tavsiyalari. Axborot va maslahat xizmatlarining asosiy tamoyillari. 2 - Asosiy tamoyillarning amaliy qo‘llanilishi. 3 - Ko‘chmas mulk sohasidagi kasb asoslari. 4 - Ko‘chmas mulk bozori asoslari. Rieltorlarning moliyaviy jinoyatlarning oldini olishdagi roli.",
prog1_1: "2. Marketing + Geoanalitika",
prog2_2: "Instagram. Rieltorlar uchun shaxsiy brend. Umumiy ma’lumot va misollar. 2 - Kelgusi rivojlanish nuqtalari strategiyasi, mijozlar psixologiyasi va xatti-harakati, qanday qilib “sotmasdan sotish”. 3 - Test va BITIRUV – Nazariya oldingi blokda tugadi, bu blok esa akademiya kabi — har bir talaba oxir-oqibatda moliyaviy jihatdan mustaqil liderga aylanadi. Bu yerda sizning bilimingiz sinovdan o‘tadi va muvaffaqiyatli ertangiz boshlanadi! Uyga vazifa: Faqat amaliy materiallar – bu harakatlar asosidir, uni bajarish ishning bir qismi bo‘lib, materialni o‘zlashtirish va natijaga tezroq erishishga yordam beradi.",
prog3_1: "3. Amaliyot",
prog3_2: "KO‘CHMAS MULK OBYEKTI TANLOVI. Rieltorlik xizmatini tanishtirish. Mijoz ehtiyojlari va istaklarini aniqlash. Rieltorlik xizmatini sotish. Ideal obyektlarni tanlash algoritmi. Ko‘rishlarni tashkil etish. Mijoz foydasiga xizmat narxini qoplaydigan darajada qanday savdolashish. Bitim uchun zarur bo‘lgan hujjatlarni yig‘ish. Ro‘yxatga olish uchun hujjatlarni topshirish. “Haqiqiy bitimni suratga olish va tahlil qilish” – imitatsiya. Ushbu blok doirasida biz bitimni amalga oshirish uchun barcha zarur hujjatlarni o‘rganamiz va tayyorlaymiz. Ijara bozori asoslari va xususiyatlari. Birinchi uchrashuvni qanday o‘tkazish va xizmat haqida shunday gapirish kerakki, mulk egasi albatta siz bilan ishlashni istasin. Kvartira ijarasi narxini qanday aniqlash kerak.",
yulduz: "Yulduz",
yp: "Kelajak akademiklarini qabul qilish bo‘yicha mutaxassis",
sardor: "Sardor",
sp: "Nekishmut xonadonini mentor",
alexandr: "Aleksandr",
ap: "O‘qituvchi",
nigora: "Nigora",
nip: "O‘qituvchi yordamchisi tutor",
elena: "Elena",
ep: "Emotsional balans bo‘yicha mentor",
rizo: "Rizo",
rp: "Ta'lim kuratori",
nargiza: "Nargiza",
nap: "Ichki o‘sish bo‘yicha mentor",
roman: "Roman",
rop: "Mutaxassislarni tayyorlash bo‘yicha bo‘lim rahbari",
qodir: "Qodir",
qp: "Ta'lim bo‘yicha direktor o‘rinbosari",
aip: "Rizomulk Group direktori",
aida: "Aida"


    }
  },
  en: {
    translation: {
      // description: "Further education and ofline courses",
      nav1: "Admissin",
      nav2: "Program",
      nav3: "Akademic life",
      nav4: "About us",
      nav5: "Our contacts",
      nav6: "Social Media",
      nav:"FAQ",
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
drop1: "Admission instructions from A to Z",
drop21: "Legal services",
drop22: "Marketing + Geoanalytics",
drop23: "Marketing + Geoanalytics",
drop31: "Support for the academician",
drop32: "Campus",
drop33: "Photos of Roman’s stream and videos",
drop4: "1 Vision  2 Mission  3 Values",
drop5: "1 What will the academy teach? 2 What are the areas of study? 3 Who will teach the students? 4 Where is your academy located?",
prog: "1. Legal Services",
prog2: "LEGAL REGULATION OF REAL ESTATE ACTIVITY. Law on Real Estate Activity, Standards of Real Estate Activity, Internal Control Rules. Specifics of protecting the rights of consumers of real estate services and third parties. Legal foundations of real estate activities. FATF recommendations in real estate operations. Basic principles of information and consulting services. 2 - Practical application of basic principles. 3 - Basics of the profession in the field of real estate. 4 - Fundamentals of the real estate market. The role of realtors in preventing financial crimes.",
prog1_1: "2. Marketing + Geoanalytics",
prog2_2: "Instagram. Personal brand for realtors. General info & examples. 2 - Strategy for further growth points, client psychology and behavior, how to sell without selling. 3 - Testing and GRADUATION - Theory ended in the previous block, this one is like an academy — where each student ultimately becomes a financially independent leader. This is where your knowledge is tested and your successful future begins! Homework: Purely practical to master the material — it's the foundation of actions that are part of the job, helping you learn faster and achieve results sooner.",
prog3_1: "3. Practice",
prog3_2: "SELECTING A REAL ESTATE PROPERTY FOR PURCHASE. Presentation of realtor services for property selection. Identifying needs and preferences. Selling realtor services. Algorithm for selecting ideal properties. Organizing viewings. How to negotiate to offset the cost of your services for your client. Collecting documents needed for the transaction. Submitting documents for registration. “Recording and breakdown of a real transaction” – simulation. Within this block, we study and prepare all the documents required for the deal. Basics and features of the rental market. How to conduct the first meeting and explain your service so that the property owner definitely wants to work with you. How to determine rental prices for apartments.",
yulduz: "Yulduz",
yp: "Specialist in the acceptance of future academics",
sardor: "Sardor",
sp: "Real Estate Mentor",
alexandr: "Alexander",
ap: "Teacher",
nigora: "Nigora",
nip: "Tutor Assistant to the Teacher",
elena: "Elena",
ep: "Mentor in Emotional Balance",
rizo: "Rizo",
rp: "Training Curator",
nargiza: "Nargiza",
nap: "Mentor in Inner Growth",
roman: "Roman",
rop: "Head of the Specialist Training Department",
qodir: "Qodir",
qp: "Deputy Director of Training",
aip: "Director of Rizomulk Group",
aida: "Aida"


    }
  },
  ru: {
    translation: {
      // description: "Дополнительное образование и офлайн-курсы",
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

      drop1: "Инструкция поступления от А до Я",
      drop21: "Юридические услуги",
      drop22: "маркетинг+ геоаналитика",
      drop23: "маркетинг+ геоаналитика",
      drop31:"Поддержка академиста",
      drop32: "Кампус",
      drop33:"Фото  потока Романа и видео",
      drop4:"1 Видение 2 Миссия3 Ценности",
      drop5: "1 Чему будет учить академия?2 Каковы области обучения?3 Кто будет обучать студентов?4 Где расположена ваша академия?",
      prog:"1  Юридические услуги",
      prog2:"ПРАВОВОЕ РЕГУЛИРОВАНИЕ РИЭЛТОРСКОЙ ДЕЯТЕЛЬНОСТИ   Закон о риэлторской деятельности, Стандарты риэлторской деятельности, Правила внутреннего контроля.Особенности защиты прав потребителей риэлторских услуг и третьих лиц.Правовые основы риэлторской деятельности.Рекомендации ФАТФ в риэлторской деятельностиБазовые принципы информационных и консультационных услуг. 2- Практическое применение базовых принципов3- Основы профессии в сфере недвижимости4- Основы рынка недвижимостиРоль риэлторов в предотвращении финансовых преступлений",
      prog1_1:"2.  маркетинг+ геоаналитика",
      prog2_2:"Инстаграм. Личный бренд для риэлторов. Общая информация-примеры2-Стратегия дальнейших точек роста, психология и поведение клиентов, как продавать не продавая3-Тестирование и ВЫПУСК-Теория закончилась на предыдущем блоке, этот блок как академия-каждый студент которого в конечном счёте становится финансово независимым лидером.Здесь начинается проверка ваших знаний и ваше успешное завтра!Домашнее задание: Исключительно практическое для освоение материалы:-это основа действий, выполнение которых входит в работу, оно помогает осваивать материал и быстрей добиваться результата,",
      prog3_1:"3 Практика",
      prog3_2:"ПОДБОР ОБЪЕКТА НЕДВИЖИМОСТИ ДЛЯ ПОКУПКИ.Презентация риэлторской услуги по подбору объектаВыявление потребностей и пожеланий. Продажа риэлторской услугиАлгоритм подбора идеально подходящих объектов.Организация просмотров. Как торговаться так , чтобы отбить стоимость услуги для своего клиентаСбор документов, необходимых для сделкиПодача документов на регистрацию“Съёмка и разбор реальной сделки” – имитацияВ рамках этого блока изучаем и готовим все документы, необходимые для проведение сделки.Основы и особенности рынка аренда.Как проводить первую встречу и рассказать про услугу так, чтобы собственник точно захотел с вами работать.Как определить цену аренды на квартиры",

      yulduz:"Юлдуз",
      yp:"Специалист по приемуБудущих академиков",
      sardor:"Сардор",
      sp:"Ментор по недвижимости",
      alexandr:"Александр",
      ap:"Преподаватель",
      nigora:"Нигора",
      nip:"ТьюторПомощник преподователя",
      elena:"Елена",
      ep:"Ментор по Эмоциональному балансу",
      rizo:"Ризо",
      rp:"Куратор обучени",  
      nargiza:"Наргиза",
      nap:"Наставник по Внутреннему росту",
      roman:"Роман",
      rop:"Руководитель отдела Обучения специалистов",
      qodir:"Кодир",
      qp:"Заместитель директора по обучению",
      aip:"Директор Rizomulk Group",
      aida:"Аида",
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
