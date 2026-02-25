/* ============================================================
   LUMINA DENTAL — index.js
   Render + Interactions + Motion + Supabase
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     1. DATA (будет перезаписана после загрузки из Supabase)
     ---------------------------------------------------------- */
  let D = window.SITE_DATA || {};

  /* ----------------------------------------------------------
     2. ICONS MAP (emoji / inline SVG)
     ---------------------------------------------------------- */
  const ICONS = {
    shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    users: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    award: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    star: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/></svg>`,
    microscope: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>`,
    clock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    heart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    wallet: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>`,
    phone: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    mapPin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    mail: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    clockAlt: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
  };

  function icon(key) {
    return ICONS[key] || "";
  }

  /* ----------------------------------------------------------
     2. APP LOADER — inject immediately (before any async work)
     ---------------------------------------------------------- */
  (function injectLoader() {
    if (document.getElementById('app-loader')) return;
    const loader = document.createElement('div');
    loader.id = 'app-loader';
    loader.innerHTML = '<div class="loader-spinner"></div>';
    document.body.prepend(loader);
  })();

  function hideLoader() {
    const loader = document.getElementById('app-loader');
    if (!loader) return;
    requestAnimationFrame(() => {
      loader.classList.add('is-hidden');
      loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    });
  }

  /* ----------------------------------------------------------
     3. HELPERS
     ---------------------------------------------------------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return [...(ctx || document).querySelectorAll(sel)]; }

  function formatPrice(n) {
    if (n === 0) return "Бесплатно";
    return n.toLocaleString("ru-RU") + " ₸";
  }

  function starIcons(count) {
    return Array.from({ length: count }, () => "★").join("");
  }

  /** Escape HTML-special chars to prevent XSS via innerHTML */
  function escapeHTML(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /** escapeHTML + convert \n to <br> (escape first, then inject safe <br>) */
  function formatText(str) {
    return escapeHTML(str).replace(/\n/g, "<br>");
  }

  /** Extract only digits from any phone string */
  function normalizePhoneToDigits(phone) {
    return String(phone || "").replace(/\D/g, "");
  }

  /** Build WhatsApp deep-link URL */
  function buildWhatsAppUrl(phoneDigits, message) {
    return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
  }

  /* ----------------------------------------------------------
     4. RENDER FUNCTIONS
     ---------------------------------------------------------- */

  /* ---- Trust ---- */
  function renderTrust() {
    const el = $("#trust-container");
    if (!el || !D.trustBadges) return;
    el.innerHTML = D.trustBadges.map(b => `
      <div class="trust__item reveal-element">
        <span class="trust__value">${escapeHTML(b.value)}</span>
        <span class="trust__label">${escapeHTML(b.text)}</span>
      </div>
    `).join("");
  }

  /* ---- Why ---- */
  function renderWhy() {
    const el = $("#why-container");
    if (!el || !D.why) return;
    el.innerHTML = D.why.map(w => `
      <div class="why__card reveal-element">
        <div class="why__card-icon">${icon(w.iconKey)}</div>
        <h3 class="why__card-title">${escapeHTML(w.title)}</h3>
        <p class="why__card-text">${formatText(w.text)}</p>
      </div>
    `).join("");
  }

  /* ---- Services (Bento) ---- */
  function renderServices() {
    const el = $("#services-container");
    if (!el || !D.services) return;
    el.innerHTML = D.services.map(s => `
      <article class="service-card${s.featured ? " service-card--featured" : ""} reveal-element">
        <img class="service-card__image" src="${escapeHTML(s.image)}" alt="${escapeHTML(s.title)}" loading="lazy">
        <div class="service-card__overlay"></div>
        <div class="service-card__content">
          <h3 class="service-card__title">${escapeHTML(s.title)}</h3>
          <p class="service-card__desc">${formatText(s.desc)}</p>
          <span class="service-card__price">от ${formatPrice(Number(s.priceFrom) || 0)}</span>
        </div>
      </article>
    `).join("");
  }

  /* ---- Cases (Before / After) ---- */
  function renderCases() {
    const el = $("#cases-container");
    if (!el || !D.cases) return;
    el.innerHTML = D.cases.map((c, i) => `
      <div class="case-card reveal-element" data-case="${i}">
        <div class="case-card__slider">
          <img class="case-card__img case-card__img--after" src="${escapeHTML(c.afterImage)}" alt="После: ${escapeHTML(c.title)}" loading="lazy">
          <img class="case-card__img case-card__img--before" src="${escapeHTML(c.beforeImage)}" alt="До: ${escapeHTML(c.title)}" loading="lazy">
          <div class="case-card__handle" style="left:50%"></div>
          <span class="case-card__label case-card__label--before">До</span>
          <span class="case-card__label case-card__label--after">После</span>
          <input type="range" class="case-card__range" min="0" max="100" value="50" aria-label="Сравнение до и после">
        </div>
        <div class="case-card__info">
          <h3 class="case-card__title">${escapeHTML(c.title)}</h3>
          <p class="case-card__text">${escapeHTML(c.caption)} • Срок: ${escapeHTML(c.duration)}</p>
        </div>
      </div>
    `).join("");
  }

  /* ---- Doctors ---- */
  function renderDoctors() {
    const el = $("#doctors-container");
    if (!el || !D.doctors) return;
    el.innerHTML = D.doctors.map(d => `
      <div class="doctor-card reveal-element">
        <img class="doctor-card__photo" src="${escapeHTML(d.photo)}" alt="${escapeHTML(d.name)}" loading="lazy">
        <div class="doctor-card__info">
          <h3 class="doctor-card__name">${escapeHTML(d.name)}</h3>
          <p class="doctor-card__role">${escapeHTML(d.role)}</p>
          <p class="doctor-card__exp">${escapeHTML(d.experience)}</p>
        </div>
      </div>
    `).join("");
  }

  /* ---- Testimonials ---- */
  function renderTestimonials() {
    const el = $("#testimonials-container");
    if (!el || !D.testimonials) return;
    el.innerHTML = D.testimonials.map(t => `
      <div class="swiper-slide">
        <div class="testimonial-card">
          <div class="testimonial-card__stars">${starIcons(Number(t.rating) || 5)}</div>
          <p class="testimonial-card__text">"${formatText(t.text)}"</p>
          <div class="testimonial-card__author">
            <div>
              <p class="testimonial-card__name">${escapeHTML(t.name)}</p>
              <p class="testimonial-card__service">${escapeHTML(t.service || "")} · ${escapeHTML(t.source || "")}</p>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  }

  /* ---- Prices ---- */
  function renderPrices() {
    const el = $("#prices-container");
    if (!el || !D.prices) return;
    el.innerHTML = D.prices.map(p => {
      const price = Number(p.priceFrom) || 0;
      return `
      <div class="price-card${p.accent ? " price-card--accent" : ""} reveal-element">
        <h3 class="price-card__title">${escapeHTML(p.name)}</h3>
        <p class="price-card__amount">${price === 0 ? "Бесплатно" : "от " + formatPrice(price)}</p>
        <a href="#hero" class="btn btn--sm btn--primary">Записаться</a>
      </div>
    `}).join("");
  }

  /* ---- Quiz ---- */
  function renderQuiz() {
    const el = $("#quiz-container");
    if (!el || !D.quiz) return;
    const steps = D.quiz.steps;

    const progressHTML = `
      <div class="quiz__progress">
        ${steps.map((_, i) => `<div class="quiz__progress-dot${i === 0 ? " is-active" : ""}" data-step="${i}"></div>`).join("")}
        <div class="quiz__progress-dot" data-step="final"></div>
      </div>`;

    const stepsHTML = steps.map((s, i) => `
      <div class="quiz__step${i === 0 ? " is-active" : ""}" data-quiz-step="${i}">
        <p class="quiz__question">${escapeHTML(s.question)}</p>
        <div class="quiz__options">
          ${s.options.map(o => `<button type="button" class="quiz__option">${escapeHTML(o)}</button>`).join("")}
        </div>
        <div class="quiz__nav">
          ${i > 0 ? `<button type="button" class="btn btn--outline btn--sm quiz__prev">Назад</button>` : ""}
          <button type="button" class="btn btn--primary btn--sm quiz__next" disabled>Далее</button>
        </div>
      </div>
    `).join("");

    const finalHTML = `
      <div class="quiz__step" data-quiz-step="final">
        <p class="quiz__question">${formatText(D.quiz.finalBonusText)}</p>
        <form class="quiz__final-form" id="quiz-final-form" novalidate>
          <div class="form-group" style="margin-bottom:16px;">
            <input type="text" class="input" name="name" placeholder="Ваше имя" required autocomplete="given-name">
          </div>
          <div class="form-group" style="margin-bottom:16px;">
            <input type="tel" class="input" name="phone" placeholder="+7 (___) ___-__-__" required autocomplete="tel">
          </div>
          <button type="submit" class="btn btn--primary btn--full">Написать в WhatsApp</button>
        </form>
        <div class="quiz__nav" style="margin-top:16px;">
          <button type="button" class="btn btn--outline btn--sm quiz__prev">Назад</button>
        </div>
      </div>`;

    el.innerHTML = progressHTML + stepsHTML + finalHTML;
  }

  /* ---- Contacts ---- */
  function renderContacts() {
    const el = $("#contacts-container");
    if (!el || !D.contacts) return;
    const c = D.contacts;

    /* Второй телефон — если есть */
    const secondPhone = c.phoneSecondary
      ? `<br><a href="tel:${escapeHTML(c.phoneSecondaryRaw)}">${escapeHTML(c.phoneSecondary)}</a>`
      : "";

    el.innerHTML = `
      <div class="contact-item">
        <div class="contact-item__icon">${icon("phone")}</div>
        <div>
          <p class="contact-item__label">Телефон</p>
          <p class="contact-item__value"><a href="tel:${escapeHTML(c.phoneRaw)}">${escapeHTML(c.phone)}</a>${secondPhone}</p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-item__icon">${icon("mail")}</div>
        <div>
          <p class="contact-item__label">E-mail</p>
          <p class="contact-item__value"><a href="mailto:${escapeHTML(c.email)}">${escapeHTML(c.email)}</a></p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-item__icon">${icon("mapPin")}</div>
        <div>
          <p class="contact-item__label">Адрес</p>
          <p class="contact-item__value">${escapeHTML(c.address)}${c.addressSecondary ? `<br>${escapeHTML(c.addressSecondary)}` : ""}</p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-item__icon">${icon("clockAlt")}</div>
        <div>
          <p class="contact-item__label">Режим работы</p>
          <p class="contact-item__value">${escapeHTML(c.hours)}</p>
        </div>
      </div>
    `;

    /* Update map iframe */
    const mapFrame = $("#contacts-map");
    if (mapFrame && c.mapEmbedUrl) {
      let mapUrl = c.mapEmbedUrl.trim();
      /* Safety: if someone pasted full <iframe> HTML, extract just the src URL */
      if (mapUrl.startsWith("<")) {
        const m = mapUrl.match(/src=["']([^"']+)["']/i);
        if (m) mapUrl = m[1];
      }
      mapFrame.src = mapUrl;
    }
  }

  /* ---- Hero text (title + subtitle from data) ---- */
  function renderHeroText() {
    const titleEl = $("#hero-title");
    const subtitleEl = $("#hero-subtitle");
    /* heroTitle may contain trusted <br> and <span> tags from admin */
    if (titleEl && D.heroTitle) titleEl.innerHTML = D.heroTitle;
    /* subtitle is plain text — use textContent for safety */
    if (subtitleEl && D.heroSubtitle) subtitleEl.textContent = D.heroSubtitle;
  }

  /* ---- Hero image ---- */
  function renderHeroImage() {
    const el = $("#hero-image-wrapper");
    if (!el || !D.heroImage) return;
    el.innerHTML = `<img src="${escapeHTML(D.heroImage)}" alt="${escapeHTML(D.brand || "Lumina Dental")} — красивая улыбка" width="600" height="450">`;
  }

  /* ---- Mobile bar update ---- */
  function renderMobileBar() {
    const bar = $("#mobile-bar");
    if (!bar || !D.contacts) return;
    const phoneBtn = bar.querySelector(".mobile-bar__btn--phone");
    const waBtn = bar.querySelector(".mobile-bar__btn--wa");
    if (phoneBtn) phoneBtn.href = "tel:" + D.contacts.phoneRaw;
    if (waBtn) waBtn.href = "https://wa.me/" + (D.contacts.whatsappDigits || D.contacts.whatsapp);
  }

  /* ----------------------------------------------------------
     5. RENDER ALL
     ---------------------------------------------------------- */
  function renderAll() {
    renderHeroText();
    renderHeroImage();
    renderTrust();
    renderWhy();
    renderServices();
    renderCases();
    renderDoctors();
    renderTestimonials();
    renderPrices();
    renderQuiz();
    renderContacts();
    renderMobileBar();
  }

  /* ----------------------------------------------------------
     6. INTERACTIONS
     ---------------------------------------------------------- */

  /* ---- 6a. Sticky header ---- */
  function initStickyHeader() {
    const header = $("#header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("header--scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- 6b. Mobile menu ---- */
  function initMobileMenu() {
    const burger = $("#burger-btn");
    const nav = $("#header-nav");
    if (!burger || !nav) return;

    function open() {
      nav.classList.add("is-open");
      burger.classList.add("is-open");
      burger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    function close() {
      nav.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    burger.addEventListener("click", () => {
      nav.classList.contains("is-open") ? close() : open();
    });

    nav.addEventListener("click", (e) => {
      if (e.target.closest(".header__nav-link")) close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) close();
    });
  }

  /* ---- 6c. Smooth scroll ---- */
  function initSmoothScroll() {
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---- 6d. Before/After sliders ---- */
  function initBeforeAfter() {
    document.addEventListener("input", (e) => {
      if (!e.target.classList.contains("case-card__range")) return;
      const slider = e.target.closest(".case-card__slider");
      if (!slider) return;
      const val = e.target.value;
      const beforeImg = slider.querySelector(".case-card__img--before");
      const handle = slider.querySelector(".case-card__handle");
      if (beforeImg) beforeImg.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
      if (handle) handle.style.left = val + "%";
    });
  }

  /* ---- 6e. Quiz (WhatsApp flow) ---- */
  function initQuiz() {
    const container = $("#quiz-container");
    if (!container) return;

    let current = 0;
    const answers = {};

    function showStep(idx) {
      $$(".quiz__step", container).forEach(s => s.classList.remove("is-active"));
      const target = container.querySelector(`[data-quiz-step="${idx}"]`);
      if (target) target.classList.add("is-active");

      $$(".quiz__progress-dot", container).forEach((dot, i) => {
        dot.classList.remove("is-active", "is-done");
        const step = dot.dataset.step;
        if (step === String(idx) || (idx === "final" && step === "final")) {
          dot.classList.add("is-active");
        } else if (step !== "final" && (idx === "final" || Number(step) < idx)) {
          dot.classList.add("is-done");
        }
      });
    }

    container.addEventListener("click", (e) => {
      const optBtn = e.target.closest(".quiz__option");
      if (optBtn) {
        const step = optBtn.closest(".quiz__step");
        $$(".quiz__option", step).forEach(o => o.classList.remove("is-selected"));
        optBtn.classList.add("is-selected");
        answers[current] = optBtn.textContent.trim();
        const nextBtn = step.querySelector(".quiz__next");
        if (nextBtn) nextBtn.disabled = false;
      }

      if (e.target.closest(".quiz__next")) {
        const totalSteps = D.quiz.steps.length;
        if (current < totalSteps - 1) {
          current++;
          showStep(current);
        } else {
          showStep("final");
        }
      }

      if (e.target.closest(".quiz__prev")) {
        if (current === 0) return;
        const activeStep = container.querySelector(".quiz__step.is-active");
        if (activeStep && activeStep.dataset.quizStep === "final") {
          showStep(current);
        } else {
          current--;
          showStep(current);
        }
      }
    });

    /* Quiz final form → WhatsApp */
    container.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      if (!form.classList.contains("quiz__final-form")) return;

      const nameInp = form.querySelector("[name='name']");
      const phoneInp = form.querySelector("[name='phone']");
      const nameVal = nameInp.value.trim();
      const phoneDigits = normalizePhoneToDigits(phoneInp.value);
      const phoneVal = phoneInp.value.trim();

      /* === Validate name + phone digit count === */
      let valid = true;
      nameInp.classList.remove("is-error");
      phoneInp.classList.remove("is-error");
      if (!nameVal) { nameInp.classList.add("is-error"); valid = false; }
      if (phoneDigits.length < 10) { phoneInp.classList.add("is-error"); valid = false; }
      if (!valid) return;

      /* Собираем ответы */
      const steps = D.quiz.steps || [];
      let answersText = "";
      steps.forEach((s, i) => {
        if (answers[i]) {
          answersText += `\n${i + 1}. ${s.question}\n   → ${answers[i]}`;
        }
      });

      /* Формируем сообщение */
      const message =
        `Здравствуйте! Хочу записаться в Lumina Dental.\n\n` +
        `Имя: ${nameVal}\n` +
        `Телефон: ${phoneVal}\n\n` +
        `Результаты подбора:${answersText}\n\n` +
        `Жду персональный план лечения!`;

      const waDigits = D.contacts?.whatsappDigits || D.contacts?.whatsapp || "77770815444";
      const waUrl = buildWhatsAppUrl(waDigits, message);

      /* Показываем кнопку-ссылку (никакого window.open) */
      form.innerHTML = `
        <div class="form-status form-status--success" style="text-align:center;">
          <p style="font-size:1.125rem;font-weight:600;margin-bottom:8px;">✓ Заявка готова!</p>
          <p style="margin-bottom:16px;">Нажмите, чтобы отправить заявку в WhatsApp</p>
          <a class="btn btn--primary" href="${waUrl}" target="_blank" rel="noopener">Открыть WhatsApp</a>
        </div>`;
    });
  }

  /* ---- 6f. Hero form (WhatsApp) ---- */
  function initHeroForm() {
    const form = $("#hero-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#hero-name");
      const phone = form.querySelector("#hero-phone");
      let valid = true;

      /* Validate by digit count (min 10 digits for international) */
      name.classList.remove("is-error");
      if (!name.value.trim()) { name.classList.add("is-error"); valid = false; }

      phone.classList.remove("is-error");
      const phoneDigits = normalizePhoneToDigits(phone.value);
      if (phoneDigits.length < 10) { phone.classList.add("is-error"); valid = false; }

      if (!valid) return;

      /* Формируем WhatsApp сообщение */
      const nameVal = name.value.trim();
      const phoneVal = phone.value.trim();
      const message =
        `Здравствуйте! Хочу записаться на бесплатную консультацию в Lumina Dental.\n\n` +
        `Имя: ${nameVal}\n` +
        `Телефон: ${phoneVal}`;

      const waDigits = D.contacts?.whatsappDigits || D.contacts?.whatsapp || "77770815444";
      const waUrl = buildWhatsAppUrl(waDigits, message);

      /* Показываем кнопку-ссылку (никакого window.open) */
      form.innerHTML = `
        <div class="form-status form-status--success" style="text-align:center;">
          <p style="font-size:1.125rem;font-weight:600;margin-bottom:8px;">✓ Спасибо, ${escapeHTML(nameVal)}!</p>
          <p style="margin-bottom:16px;">Нажмите, чтобы отправить заявку в WhatsApp</p>
          <a class="btn btn--primary" href="${waUrl}" target="_blank" rel="noopener">Открыть WhatsApp</a>
        </div>`;
    });

    /* Clear error on focus */
    form.addEventListener("focusin", (e) => {
      if (e.target.classList.contains("input")) {
        e.target.classList.remove("is-error");
      }
    });
  }

  /* ---- 6g. Phone input masks (IMask) ---- */
  function initPhoneMasks() {
    if (typeof IMask === "undefined") {
      console.warn("IMask not loaded, skipping phone masks");
      return;
    }

    const maskOpts = {
      mask: /^[+0-9\s\-\(\)]+$/
    };

    /* Hero phone */
    const heroPhone = $("#hero-phone");
    if (heroPhone && !heroPhone._imask) {
      heroPhone._imask = IMask(heroPhone, maskOpts);
    }

    /* Quiz phone — may not exist yet (rendered dynamically), attach via MutationObserver */
    function maskQuizPhone() {
      const quizPhone = document.querySelector('#quiz-final-form [name="phone"]');
      if (quizPhone && !quizPhone._imask) {
        quizPhone._imask = IMask(quizPhone, maskOpts);
      }
    }
    maskQuizPhone();

    /* Re-apply mask when quiz final step becomes visible */
    const quizContainer = $("#quiz-container");
    if (quizContainer) {
      const observer = new MutationObserver(() => maskQuizPhone());
      observer.observe(quizContainer, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
    }
  }

  /* ---- 6h. Swiper ---- */
  function initSwiper() {
    if (typeof Swiper === "undefined") return;
    new Swiper("#testimonials-swiper", {
      slidesPerView: 1,
      spaceBetween: 16,
      grabCursor: true,
      pagination: {
        el: "#testimonials-pagination",
        clickable: true
      },
      navigation: {
        prevEl: "#testimonials-prev",
        nextEl: "#testimonials-next"
      },
      breakpoints: {
        576: { slidesPerView: 1.5, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 }
      }
    });
  }

  /* ----------------------------------------------------------
     7. MOTION 2026
     ---------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 7a. GSAP Hero entrance ---- */
  function initHeroGSAP() {
    if (prefersReducedMotion) {
      $$(".hero .reveal-element").forEach(el => el.classList.add("is-visible"));
      return;
    }
    if (typeof gsap === "undefined") {
      $$(".hero .reveal-element").forEach(el => el.classList.add("is-visible"));
      return;
    }

    const tl = gsap.timeline({ defaults: { duration: 0.7, ease: "power2.out" } });
    const heroEls = $$(".hero .reveal-element");

    /* Set initial state */
    gsap.set(heroEls, { opacity: 0, y: 20 });

    heroEls.forEach((el, i) => {
      tl.to(el, { opacity: 1, y: 0 }, i * 0.12);
    });

    /* After GSAP finishes, add CSS class so transitions still work */
    tl.eventCallback("onComplete", () => {
      heroEls.forEach(el => {
        el.classList.add("is-visible");
        el.style.removeProperty("opacity");
        el.style.removeProperty("transform");
      });
    });
  }

  /* ---- 7b. IntersectionObserver reveal ---- */
  function initReveal() {
    if (prefersReducedMotion) {
      $$(".reveal-element").forEach(el => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    /* Observe all reveal elements EXCEPT hero (GSAP handles those) */
    $$(".reveal-element").forEach(el => {
      if (!el.closest(".hero")) {
        observer.observe(el);
      }
    });
  }

  /* ----------------------------------------------------------
     8. STORAGE SYNC
     ---------------------------------------------------------- */
  function initStorageSync() {
    window.addEventListener("storage", (e) => {
      if (e.key === "siteData_lumina" || e.key === "siteData_lumina_updated") {
        window.location.reload();
      }
    });
  }

  /* ----------------------------------------------------------
     9. SUPABASE DATA LOADER
     ---------------------------------------------------------- */
  async function loadDataFromSupabase() {
    try {
      const sb = window.supabaseClient;
      if (!sb) {
        console.warn("Lumina: supabaseClient не найден, используем fallback");
        return null;
      }

      const { data, error } = await sb
        .from("site_settings")
        .select("data")
        .eq("id", "lumina")
        .single();

      if (error) {
        console.warn("Lumina: Supabase error, используем fallback →", error.message);
        return null;
      }

      if (data && data.data && typeof data.data === "object" && Object.keys(data.data).length > 0) {
        console.info("Lumina: данные загружены из Supabase ✓");
        return data.data;
      }

      console.warn("Lumina: Supabase data пусто, используем fallback");
      return null;
    } catch (err) {
      console.warn("Lumina: Supabase недоступен, используем fallback →", err.message);
      return null;
    }
  }

  /* ----------------------------------------------------------
     10. ASYNC INIT
     ---------------------------------------------------------- */
  async function init() {
    /* 1. Попробуем загрузить из Supabase */
    const supaData = await loadDataFromSupabase();

    if (supaData) {
      /* Supabase данные приоритетнее — мерджим с дефолтом */
      D = Object.assign({}, window.SITE_DATA, supaData);
    } else {
      /* Fallback: localStorage (уже в SITE_DATA) → дефолт из data.js */
      D = window.SITE_DATA || {};
    }

    /* 2. Рендер всех секций */
    renderAll();

    /* 3. Интерактивность */
    initStickyHeader();
    initMobileMenu();
    initSmoothScroll();
    initBeforeAfter();
    initQuiz();
    initHeroForm();
    initPhoneMasks();
    initSwiper();

    /* 4. Motion */
    initHeroGSAP();
    requestAnimationFrame(() => {
      initReveal();
    });

    /* 5. Storage sync */
    initStorageSync();

    /* 6. Hide loader */
    hideLoader();
  }

  /* Wait for DOM */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => init());
  } else {
    init();
  }

})();
