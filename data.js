/* ============================================================
   LUMINA DENTAL — data.js
   Единый источник контента. Редактируется через admin.html.
   ============================================================ */

const DEFAULT_SITE_DATA = {

    /* ---------- BRAND ---------- */
    brand: "Lumina Dental",

    /* ---------- NAV ---------- */
    nav: [
        { label: "Услуги", href: "#services" },
        { label: "Кейсы", href: "#cases" },
        { label: "Врачи", href: "#doctors" },
        { label: "Цены", href: "#prices" },
        { label: "Отзывы", href: "#testimonials" },
        { label: "Контакты", href: "#contacts" }
    ],

    /* ---------- HERO ---------- */
    heroTitle: "Улыбка, которая<br><span class=\"hero__title-accent\">меняет всё</span>",
    heroSubtitle: "Виниры, импланты и отбеливание с гарантией до 15 лет. Бесплатная 3D-диагностика при записи онлайн.",
    heroBullets: [
        "Бесплатная консультация и КТ-снимок",
        "Рассрочка 0% на все виды лечения",
        "Гарантия на работы — до 15 лет"
    ],
    heroImage: "/assets/hero.jpg",

    /* ---------- TRUST BADGES ---------- */
    trustBadges: [
        { iconKey: "shield", value: "12+", text: "лет практики" },
        { iconKey: "users", value: "9 400+", text: "довольных пациентов" },
        { iconKey: "award", value: "15 лет", text: "гарантия на импланты" },
        { iconKey: "star", value: "4.9", text: "рейтинг на Яндексе" }
    ],

    /* ---------- WHY US ---------- */
    why: [
        {
            iconKey: "microscope",
            title: "3D-диагностика",
            text: "Компьютерная томография, цифровые слепки и планирование результата до начала лечения. Вы видите итог заранее."
        },
        {
            iconKey: "clock",
            title: "Всё за один визит",
            text: "Виниры за 1 день, отбеливание за 40 минут, имплантация с немедленной нагрузкой. Ценим ваше время."
        },
        {
            iconKey: "heart",
            title: "Без боли — гарантируем",
            text: "Современная анестезия, седация и бережный подход. 98% пациентов отмечают полное отсутствие дискомфорта."
        },
        {
            iconKey: "wallet",
            title: "Прозрачные цены",
            text: "Фиксируем стоимость в договоре до начала лечения. Рассрочка 0% без переплат и скрытых доплат."
        }
    ],

    /* ---------- SERVICES ---------- */
    services: [
        {
            title: "Виниры E-max",
            desc: "Тончайшие керамические накладки — идеальная форма и цвет зубов за один-два визита.",
            priceFrom: 250000,
            image: "/assets/service-1.jpg",
            featured: true
        },
        {
            title: "Имплантация",
            desc: "Импланты Straumann и Nobel с пожизненной гарантией производителя. Установка за 30 минут.",
            priceFrom: 350000,
            image: "/assets/service-2.jpg",
            featured: false
        },
        {
            title: "Отбеливание ZOOM 4",
            desc: "До 8 тонов за одну процедуру. Без повреждения эмали, результат держится до 3 лет.",
            priceFrom: 120000,
            image: "/assets/service-3.jpg",
            featured: false
        },
        {
            title: "Лечение и реставрация",
            desc: "Кариес, пульпит, художественная реставрация. Работаем под микроскопом — точность до 0.1 мм.",
            priceFrom: 25000,
            image: "/assets/service-4.jpg",
            featured: false
        },
        {
            title: "Элайнеры",
            desc: "Прозрачные капы для выравнивания зубов. Незаметны, комфортны, результат за 6–12 месяцев.",
            priceFrom: 1800000,
            image: "/assets/service-5.jpg",
            featured: false
        },
        {
            title: "Профгигиена",
            desc: "Ультразвук + Air Flow + полировка. Здоровые дёсны и свежее дыхание за 60 минут.",
            priceFrom: 25000,
            image: "/assets/service-6.jpg",
            featured: false
        }
    ],

    /* ---------- CASES (Before / After) ---------- */
    cases: [
        {
            title: "Комплексная реставрация улыбки",
            caption: "8 керамических виниров E-max — коррекция формы, цвета и прикуса.",
            beforeImage: "/assets/before-1.jpg",
            afterImage: "/assets/after-1.jpg",
            duration: "5 дней"
        },
        {
            title: "Имплантация жевательной группы",
            caption: "3 импланта Straumann с коронками из диоксида циркония. Полное восстановление функции.",
            beforeImage: "/assets/before-2.jpg",
            afterImage: "/assets/after-2.jpg",
            duration: "3 месяца"
        },
        {
            title: "Отбеливание + микро-реставрация",
            caption: "ZOOM 4 отбеливание на 6 тонов + композитная реставрация двух передних зубов.",
            beforeImage: "/assets/before-3.jpg",
            afterImage: "/assets/after-3.jpg",
            duration: "1 день"
        }
    ],

    /* ---------- DOCTORS ---------- */
    doctors: [
        {
            name: "Алексей Воронов",
            role: "Главный врач · Ортопед",
            experience: "14 лет опыта",
            badges: ["Invisalign Provider", "Member of DGI"],
            skills: ["Виниры", "Коронки", "Мосты", "Полные реабилитации"],
            photo: "/assets/doctor-1.jpg"
        },
        {
            name: "Марина Светлова",
            role: "Хирург-имплантолог",
            experience: "11 лет опыта",
            badges: ["Straumann Certified", "Nobel Biocare"],
            skills: ["Имплантация", "Костная пластика", "Синус-лифтинг"],
            photo: "/assets/doctor-2.jpg"
        },
        {
            name: "Дарья Ким",
            role: "Терапевт · Эстетист",
            experience: "9 лет опыта",
            badges: ["ZOOM Certified", "Стажировки в Германии"],
            skills: ["Отбеливание", "Реставрации", "Лечение под микроскопом"],
            photo: "/assets/doctor-3.jpg"
        }
    ],

    /* ---------- TESTIMONIALS ---------- */
    testimonials: [
        {
            name: "Анна М.",
            text: "Делала 6 виниров — результат невероятный. Боялась, что будет «слишком белые», но врач подобрал идеальный естественный оттенок. Очень благодарна!",
            rating: 5,
            service: "Виниры E-max",
            source: "Яндекс Карты"
        },
        {
            name: "Сергей К.",
            text: "Имплантацию откладывал три года из страха. В Lumina сделали за 40 минут, вообще ничего не почувствовал. Коронку поставили сразу — ушёл с зубом.",
            rating: 5,
            service: "Имплантация",
            source: "Google"
        },
        {
            name: "Елена Р.",
            text: "Отбеливание ZOOM — 6 тонов за час. Эмаль в порядке, чувствительности нет. Улыбаюсь теперь без стеснения на каждом фото.",
            rating: 5,
            service: "Отбеливание",
            source: "Яндекс Карты"
        },
        {
            name: "Дмитрий В.",
            text: "Лечил сложный пульпит — работали под микроскопом, сохранили зуб. Цену назвали сразу, никаких «сюрпризов» в чеке. Рекомендую.",
            rating: 5,
            service: "Лечение",
            source: "2ГИС"
        },
        {
            name: "Ольга Н.",
            text: "Пришла на гигиену, осталась на элайнеры. За 8 месяцев зубы встали ровно. Капы реально незаметные — никто на работе не догадался.",
            rating: 5,
            service: "Элайнеры",
            source: "Яндекс Карты"
        },
        {
            name: "Марат И.",
            text: "Восстановили 4 зуба за неделю. Составили план, показали 3D-модель результата до начала. Всё совпало. Клиника топ — буду ходить только сюда.",
            rating: 5,
            service: "Комплексное лечение",
            source: "Google"
        }
    ],

    /* ---------- PRICES ---------- */
    prices: [
        { name: "Консультация + КТ-снимок", priceFrom: 0, note: "Бесплатно" },
        { name: "Профессиональная гигиена", priceFrom: 25000, note: null },
        { name: "Лечение кариеса", priceFrom: 25000, note: null },
        { name: "Отбеливание ZOOM 4", priceFrom: 120000, note: null },
        { name: "Винир E-max (1 единица)", priceFrom: 250000, note: "Популярно", accent: true },
        { name: "Имплант Straumann + коронка", priceFrom: 350000, note: null },
        { name: "Элайнеры (полный курс)", priceFrom: 1800000, note: null },
        { name: "Коронка диоксид циркония", priceFrom: 180000, note: null }
    ],

    /* ---------- QUIZ ---------- */
    quiz: {
        steps: [
            {
                question: "Что вас интересует больше всего?",
                options: [
                    "Хочу красивую улыбку (виниры, отбеливание)",
                    "Нужно восстановить зубы (импланты, коронки)",
                    "Лечение и профилактика",
                    "Выравнивание зубов (элайнеры)"
                ]
            },
            {
                question: "Как срочно вы хотите начать?",
                options: [
                    "Как можно скорее",
                    "В течение месяца",
                    "Пока просто узнаю стоимость",
                    "Планирую на конкретную дату"
                ]
            },
            {
                question: "Что для вас важнее всего?",
                options: [
                    "Качество и гарантия",
                    "Скорость лечения",
                    "Минимальная стоимость",
                    "Безболезненность"
                ]
            }
        ],
        finalBonusText: "Отлично! Оставьте контакт — мы подготовим персональный план лечения и зафиксируем скидку 10% на первый визит."
    },

    /* ---------- CONTACTS ---------- */
    contacts: {
        phone: "+7 777 081 54 44",
        phoneSecondary: "+7 707 799 99 88",
        phoneRaw: "+77770815444",
        phoneSecondaryRaw: "+77077999988",
        whatsapp: "77770815444",
        whatsappDigits: "77770815444",
        email: "info@lumina.dental",
        address: "г. Алматы, ул. Розыбакиева 310а, ЖК 4YOU",
        addressSecondary: "Филиал 2: ул. Тулебаева 95/1, угол Толе би",
        hours: "Ежедневно с 9:00 до 21:00",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.01315232406!2d76.89150497597758!3d43.20921347112669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836982be94b78d%3A0xc315091275d9518f!2sLumina%20Dental!5e0!3m2!1sru!2skz!4v1771412005168!5m2!1sru!2skz"
    }
};

/* ---------- localStorage merge ---------- */
function getSiteData() {
    try {
        const stored = localStorage.getItem("siteData_lumina");
        if (stored) {
            const parsed = JSON.parse(stored);
            return Object.assign({}, DEFAULT_SITE_DATA, parsed);
        }
    } catch (e) {
        console.warn("Lumina data.js: не удалось прочитать localStorage, используем дефолт.", e);
    }
    return DEFAULT_SITE_DATA;
}

/* Глобальная переменная для доступа из index.js и admin.html */
window.SITE_DATA = getSiteData();
