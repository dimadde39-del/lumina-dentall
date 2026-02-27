/* ============================================================
   DEMOKRAT АЛМАТЫ — data.js
   Единый источник контента. Редактируется через admin.html.
   ============================================================ */

const DEFAULT_SITE_DATA = {

    /* ---------- BRAND ---------- */
    brand: "Demokrat Алматы",

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
    heroTitle: "Стоматология,<br><span class=\"hero__title-accent\">которой доверяют</span>",
    heroSubtitle: "Сеть клиник с 12-летним опытом в Алматы. Имплантация, лечение, протезирование и ортодонтия по доступным ценам с гарантией результата.",
    heroBullets: [
        "Бесплатная консультация и диагностика",
        "Рассрочка 0% без переплат",
        "Гарантия на все виды работ"
    ],
    heroImage: "/assets/hero.jpg",

    /* ---------- TRUST BADGES ---------- */
    trustBadges: [
        { iconKey: "shield", value: "12+", text: "лет работы сети" },
        { iconKey: "users", value: "15 000+", text: "пациентов в год" },
        { iconKey: "award", value: "3", text: "клиники в Алматы" },
        { iconKey: "star", value: "4.8", text: "рейтинг на 2ГИС" }
    ],

    /* ---------- WHY US ---------- */
    why: [
        {
            iconKey: "microscope",
            title: "Современное оборудование",
            text: "Цифровая диагностика, компьютерная томография и точное планирование лечения. Вы знаете результат до начала работы."
        },
        {
            iconKey: "clock",
            title: "Удобный график",
            text: "Работаем ежедневно с 9:00 до 21:00. Запись онлайн, минимальное ожидание, уважение к вашему времени."
        },
        {
            iconKey: "heart",
            title: "Комфортное лечение",
            text: "Современная анестезия и внимательный подход. Большинство пациентов отмечают отсутствие дискомфорта."
        },
        {
            iconKey: "wallet",
            title: "Честные цены",
            text: "Стоимость фиксируется до начала лечения. Рассрочка 0% без скрытых платежей и доплат."
        }
    ],

    /* ---------- SERVICES ---------- */
    services: [
        {
            title: "Имплантация зубов",
            desc: "Установка имплантов Straumann, Nobel, Osstem. Восстановление одного зуба или полного ряда с гарантией.",
            priceFrom: 180000,
            image: "/assets/service-1.jpg",
            featured: true
        },
        {
            title: "Лечение зубов",
            desc: "Кариес, пульпит, периодонтит. Работаем с увеличением — точность и сохранение здоровых тканей.",
            priceFrom: 15000,
            image: "/assets/service-2.jpg",
            featured: false
        },
        {
            title: "Протезирование",
            desc: "Коронки, мосты, съёмные и несъёмные протезы. Восстанавливаем функцию и эстетику зубного ряда.",
            priceFrom: 85000,
            image: "/assets/service-3.jpg",
            featured: false
        },
        {
            title: "Ортодонтия",
            desc: "Брекет-системы и элайнеры для выравнивания зубов. Индивидуальный план лечения для детей и взрослых.",
            priceFrom: 350000,
            image: "/assets/service-4.jpg",
            featured: false
        },
        {
            title: "Хирургия",
            desc: "Удаление зубов любой сложности, костная пластика, синус-лифтинг. Безопасно и без лишнего стресса.",
            priceFrom: 20000,
            image: "/assets/service-5.jpg",
            featured: false
        },
        {
            title: "Профгигиена",
            desc: "Ультразвуковая чистка, Air Flow, полировка. Профилактика заболеваний дёсен за одно посещение.",
            priceFrom: 15000,
            image: "/assets/service-6.jpg",
            featured: false
        }
    ],

    /* ---------- CASES (Before / After) ---------- */
    cases: [
        {
            title: "Восстановление жевательной группы",
            caption: "Установка 3 имплантов с коронками из диоксида циркония. Полное восстановление функции.",
            beforeImage: "/assets/before-1.jpg",
            afterImage: "/assets/after-1.jpg",
            duration: "3 месяца"
        },
        {
            title: "Комплексное протезирование",
            caption: "Мостовидный протез на 5 единиц — коррекция прикуса и восстановление эстетики.",
            beforeImage: "/assets/before-2.jpg",
            afterImage: "/assets/after-2.jpg",
            duration: "2 недели"
        },
        {
            title: "Лечение и реставрация",
            caption: "Лечение глубокого кариеса 4 зубов с художественной реставрацией композитным материалом.",
            beforeImage: "/assets/before-3.jpg",
            afterImage: "/assets/after-3.jpg",
            duration: "2 дня"
        }
    ],

    /* ---------- DOCTORS ---------- */
    doctors: [
        {
            name: "Асылбек Мұратов",
            role: "Главный врач · Хирург-имплантолог",
            experience: "14 лет опыта",
            badges: ["Straumann Certified", "Nobel Biocare"],
            skills: ["Имплантация", "Костная пластика", "Синус-лифтинг"],
            photo: "/assets/doctor-1.jpg"
        },
        {
            name: "Айгерим Сатпаева",
            role: "Ортодонт",
            experience: "10 лет опыта",
            badges: ["Invisalign Provider", "Damon System"],
            skills: ["Брекеты", "Элайнеры", "Детская ортодонтия"],
            photo: "/assets/doctor-2.jpg"
        },
        {
            name: "Дана Омарова",
            role: "Терапевт · Эндодонтист",
            experience: "8 лет опыта",
            badges: ["Стажировки в Корее", "Микроскопист"],
            skills: ["Лечение каналов", "Реставрации", "Профгигиена"],
            photo: "/assets/doctor-3.jpg"
        }
    ],

    /* ---------- TESTIMONIALS ---------- */
    testimonials: [
        {
            name: "Марат К.",
            text: "Ставил 2 импланта — всё прошло спокойно. Врач объяснил каждый шаг, цена не менялась. Через 3 месяца поставили коронки — как свои зубы.",
            rating: 5,
            service: "Имплантация",
            source: "2ГИС"
        },
        {
            name: "Айнур С.",
            text: "Лечила кариес на 3 зубах. Быстро, аккуратно, без боли. Приятно, что сразу назвали точную стоимость и не навязывали лишнего.",
            rating: 5,
            service: "Лечение",
            source: "Google"
        },
        {
            name: "Жанна Т.",
            text: "Дочери поставили брекеты. Врач всё подробно рассказала, составила план. Уже через 4 месяца видим результат. Очень довольны.",
            rating: 5,
            service: "Ортодонтия",
            source: "Яндекс Карты"
        },
        {
            name: "Ерлан М.",
            text: "Делал протезирование — мост на 4 зуба. Работа качественная, подобрали цвет точно в тон. Не отличить от настоящих.",
            rating: 5,
            service: "Протезирование",
            source: "2ГИС"
        },
        {
            name: "Гульнара Б.",
            text: "Хожу на гигиену каждые полгода. Всегда чисто, вежливо, без задержек. Цена адекватная для такого качества.",
            rating: 5,
            service: "Профгигиена",
            source: "Google"
        },
        {
            name: "Алексей В.",
            text: "Удаляли сложную восьмёрку. Думал будет страшно, но всё заняло 20 минут. Отёк был минимальный. Спасибо хирургу.",
            rating: 5,
            service: "Хирургия",
            source: "Яндекс Карты"
        }
    ],

    /* ---------- PRICES ---------- */
    prices: [
        { name: "Консультация + диагностика", priceFrom: 0, note: "Бесплатно" },
        { name: "Профессиональная гигиена", priceFrom: 15000, note: null },
        { name: "Лечение кариеса", priceFrom: 15000, note: null },
        { name: "Удаление зуба", priceFrom: 20000, note: null },
        { name: "Имплант Osstem + коронка", priceFrom: 180000, note: "Популярно", accent: true },
        { name: "Имплант Straumann + коронка", priceFrom: 350000, note: null },
        { name: "Коронка диоксид циркония", priceFrom: 85000, note: null },
        { name: "Брекеты (полный курс)", priceFrom: 350000, note: null }
    ],

    /* ---------- QUIZ ---------- */
    quiz: {
        steps: [
            {
                question: "Что вас беспокоит?",
                options: [
                    "Нужно восстановить зубы (импланты, протезы)",
                    "Болит зуб или нужно лечение",
                    "Хочу выровнять зубы (брекеты, элайнеры)",
                    "Нужна профилактика или чистка"
                ]
            },
            {
                question: "Как скоро хотите начать?",
                options: [
                    "Как можно скорее",
                    "В ближайший месяц",
                    "Пока узнаю стоимость",
                    "Планирую на конкретную дату"
                ]
            },
            {
                question: "Что для вас важнее всего?",
                options: [
                    "Качество и гарантия",
                    "Доступная цена",
                    "Скорость лечения",
                    "Комфорт и безболезненность"
                ]
            }
        ],
        finalBonusText: "Оставьте контакт — мы подготовим план лечения и рассчитаем стоимость. Скидка 10% при записи онлайн."
    },

    /* ---------- CONTACTS ---------- */
    contacts: {
        phone: "+7 727 356 10 10",
        phoneSecondary: "+7 777 356 10 10",
        phoneRaw: "+77273561010",
        phoneSecondaryRaw: "+77773561010",
        whatsapp: "77773561010",
        whatsappDigits: "77773561010",
        email: "info@demokrat.kz",
        address: "г. Алматы, ул. Абая 44, угол ул. Байтурсынова",
        addressSecondary: "Филиал 2: мкр. Самал-2, ул. Жолдасбекова 97",
        hours: "Ежедневно с 9:00 до 21:00",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.5!2d76.9285!3d43.2380!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE0JzE2LjgiTiA3NsKwNTUnNDIuNiJF!5e0!3m2!1sru!2skz"
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
        console.warn("data.js: не удалось прочитать localStorage, используем дефолт.", e);
    }
    return DEFAULT_SITE_DATA;
}

/* Глобальная переменная для доступа из index.js и admin.html */
window.SITE_DATA = getSiteData();
