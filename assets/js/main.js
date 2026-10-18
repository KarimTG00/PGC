(() => {
  const PHONE_INTL = "237693415863";
  const ICONS = {
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    wa: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1.3-1.5-2-1-1 .6a4 4 0 0 1-2-2l.6-1-1-2z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    bath: '<path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M6 12V6a2 2 0 0 1 4 0M7 19l-1 2M17 19l1 2"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    pipe: '<path d="M3 8h9a3 3 0 0 1 3 3v10M3 14h5M12 3v5M15 17h6"/>',
    pool: '<path d="M2 18c2 0 2-1.5 4-1.5S8 18 10 18s2-1.5 4-1.5S16 18 18 18s2-1.5 4-1.5M2 22c2 0 2-1.5 4-1.5S8 22 10 22s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5M8 14V5a2 2 0 0 1 4 0M16 14V5a2 2 0 0 1 4 0M8 8h8"/>',
    fire: '<path d="M12 22a7 7 0 0 0 7-7c0-4-3-6-4-10-3 2-4 4-4 6-1-1-2-2-2-4-2 2-4 5-4 8a7 7 0 0 0 7 7z"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    msg: '<path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'
  };
  document.querySelectorAll("i[data-i]").forEach(el => {
    const p = ICONS[el.dataset.i]; if (!p) return;
    el.outerHTML = `<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  });

  /* Menu mobile + mega menu */
  const burger = document.querySelector(".burger"), menu = document.querySelector(".menu");
  burger?.addEventListener("click", () => {
    const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o);
  });
  document.querySelectorAll(".has-mega>button").forEach(b => b.addEventListener("click", () => {
    b.parentElement.classList.toggle("open");
  }));
  document.querySelectorAll(".mega a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

  /* Reveal on scroll */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* Compteurs */
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; co.unobserve(e.target);
    const n = +e.target.dataset.count, suf = e.target.dataset.suffix || ""; let t0;
    const tick = t => { t0 ??= t; const k = Math.min((t - t0) / 1400, 1); e.target.textContent = Math.round(n * k) + suf; if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), { threshold: .6 });
  document.querySelectorAll("[data-count]").forEach(el => co.observe(el));

  /* Formulaires -> WhatsApp (pas de serveur nécessaire) */
  document.querySelectorAll("form[data-wa]").forEach(f => f.addEventListener("submit", e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f));
    const lines = ["Bonjour PGC cm, je souhaite un devis plomberie.",
      d.nom && `Nom : ${d.nom}`, d.tel && `Téléphone : ${d.tel}`,
      d.service && `Service : ${d.service}`, d.quartier && `Quartier : ${d.quartier}`,
      d.message && `Détails : ${d.message}`].filter(Boolean);
    window.open(`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  }));

  /* Thème (1 = bleu, 2 = orange) */
  const root = document.documentElement, btn = document.querySelector(".theme-toggle");
  const apply = t => { t === "2" ? root.setAttribute("data-theme", "2") : root.removeAttribute("data-theme"); if (btn) btn.textContent = t === "2" ? "Thème : orange" : "Thème : bleu"; };
  let cur = "1"; try { cur = localStorage.getItem("pgc-theme") || "1"; } catch (_) {}
  apply(cur);
  btn?.addEventListener("click", () => { cur = cur === "1" ? "2" : "1"; apply(cur); try { localStorage.setItem("pgc-theme", cur); } catch (_) {} });
})();
