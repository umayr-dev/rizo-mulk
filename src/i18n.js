import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tarjima matnlari
const resources = {
  uz: {
    translation: {
      // description: "Qo'shimcha ta'lim va ofline kurslar",
      nav: "FAQ",
      nav1: "Akademiklar uchun ma'lumot",
      nav2: "Dastur",
      nav3: "Akademik hayot",
      nav4: "Biz haqimizda",
      nav5: "Bizning kontaktlar",
      nav6: "Ijtimoiy tarmoqlarimiz",
      bannertitle1: "qo'shiling",
      bannertitle: "Bizga",
      bannerdescription:
        "O'qituvchilar va talabalar uchun juda ko'p.Loyiha ta'limni yanada qulayroq qilishga harakat qilmoqda",
      search: "Saytdan izlash...",
      searchbtn: "Qidirish",
      banner1: "Missiya",
      banner2: "Qiymatlar",
      banner3: "Tasavvur",
      b1d: "Ko‘chmas mulk sohasida yangi avlod professionallarini tayyorlash: ambitsiyali, analitik fikrlaydigan va bozorni chuqur tushunadigan rieltorlarni shakllantirish. Ular kasbdagi standartlar va yondashuvlarni o‘zgartirish qobiliyatiga ega bo‘ladilar. Biz amaliy, qadrli va ijtimoiy jihatdan muhim ta’limni taqdim etamiz. Bu bizning tinglovchilarimizga nafaqat bilim, balki real tajriba, ishonch va o‘sish uchun ilhom beradi.",

      b2d: "Bizning akademiyamiz — bilim va rivojlanishga chanqoq bo‘lganlar uchun makon. Bu yerda yosh yoki jins muhim emas, muhim narsa — o‘sishga va oldinga harakat qilishga bo‘lgan istakdir!(Quyidagi matn kvadrat shaklida berilishi kerak)Har bir xato — aniq natijaga yaqinlashish yo‘lidir. Biz yutuqlarni qadrlaymiz va xatolarni tahlil qilamiz.Jamiyat rivojiga faol hissa qo‘shish va insonlar uchun foydali tashabbuslarni yaratish.Halollik — asos, shaffoflik — qoidamiz.",

      b3d: "2023-yilda Rizomulk Group homiyligida bo‘lib o‘tgan birinchi 'Xalqaro ko‘chmas mulk forumi'.Jamiyat rivojiga faol hissa qo‘shish va insonlar uchun foydali tashabbuslarni yaratish.Talabalar, jamoa va bitiruvchilar yutuqlari orqali yuqori akademik standart va qadriyatlarni shakllantirishga qo‘shilgan hissasi uchun.Sifatli ta’limni rivojlantirishga qo‘shilgan hissasi uchun.",

      course1: "Express Kurs",
      cost: "so'm",
      price: "5 000 000",
      tarif1:
        "-Rieltorlik sertifikatiga imtihonga tezkor va kafolatlangan tayyorgarlik!",
      tarif1_1: "- 7 kun ketma-ket, har kuni 3 soatdan onlayn",
      tarif1_2:
        "- Format: jonli efirlar + savollarni tahlil qilish + interaktiv topshiriqlar",
      tarif1_3:
        "- Akademiya amaliyotchi o'qituvchilari va taklif qilingan ekspertlar olib boradi",
      tarif1_4:
        "- Kursni tugatgandan keyin Rieltorlar akademiyasida birinchi rasmiy imtihon topshirish",
      btn: "Yozilish",

      course2: "Umumiy kurs",
      price2: "7 500 000",
      tarif2: "-Guruh treningi-Shaxsiy o'sish va marketing",
      tarif2_1:
        "-Haqiqiy investorlar bilan mashq qilish-Imtihonlarga tayyorgarlik + eng yaxshi talabalar uchun ishga joylashish imkoniyatlari.",
      tarif2_0: "-Shaxsiy o'sish",
      tarif2_3: "-Marketing",
      tarif2_2:
        "-Imtihonlarga tayyorgarlik + eng yaxshi talabalar uchun ishga joylashish imkoniyatlari.",

      course3: " Ilg'or kurs",
      price3: "18 000 000",
      tarif3: "-Mentor bilan shaxsiy darslar.",
      tarif3_1: "-Mijoz so'rovlariga ko'ra ob'ektlarni qidirish",
      tarif3_2: "- Moslashuvchan jadval.",
      tarif3_3: "-Sizning zaif tomonlaringizni chuqur o'rganish.",
      tarif3_4:
        "-Alohida holatlar va strategiyalar-Qisqa vaqt ichida natijani maksimal darajada oshirishni istaganlar uchun.",
      tarif3_5: "-Natijaga erishishga kafolat beramiz",

      prog_kard:
        "Yuridik jihatlar bilan tanishtirish, tinglovchilarga innovatsion bilimlar berish va rieltorlik xizmatlari ko‘rsatish sohasida amaliy ko‘nikmalar shakllantirish.Savdo va muzokaralar olib borish bo‘yicha yangi amaliy ko‘nikmalarni egallash, shuningdek, mijozlarga xizmat ko‘rsatishda tizimli yondashuv va ishchi vositalarni o‘zlashtirish.Loyiha missiyasi:Ko‘chmas mulk bozorini va rieltorlar haqidagi fikrlarni o‘zgartirish, insonlar hayotini yaxshiroq qilish!",

      phone: "Telefon raqamingiz",
      clock: "Sizga qulay vaqt",
      acces:
        "Men Maxfiylik siyosatiga muvofiq shaxsiy ma'lumotlarni qayta ishlashga roziman.",
      call: "menga qo'ng'iroq qiling",
      modaltitle: "Qo'ng'iroqqa buyurtma berish",
      subscribe: "Bizga Qo'shiling",
      drop1: "Qabul bo‘yicha to‘liq qo‘llanma",
      drop11: "Jadval",
      drop21: "Yuridik xizmatlar",
      drop44:
        "Ko'chmas mulk bozorida iqtisod va moliyaviy savodxonlik asoslari",
      drop22: "Marketing + Geoanalitika",
      drop23: "Amaliyot",
      drop31: "Akademistlarga ko‘mak",
      drop32: "Kampus",
      drop33: "Roman oqimining fotosuratlari va videolari",
      drop34: "OAV BIZ HAQIMIZDA",
      drop4: "1 Vizyon",
      drop4_1: " 2 Missiya",
      drop4_2: "3 Qadriyatlar",
      drop5: "1 Akademiya nimalarni o‘rgatadi?",
      drop5_1: "2 Ta’lim yo‘nalishlari qanday?",
      drop5_2: " 3 Talabalarga kimlar dars beradi?",
      drop5_3: "4 Akademiya qayerda joylashgan?",
      prog: "1. Huquqiy asos",
      prog2:
        "1 -RIELTORLIK FAOLIYATINI HUQUQIY TARTIBGA SOLISH. Rieltorlik faoliyati to‘g‘risidagi qonun, Rieltorlik faoliyatining standartlari, Ichki nazorat qoidalari. Rieltorlik xizmatlari iste’molchilari va uchinchi tomonlarning huquqlarini himoya qilishning o‘ziga xos xususiyatlari. Rieltorlik faoliyatining huquqiy asoslari. Rieltorlik faoliyatida FATF tavsiyalari. Axborot va maslahat xizmatlarining asosiy tamoyillari.",
      prog22: "2 - Asosiy tamoyillarning amaliy qo‘llanilishi.",
      prog223: " 3 - Ko‘chmas mulk sohasidagi kasb asoslari.",
      prog224:
        "4 - Ko‘chmas mulk bozori asoslari. Rieltorlarning moliyaviy jinoyatlarning oldini olishdagi roli.",
      prog1_1: "3. Marketing + Geoanalitika",
      prog2_2:
        "Instagram. Rieltorlar uchun shaxsiy brend. Umumiy ma’lumot va misollar.",
      prog2_21:
        "2 - Kelgusi rivojlanish nuqtalari strategiyasi, mijozlar psixologiyasi va xatti-harakati, qanday qilib “sotmasdan sotish”",
      prog2_22:
        "3 - Test va BITIRUV – Nazariya oldingi blokda tugadi, bu blok esa akademiya kabi — har bir talaba oxir-oqibatda moliyaviy jihatdan mustaqil liderga aylanadi. Bu yerda sizning bilimingiz sinovdan o‘tadi va muvaffaqiyatli ertangiz boshlanadi! Uyga vazifa: Faqat amaliy materiallar – bu harakatlar asosidir, uni bajarish ishning bir qismi bo‘lib, materialni o‘zlashtirish va natijaga tezroq erishishga yordam beradi.",
      prog3_1: "4. Amaliyot",
      prog3_2:
        "KO‘CHMAS MULK OBYEKTI TANLOVI. Rieltorlik xizmatini tanishtirish. Mijoz ehtiyojlari va istaklarini aniqlash. Rieltorlik xizmatini sotish. Ideal obyektlarni tanlash algoritmi. Ko‘rishlarni tashkil etish. Mijoz foydasiga xizmat narxini qoplaydigan darajada qanday savdolashish. Bitim uchun zarur bo‘lgan hujjatlarni yig‘ish. Ro‘yxatga olish uchun hujjatlarni topshirish. “Haqiqiy bitimni suratga olish va tahlil qilish” – imitatsiya. Ushbu blok doirasida biz bitimni amalga oshirish uchun barcha zarur hujjatlarni o‘rganamiz va tayyorlaymiz. Ijara bozori asoslari va xususiyatlari. Birinchi uchrashuvni qanday o‘tkazish va xizmat haqida shunday gapirish kerakki, mulk egasi albatta siz bilan ishlashni istasin. Kvartira ijarasi narxini qanday aniqlash kerak.",
      yulduz: "Rahmonova Yulduz",
      yp: "Kelajak akademiklarini qabul qilish bo‘yicha mutaxassis",
      sardor: "Ortiqboyev Sardor",
      sp: "Nekishmut xonadonini mentor",
      alexandr: "Aleksandr",
      ap: "O‘qituvchi",
      nigora: "Abdiqodirova Nigora",
      nip: "Hujjatlar bo'yicha maslahatchi - kadastr ishlari, o'quv koordinatori",
      elena: "Kostyuk Elena",
      ep: "Rizomulk akademiyasi bosh direktori",
      rizo: "Abdusattorov Muhammad Rizo",
      rp: "Ko‘chmas mulk bo‘yicha amaliy ekspert, Guruhlar kuratori",
      nargiza: "Nargiza",
      nap: "Ichki o‘sish bo‘yicha mentor",
      roman: "Yudin Roman",
      rop: "Amaliy tajriba ustozi , O‘quv markazi rahbari",
      qodir: "Muxsimov Qodir",
      qp: "Ta'lim bo‘yicha direktor o‘rinbosari",
      aip: `"Rizomulk Group" ko'chmas mulk agentligi bosh direktori`,
      aida: "Yudina Aida",
      course0: "Kurs",
      selectCourse: "Kursni tanlang",
      prog_kard2:
        "O‘quvchilar o‘qishdan so‘ng nimalarni bilishadi:Rieltorlik faoliyatini tartibga soluvchi normativ-huquqiy hujjatlar;Qonunchilikda belgilangan rieltorlik xizmatlarining mohiyati va xususiyatlari;Ko‘chmas mulk bozoriga ta’sir qiluvchi omillar va xususiyatlar;Ko‘chmas mulk bozorida qo‘llaniladigan zamonaviy axborot texnologiyalari;Rieltorlik faoliyati to‘g‘risidagi qonun, uning umumiy tushunchalari va qoidalari;Rieltorlik xizmatlari bo‘yicha tushuncha va mijozlar bilan to‘g‘ri muloqot qilish.",
      prog_kard3:
        "Bizning ma'ruzachilar (trenerlar) jamoamiz, ta’lim jarayonini bevosita olib boradigan mutaxassislar – bu nafaqat kuchli nazariyotchilar, balki o‘z bilimlarini amaliyotda qo‘llayotgan tajribali mutaxassislardir. Bizning spikerlarimizning tajribasi alohida tarix bo‘lib, u 2018 yilda boshlangan. Ular makler – rieltor bosqichidan boshlab, o‘z ko‘chmas mulk agentliklarini tashkil etishgacha bo‘lgan yo‘lni bosib o‘tgan. Turli qiyinchiliklar va vaziyatlarga duch kelib, savdo va muzokaralar olib borish bo‘yicha ko‘nikmalarni bosqichma-bosqich shakllantirgan holda tajriba orttirgan. Shundan so‘ng, kuchli mutaxassis bo‘lish uchun qo‘shimcha ta’limsiz o‘sish mumkin emasligini tushunib yetganlar. Shuning uchun Rossiya Rieltorlar Akademiyasida va eng ilg‘or ko‘chmas mulk agentliklaridan birida malaka oshirish va qo‘shimcha ta’lim olish qarori qabul qilingan. Ushbu bilimlar, tajribalar va mentalitetni tushunish asosida Rieltorlarni o‘qitish bo‘yicha o‘ziga xos, innovatsion ta’lim dasturi ishlab chiqildi va amaliyotga tatbiq etildi.",
      fullname: "FIO",
      email: "E-mail",
      phone1: "Telefon raqam",
      telegram: "Telegram username",
      staff: "Bizning xodimlar",
      partner: "Bizning hamkorlar",
      campus: "Bizning Kampus",
      life: "Akademik Hayot",
      videos: "Videolar",
      f2: "Biz joylashgan joy - Ofis",
      f3: "📞 Telefon: +998 77 070 38 83",
      f4: "📞 Telefon: +998 77 070 37 71",
      f5: "Rizomulk Academy o‘quv markazi: Toshkent shahri, Alisher Navoiy ko‘chasi, 1 (Milliy kutubxona yonida). Aynan shu yerda barcha kunduzgi darslar, treninglar va master-klasslar o‘tkaziladi.",
      f1: "Rizomulk Group: Toshkent shahri, Abdulla Qodiriy ko‘chasi, 7. Bu yerda ish uchrashuvlari, maslahatlar va hamkorlar bilan muzokaralar o‘tkaziladi.",

      order: "Ariza",
      contact: "Bizning kontaktlar",
      gps: "📍 Toshkent",
      jps: "Alisher Navoiy ko‘chasi, 1",
      tel: "📞 Bizning telefon raqamimiz:",
      eml: "📧 Bizning elektron pochta:",
      sbbtn: "Bepul maslahat oling!",
      pro4_1:
        "2. Ko‘chmas mulk bozorida iqtisodiyot va moliyaviy savodxonlik asoslari.",
      prog4_2:
        "1 - Moliyaviy rejalashtirish asoslari: daromad, xarajatlar, jamg‘armalar, investitsiyalar",
      prog4_3:
        "2 - Kreditlashning asosiy tamoyillari (ipoteka, foiz stavkalari, annuitetlar, to‘lov jadvali)",
      prog4_4:
        "3 - Obyektning rentabelligini qanday hisoblash (kapitalizatsiya, ROI, o‘zini qoplash muddati)",
      prog4_5:
        "4 - Ko‘chmas mulk soliqlari, bitimlarni rasmiylashtirish va bog‘liq xarajatlarni tushunish",
      prog4_6: "5 - Investitsion jadvallar va prognozlarni qanday o‘qish",
      prog4_7:
        "6 - Investor uchun obyektning moliyaviy modelini qanday yaratish",
      prog4_8:
        "7 - Investorlar/mijozlar uchun hisobot va taqdimotlarni tayyorlash",
      oav: "OAV biz haqimizda",
      forbes:
        "Forbes jurnalida akademiyamiz haqida “O‘zbekistondagi Rizomulk rieltorlar akademiyasi” sarlavhasi ostida maqola chop etildi.",

      xanifa: "Ikromova Xanifaxon Odilovna",
      xp: "Akademiya yuridik spikeri",
      xi: "Toshkent davlat yuridik universiteti huzuridagixalqaro standartlar bo‘yichayuridik kadrlarni kasbiy tayyorlash markazi.",
      alex: "Mironychev Aleksandr Aleksandrovich",
      alp: "Geoanalitika bo‘yicha ekspert",
      ali: "Rossiya davlat savdo-iqtisodiyot universitetiCCIM ta’limi: Ko‘chmas mulkka investitsiyalarni boshqarish bo‘yicha sertifikatlangan mutaxassis.",
      bekzod: "Rasulev Bekzod Shuxratovich",
      bp: "Realtorlar Akademiyasi marketologi",
      bi: "“Iqtisodiyot universiteti” — “Xalqaro munosabatlar” fakulteti.MChJ «OLCHA STORE» — rivojlantirish direktori.",
      andrey: "Andrey Sinyavin Nikolayevich",
      anp: "Texnik audit bo‘yicha boshqaruv",
      ani: "Moskva aviatsiya instituti (Texnik universitet)BRE Global BREEAM in Use Certified Assessor v.6, BREEAM New Construction v.2016",
      nargizaa: "Ismoilova Nargiza Isrofilovna",
      naap: "Realtorlar Akademiyasi psixologi Toshkent davlat iqtisodiyot universiteti ",
      naai: "Singapur menejment instituti — psixologiya yo‘nalishi bo‘yicha.O‘zbekiston psixologlari assotsiatsiyasi a’zosi.",
      faq: "Foydalanuvchi shartnomasi",
      book: "Rieltorlar uchun TOP 100 bepul kitob",
    },
  },
  en: {
    translation: {
      drop11: "Schedule",
      oav: "Media about us",
      prog_kard3:
        "Our team of speakers (trainers), who will directly conduct the learning process, are not just strong theorists but also highly skilled professionals who apply all their knowledge in practice. The experience of our speakers is a unique story that began back in 2018. They have gone through the entire journey, from broker – realtor to becoming the founders of their own real estate agencies. Facing various challenges and situations, they have step by step developed sales and negotiation skills. This led to the realization that without additional education, it is impossible to grow into strong professionals. A decision was made to pursue further education (advanced training) at the Russian Academy of Realtors and one of the leading real estate agencies. Based on all this knowledge, experience, and understanding of the market mentality, a unique innovative educational program for Realtor Training was developed and implemented.",
      prog_kard2:
        "What students will know after the training:Regulatory legal acts governing real estate activities;The essence and haracteristics of real estate services established by law;Factors and features influencing the real estate market;Advanced information technologies used in the real estate industry;The law on real estate activities, general understanding, and provisions;Understanding real estate services and effective communication with clients.",
      nav1: "Information for academician",
      nav2: "Program",
      nav3: "Akademic life",
      nav4: "About us",
      nav5: "Our contacts",
      nav6: "Social Media",
      nav: "FAQ",
      bannertitle: "Join the",
      bannertitle1: " first",
      bannerdescription:
        "And much more for teachers and students. The project tries to make education more accessible",
      search: "Search the site...",
      searchbtn: "Search",
      banner1: "Mission",
      banner2: "Values",
      banner3: "Visison",
      b1d: "Training a new generation of real estate professionals: ambitious realtors with an analytical mindset and deep market understanding, capable of changing standards and approaches in the profession.",

      b2d: "Our academy is a space for everyone eager for knowledge and development. Here, age and gender do not matter—only your desire to grow and move forward!(The following text should be presented in a square format)Every mistake is a step towards hitting the target. ",

      b3d: "The first 'International Real Estate Forum — 2023' under the auspices of Rizomulk Group.For active participation in the development of society and the creation of meaningful initiatives for people.For contributions to the development of quality education and the formation of values through the achievements of students.",

      course1: "Express Course",
      cost: "sum",
      tarif1:
        "-Accelerated and guaranteed preparation for the realtor certificate exam!",
      tarif1_1: "- 7 consecutive days, 3 hours online each day",
      tarif1_2:
        "- Format: live broadcasts + question analysis + interactive assignments",
      tarif1_3: "- Led by Academy practitioner-instructors and invited experts",
      tarif1_4:
        "- After completing the course, the first official exam at the Realtor Academy",
      btn: "apply",
      campus: "Our Campus",

      course2: "General course",
      tarif2: "-Group training-Personal growth and marketing",
      tarif2_0: "-Personal growth",
      tarif2_3: "-Marketing",
      tarif2_2:
        "-Preparation for exams + employment opportunities for the best students.",

      tarif2_1:
        "-Practice with real investors-Preparation for exams + employment opportunities for the best students.",
      prog_kard:
        "Introducing legal aspects, providing listeners with innovative knowledge, and developing practical skills in the field of real estate services. Acquiring new practical skills in sales and negotiations, as well as mastering systematic approaches and working tools for customer service. **Project mission:** To change the real estate market and the perception of realtors, making people's lives better!",
      course3: " Advanced course",
      tarif3: "-Personal lessons with a mentor.",
      tarif3_1: "-Search for objects according to customer requests",
      tarif3_2: "- Flexible schedule.",
      tarif3_3: "-In-depth study of your weaknesses.",
      tarif3_4:
        "-Individual cases and strategies-For those who want to maximize the result in a short time.",
      tarif3_5: "-We guarantee to achieve results",
      staff: "Our Staff",
      title: "Name",
      phone: "Your Phone Number",
      clock: "Convenient time",
      acces:
        "I agree to the processing of personal data in accordance with the Privacy Policy.",
      call: "Call me back",
      modaltitle: "ORDER A CALL",
      subscribe: "Joining",
      drop1: "Admission instructions from A to Z",
      drop21: "Legal services",
      drop44:
        "Fundamentals of Economics and Financial Literacy in the Real Estate Market",
      drop22: "Marketing + Geoanalytics",
      drop23: "Practice",
      drop31: "Support for the academician",
      drop32: "Campus",
      drop33: "Photos of Roman’s stream and videos",
      drop34: "MEDIA ABOUT US",
      drop4: "1 Vision",
      drop4_1: " 2 Mission",
      drop4_2: "3 Values",
      drop5: "1 What will the academy teach?",
      drop5_1: "2 What are the areas of study?",
      drop5_2: " 3 Who will teach the students?",
      drop5_3: " 4 Where is your academy located?",
      prog: "1. Legal Services",
      prog2:
        "1. - LEGAL REGULATION OF REALTOR ACTIVITIES. The Law on Realtor Activities, standards of realtor activities, internal control rules. Features of protecting the rights of consumers of realtor services and third parties. Legal foundations of realtor activities. FATF recommendations in realtor activities. Basic principles of information and consulting services.",
      prog22: "2 - Practical application of basic principles.",
      prog223: "3 - Fundamentals of the real estate profession.",
      prog224:
        "4 - Basics of the real estate market. The role of realtors in preventing financial crimes.",
      prog1_1: "3. Marketing + Geoanalytics",
      prog2_2:
        "1. - Instagram. Personal brand for realtors. General information and examples.",
      prog2_21:
        "2 - Strategy for future development points, client psychology and behavior, how to 'sell without selling'.",
      prog2_22:
        "3 - Test and GRADUATION – The theory was completed in the previous block, and this block is like an academy — each student eventually becomes a financially independent leader. Here, your knowledge will be tested, and your successful future will begin! Homework: Only practical materials – this is the foundation of action, completing them is part of the work, helping to absorb the material and achieve results faster.",
      prog3_1: "4. Practice",
      prog3_2:
        "SELECTING A REAL ESTATE PROPERTY FOR PURCHASE. Presentation of realtor services for property selection. Identifying needs and preferences. Selling realtor services. Algorithm for selecting ideal properties. Organizing viewings. How to negotiate to offset the cost of your services for your client. Collecting documents needed for the transaction. Submitting documents for registration. “Recording and breakdown of a real transaction” – simulation. Within this block, we study and prepare all the documents required for the deal. Basics and features of the rental market. How to conduct the first meeting and explain your service so that the property owner definitely wants to work with you. How to determine rental prices for apartments.",
      yulduz: "Rakhmanova Yulduz",
      yp: "Admissions Specialist for Future Academicians",
      sardor: "Artykbaev Sardor",
      sp: "Real Estate Mentor",
      alexandr: "Alexander",
      ap: "Teacher",
      nigora: "Abdikadirova Nigora",
      nip: "Documentation Consultant - Cadastral Affairs, Training Coordinator",
      elena: "Kostyuk Elena",
      ep: "General Director of Academy Rizomulk",
      rizo: "Abdusattorov Muhammad Rizo",
      rp: "Real Estate Practice Expert, Group Curator",
      nargiza: "Nargiza",
      nap: "Mentor in Inner Growth",
      roman: "Yudin Roman",
      rop: "Practical Training Mentor , Head of the Training Center",
      qodir: "Mukhsimov Kodir",
      qp: "Financial Literacy Specialist in Real Estate",
      aip: `General Director of the Real Estate Agency "Rizomulk Group"`,
      aida: "Yudina Aida",
      course0: "Course",
      fullname: "FIO",
      email: "E-mail",
      phone1: "Phone number",
      telegram: "Telegram username",
      selectCourse: "Select a Course",
      partner: "Our Partner",
      life: "Academic Life",
      videos: "Videos",
      f2: "Where we are located - Office",
      f3: "📞 Phone: +998 77 070 38 83",
      f4: "📞 Phone: +998 77 070 37 71",
      f5: "Rizomulk Academy Training Center: 1 Alisher Navoi Street, Tashkent (near the National Library). This is where all in-person lessons, trainings, and master classes are held for future realtors.",
      f1: "Rizomulk Group: 7 Abdulla Qodiriy Street, Tashkent. Business meetings, consultations, and negotiations with partners take place here.",

      order: "Application",
      contact: "Our contacts",
      gps: "📍 Tashkent",
      jps: "Alisher Navoi St. 1",
      tel: "📞 Our phone number:",
      eml: "📧 Our email:",
      sbbtn: "Get a free consultation!",
      pro4_1:
        "2. Basics of economics and financial literacy in the real estate market.",
      prog4_2:
        "1 - Basics of financial planning: income, expenses, savings, investments",
      prog4_3:
        "2 - Basic principles of lending (mortgage, interest rates, annuities, payment schedules)",
      prog4_4:
        "3 - How to calculate the profitability of an object (capitalization, ROI, payback)",
      prog4_5:
        "4 - Understanding real estate taxes, transaction processing, and associated costs",
      prog4_6: "5 - How to read investment tables and forecasts",
      prog4_7:
        "6 - How to create a financial model of an object for an investor",
      prog4_8: "7 - Preparing reports and presentations for investors/clients",
      forbes:
        "Our academy was featured in Forbes magazine under the title “Rizomulk Academy of Realtors in Uzbekistan”.",
      xanifa: "Ikromova Khanifakhon Odilovna",
      xp: "Legal Speaker at the Academy",
      xi: "Center for Professional Training of Legal Personnelaccording to International Standardsunder Tashkent State University of Law",
      alex: "Mironychev Alexander Alexandrovich",
      alp: "Geoanalytics Expert",
      ali: "Russian State University of Trade and EconomicsCCIM Training: Certified Commercial Investment Manager in Real Estate",
      bekzod: "Rasulev Bekzod Shukhratovich",
      bp: "Marketing Specialist at the Academy of Realtors",
      bi: "““University of Economics” – Faculty of International RelationsDevelopment Director at OLCHA STORE LLC",
      andrey: "Andrey Sinyavin Nikolayevich",
      anp: "Head of Technical Audit",
      ani: "Moscow Aviation Institute (Technical University)BRE Global BREEAM in Use Certified Assessor v.6, BREEAM New Construction v.2016",
      nargizaa: "Ismoilova Nargiza Isrofilovna",
      naap: "Psychologist at the Academy of Realtors",
      naai: "Institute of National Economy.Singapore Institute of Management – Psychology major.Member of the Association of Psychologists of Uzbekistan.",
      faq: "User Agreement",
      book: "op 100 Free Books for Realtors",
    },
  },
  ru: {
    translation: {
      // description: "Дополнительное образование и офлайн-курсы",
      prog_kard3:
        "Наша команда спикеров (тренеров) которые непосредственно будут вести сам процесс обучения - это не просто сильные ТЕОРЕТИКИ, а также действующие сильные специалисты которые внедряют все свои знания в ПРАКТИКУ. Опыт наших спикеров - это отдельная история которая началась ещё в далеком 2018 году, пройдя весь путь от ( маклера - риэлтора, до основателей своих агентств недвижимости) сталкиваясь с различными трудностями и ситуациями и проходя весь путь шаг за шагом “нарабатывая навыки Продаж и Переговоров” Пришли к пониманию что без дополнительного обучения вырасти в сильных специалистов не получится. Было принято решение получить дополнительное образование (повышение квалификации) в Российской академии риэлторов в одном из сильнейших агентств недвижимости. На основании всех данных знаний ( позиций и понимания менталитета) была РАЗРАБОТАНА и ВНЕДРЕНА своя уникальная НОВАТОРСКАЯ образовательная программа по “обучению Риэлторов”",
      prog_kard:
        "Цель обучения: - Ознакомление с юридической частью,  предоставление новаторских знаний  слушателям и выработка навыков практической работы в сфере оказания риэлторских услуг. Получения новых практических навыков в сфере продаж и переговоров, а также получение рабочих инструментов для системной работы и подходу в обслуживание клиентов. Миссия проекта: изменить рынок недвижимости и мнение о риэлторах, делая жизнь людей лучше!",
      prog_kard2:
        " Что будут знать ученики после обучения: -нормативно-правовые акты, регламентирующие риэлторскую деятельность; -сущность и особенности видов риэлторских услуг, установленных законодательством; -особенности и факторы, влияющие на рынок недвижимости; -существующие передовые информационные технологии, применяемые на рынке недвижимости. -закон о риэлторской деятельности, общие понимание и положения. -понимание о риэлторской услуги и правильность коммуникации с клиентами.",
      staff: "Наши сотрудники",
      nav1: "Информация для академик",
      nav2: "Программа",
      nav3: "Академическая жизнь",
      nav4: "О нас",
      nav5: "Наши контакты",
      bannertitle: "Присоединяйся к",
      bannertitle1: "первым",
      bannerdescription:
        "и создавай свое будущее уже сегодня! Знания, которые открывают двери к лучшей карьере! Мы создаем лидеров недвижимости. Присоединяйся – стань одним из лучших",
      search: "Искать по сайту...",
      searchbtn: "Найти",
      banner1: "Миссия",
      banner2: "Ценности",
      banner3: "Видение",
      b1d: "Готовить новое поколение профессионаловв сфере недвижимости: амбициозных риелторов с аналитическим складом ума и глубоким пониманием рынка, способных менять стандарты и подходы в профессии.«На основе наших выпускников создаем новое поколение риелторов.»",
      b2d: "Наша академия — пространство для всех, кто жаждет знаний и развития.Здесь неважны возраст и пол, важно только твое желание расти и двигаться вперед! Каждый промах — это шаг к точному попаданию. Ценим взлёты, разбираем падения.",
      b3d: "Первый «Международный форум недвижимости — 2023» под эгидой Rizomulk Group.За активное участие в развитии общества и создании полезных инициатив для людей.За вклад в развитие качественного образования и формирование ценностей через достижения студентов.",
      campus: "Наш Кампус",
      life: "Академическая жизнь",
      videos: "Видео",

      course1: "Экспресс  курс",
      cost: "сум",
      tarif1:
        " -Ускоренная и гарантированная подготовка к сдаче экзамена на сертификат риелтора!",
      tarif1_1: "- 7 дней подряд, по 3 часа онлайн каждый день",
      tarif1_2:
        "- Формат: живые эфиры + разбор вопросов + интерактивные задания",
      tarif1_3:
        "- Ведут преподаватели-практики Академии и приглашённые эксперты",
      tarif1_4:
        "- После прохождения курса первая официальная сдача экзамена в Академии риелторов",
      btn: "Оставить заявку",

      course2: "Общий курс ",
      tarif2: "-Групповое обучение",
      tarif2_0: "-Личностный рост",
      tarif2_3: "- Mаркетинг",
      tarif2_1: "-Практика с реальными инвесторами",
      tarif2_2:
        "-Подготовка к экзаменам + возможность трудоустройства для лучших студентов.",

      course3: " Расширенный курс",
      tarif3: "-Персональные занятия с ментором.",
      tarif3_1: "-Поиск объектов под запросы клиентов",
      tarif3_2: "- Гибкий график.",
      tarif3_3: "-Для тех кто хочет максимизировать результат за короткий срок",
      tarif3_4: "-Индивидуальные кейсы и стратегии",
      tarif3_5: "-Гарантировано доводим до результата",

      modaltitle: "Оставьте свои данные и наш менеджер с вами свяжется",
      title: "Имя",
      phone: "Ваш телефон",
      clock: "Удобное время",
      acces:
        "Я даю согласие на обработку персональных данных в соответствии с Политикой конфиденциальности.",
      call: "Перезвоните мне",
      subscribe: "Поиск",
      selectCourse: "Выберите курс",
      drop11: "Расписание",
      drop1: "Инструкция поступления от А до Я",
      drop21: "Юридические услуги",
      drop44: "Основы экономики и финансовой грамотности на рынке недвижимости",
      drop22: "Mаркетинг+ геоаналитика",
      drop23: "Практика",
      drop31: "Поддержка академиста",
      drop32: "Кампус",
      drop33: "Фото  потока Романа и видео",
      drop34: "СМИ О НАС",
      drop4: "1 Видение",
      drop4_1: "2 Миссия",
      drop4_2: "3 Ценности",
      drop5: "1 Чему будет учить академия?",
      drop5_1: "2 Каковы области обучения?",
      drop5_2: " 3 Кто будет обучать студентов?",
      drop5_3: "4 Где расположена ваша академия?",
      prog: "1. Юридические основы",
      prog2:
        "1 - ПРАВОВОЕ РЕГУЛИРОВАНИЕ РИЭЛТОРСКОЙ ДЕЯТЕЛЬНОСТИ. Закон о риэлторской деятельности, стандарты риэлторской деятельности, правила внутреннего контроля. Особенности защиты прав потребителей риэлторских услуг и третьих лиц. Правовые основы риэлторской деятельности. Рекомендации FATF в риэлторской деятельности. Основные принципы информационных и консультационных услуг.",
      prog22: "2 - Практическое применение основных принципов.",
      prog223: "3 - Основы профессии в сфере недвижимости.",
      prog224:
        "4 - Основы рынка недвижимости. Роль риэлторов в предотвращении финансовых преступлений.",
      prog1_1: "3. Mаркетинг+ геоаналитика",
      prog2_2:
        "1 - Instagram. Личный бренд для риэлторов. Общая информация и примеры.",
      prog2_21:
        "2 - Стратегия точек будущего развития, психология и поведение клиентов, как «продавать, не продавая».",
      prog2_22:
        "3 - Тест и ВЫПУСКНОЙ – Теория завершилась в предыдущем блоке, а этот блок подобен академии — каждый студент в конечном итоге становится финансово независимым лидером. Здесь проверяются ваши знания, и начинается ваше успешное будущее! Домашнее задание: Только практические материалы – это основа действий, выполнение которых является частью работы, помогает усвоить материал и быстрее достичь результата.",
      prog3_1: "4. Практика",
      prog3_2:
        "1- ПОДБОР ОБЪЕКТА НЕДВИЖИМОСТИ ДЛЯ ПОКУПКИ.Презентация риэлторской услуги по подбору объектаВыявление потребностей и пожеланий. Продажа риэлторской услугиАлгоритм подбора идеально подходящих объектов.Организация просмотров. Как торговаться так , чтобы отбить стоимость услуги для своего клиентаСбор документов, необходимых для сделкиПодача документов на регистрацию“Съёмка и разбор реальной сделки” – имитацияВ рамках этого блока изучаем и готовим все документы, необходимые для проведение сделки.Основы и особенности рынка аренда.Как проводить первую встречу и рассказать про услугу так, чтобы собственник точно захотел с вами работать.Как определить цену аренды на квартиры",
      partner: "Наши партнеры",

      yulduz: "Рахманова Юлдуз",
      yp: "Специалист по приему будущих академиков",
      sardor: "Артыкбаев Сардор",
      sp: "Ментор по недвижимости ",
      alexandr: "Александр",
      ap: "Преподаватель",
      nigora: "Абдикадирова Нигора",
      nip: "Консультант по документации - кадастровое дело, Координатор обучения",
      elena: "Костюк Елена",
      ep: "Генеральный директор Academy Rizomulk",
      rizo: "Абдусатторов Мухаммад Ризо",
      rp: "Эксперт-практик по недвижимости , Куратор групп ",
      nargiza: "Наргиза",
      nap: "Наставник по Внутреннему росту",
      roman: "Юдин Роман",
      rop: "Наставник практик , Руководитель учебного центра ",
      qodir: "Мухсимов Кодыр",
      qp: "Специалист по финансовой грамотности в недвижимости",
      aip: `Генеральный директор Агентства недвижимости "Rizomulk Group"`,
      aida: "Юдина Аида",
      fullname: "ФИО",
      email: "Электронная почта",
      phone1: "Номер телефона",
      telegram: "имя пользователя Tелеграммы",
      course0: "Курс",
      f2: "Где мы находимся Офис",
      f3: "📞 Телефон: +998 77 070 38 83",
      f4: "📞 Телефон: +998 77 070 37 71",
      f5: "Учебный центр Rizomulk Academy:г. Ташкент, ул. Алишера Навои, 1 (возле Национальной библиотеки)Именно здесь проводятся все очные занятия, тренинги и мастер-классы для будущих риелторов.",
      f1: "Rizomulk Group:г. Ташкент, ул. Абдуллы Кадыри, 7 Здесь проходят деловые встречи, консультации и ереговоры с партнёрами. ",
      order: "Заявка",
      contact: "Наши контакты",
      gps: "📍 Ташкент",
      jps: "Ул. Алишер Навои 1",
      tel: "📞",
      eml: "📧 Электронная почта",
      sbbtn: "Получи бесплатную консультацию!",
      pro4_1:
        "2.Основы экономики и финансовой грамотности на рынке недвижимости. ",
      prog4_2:
        "1 - Основы финансового планирования: доходы, расходы, сбережения, инвестиции",
      prog4_3:
        "2- Базовые принципы кредитования (ипотека, процентные ставки, аннуитеты, графики выплат)",
      prog4_4:
        "3- Как рассчитать доходность объекта (капитализация, ROI, окупаемость)",
      prog4_5:
        "4- Понимание налогов на недвижимость, оформления сделок и сопутствующих расходов",
      prog4_6: "5- Как читать инвестиционные таблицы и прогнозы",
      prog4_7: "6- Как составлять финансовую модель объекта для инвестора",
      prog4_8: "7- Подготовка отчетов и презентаций для инвесторов/клиентов",
      oav: "СМИ о нас",
      forbes:
        "Журнал Forbes опубликовал публикацию о нашей академии под заголовком «Академия риэлторов Rizomulk Academy в Узбекистане».",
      xanifa: "Икромова Ханифахон Одиловна",
      xp: "Юридический спикер Академии",
      xi: "Центр профессиональной подготовкиюридических кадров помеждународным стандартам приТашкентском государственномюридическом университете",
      alex: "Миронычев Александр Александрович",
      alp: "Эксперт по геоаналитике",
      ali: "Российский государственный торгово-экономический университетОбучение CCIM: Cертифицированный управляющий инвестициями в  недвижимость.",
      bekzod: "Расулев Бекзод Шухратович",
      bp: "Маркетолог Академии риелторов",
      bi: "“Экономический унверситет” факультет “Мэждународные отношения».  МЧЖ «OLCHA STORE» директор по развитию",
      andrey: "Андрей Синявин Николаевич",
      anp: "Управление технический аудит",
      ani: "Московский Авиационный институт (Технический университет)  BRE Global BREEAM in Use Certified Assessor v.6, BREEAM New Construction v.2016",
      nargizaa: "Исмаилова Наргиза Исрафиловна",
      naap: "Психолог Академии риелторов",
      naai: "Институт народного хозяйства.Сингапурский институт менеджмента по направлению психология. Член ассоциации психологов Узбекистана",
      faq: "Пользовательское соглашение",
      book: "Топ 100 бесплатных книг для риелторов",
    },
  },
};

i18n
  .use(initReactI18next) // React uchun integratsiya
  .init({
    resources,
    lng: "ru", // Standart til
    fallbackLng: "uz", // Agar tarjima topilmasa, ushbu til ishlatiladi
    interpolation: {
      escapeValue: false, // React JSX bilan moslashuv
    },
  });

export default i18n;
