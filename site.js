const BUSINESS = {
  brandName: "Wonderful Craft and Fashion Creations (WCFC)",
  shortName: "Wonderful Craft and Fashion Creations (WCFC)",
  tagline: "Bringing out the beauty in you",
  intro: "Custom crochet and knitting for children and adults. We specialize in summer and winter outfits, bags, and accessories.",
  biography: [
    "We bring out the beauty in you through custom crochet and knitting for children and adults.",
    "We specialize in summer and winter outfits, bags, and accessories."
  ],
  values: [
    { title: "Custom made", text: "Crochet and knitted pieces made around your style and size." },
    { title: "For children and adults", text: "Outfits and accessories for the whole family." },
    { title: "Outfits, bags and more", text: "Summer and winter outfits, bags, and accessories." }
  ],
  ownerName: "",
  ownerPhoto: "images/about.jpg",
  location: {
    city: "Ibadan",
    region: "Oyo",
    country: "Nigeria",
    address: "No 4 Onikoko, Apete Rd",
    note: "Delivery available nationwide"
  },
  website: "", // Set the live HTTPS domain, including its trailing slash, before launch.
  seo: {
    home: { title: "Custom Crochet & Knitwear in Ibadan | WCFC", description: "Custom crochet and knitting for children and adults in Ibadan, Nigeria. Summer and winter outfits, bags and accessories. Nationwide delivery." },
    about: { title: "About Us | WCFC", description: "Wonderful Craft and Fashion Creations brings out the beauty in you through custom crochet and knitting for children and adults." },
    portfolio: { title: "Portfolio | WCFC", description: "See crochet and knitted outfits, bags and accessories made by Wonderful Craft and Fashion Creations in Ibadan." },
    services: { title: "Products & Pricing | WCFC", description: "Crochet shirts, knitted gown sets, cardigans and fresh catfish from WCFC Farms. See prices, production time and delivery." },
    contact: { title: "Contact WCFC | Ibadan, Nigeria", description: "Call, WhatsApp or email Wonderful Craft and Fashion Creations to place an order or ask about a custom design." }
  }
};

document.documentElement.classList.add("js");

const BRAND = {
  logo: "",
  colors: { primary: "#111111", accent: "#c9a227", ink: "#111111", paper: "#ffffff", soft: "#f7f7f7" },
  fonts: { heading: "Fraunces", body: "DM Sans" },
  cornerRadius: "1rem"
};

const PORTFOLIO = {
  categories: ["Crochet", "Knitted", "Children", "Bags & accessories"],
  items: [
    { title: "Adult Crochet Shirt", category: "Crochet", image: "99.jpg", alt: "Adult crochet shirt by WCFC", description: "A custom crochet shirt for adults.", featured: true },
    { title: "Long Knitted Gown Set", category: "Knitted", image: "images/portfolio/knitted-gown-set.jpg", alt: "Long knitted gown set by WCFC", description: "A long knitted gown set, made to order.", featured: true },
    { title: "Machine-Knitted Cardigan", category: "Knitted", image: "images/portfolio/cardigan.jpg", alt: "Machine-knitted cardigan by WCFC", description: "A machine-knitted cardigan.", featured: true },
    { title: "Baby Shoes", category: "Children", image: "images/portfolio/baby-shoes.jpg", alt: "Handmade baby shoes by WCFC", description: "Small, handmade baby shoes.", featured: true },
    { title: "Crochet Bag", category: "Bags & accessories", image: "images/portfolio/crochet-bag.jpg", alt: "Crochet bag by WCFC", description: "A custom crochet bag.", featured: true },
    { title: "Children's Outfit", category: "Children", image: "images/portfolio/childrens-outfit.jpg", alt: "Children's crochet outfit by WCFC", description: "A summer or winter outfit for children.", featured: true }
  ]
};

const SERVICES = {
  currency: "₦",
  intro: "Custom crochet and knitted pieces for children and adults, plus fresh catfish from WCFC Farms.",
  items: [
    { name: "Adult Crochet Shirt", type: "Crochet", price: 45000, description: "A custom crochet shirt for adults." },
    { name: "Long Knitted Gown Set", type: "Knitted", price: 55000, description: "A long knitted gown set, made to order." },
    { name: "Machine-Knitted Cardigan", type: "Knitted", price: 25000, description: "A machine-knitted cardigan." },
    { name: "Bags & Accessories", type: "Crochet", price: null, description: "Custom bags and accessories. Tell us what you would like." },
    { name: "Custom Crochet & Knitting", type: "Custom order", price: null, description: "Summer and winter outfits for children and adults, made around you." },
    { name: "Fresh Catfish (WCFC Farms)", type: "WCFC Farms", price: 4000, unit: "per kg", description: "Fresh catfish from WCFC Farms, sold by the kilogram." }
  ],
  custom: {
    title: "Custom orders",
    description: "We make custom crochet and knitted pieces for children and adults. Tell us what you have in mind and we will agree the details with you.",
    options: ["Children's and adult sizes", "Summer and winter outfits", "Bags and accessories", "Designs made around you"]
  }
};

const CONTACT = {
  whatsapp: "2347039502027",
  phone: "+2347039502027",
  phoneDisplay: "+234 703 950 2027",
  email: "wonderfulcraftfashioncreations@gmail.com",
  hours: "",
  socials: [
    { name: "Instagram", url: "" },
    { name: "Facebook", url: "" },
    { name: "TikTok", url: "" }
  ],
  defaultMessage: "Hello WCFC! I'd like to make an enquiry."
};

const ORDERS = {
  productionTime: [
    { label: "Small items, such as baby shoes", time: "about 3 to 4 weeks" },
    { label: "Larger outfits", time: "varies by design" }
  ],
  payment: {
    methods: [],
    note: "Payment details are shared with you when you place your order."
  },
  delivery: [
    { name: "Nationwide delivery", detail: "Delivery is available across Nigeria.", cost: "" }
  ],
  process: [
    { title: "Send an enquiry", text: "Tell us what you want on WhatsApp, by phone or by email." },
    { title: "Agree the details", text: "We confirm the design, price and timeline with you." },
    { title: "We make it", text: "Your piece is crocheted or knitted to order." },
    { title: "Delivery", text: "We deliver anywhere in Nigeria." }
  ],
  policies: []
};

const $ = (selector, element = document) => element.querySelector(selector);
const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));
const placeLine = location => [location.city, location.region, location.country].filter(Boolean).join(", ");
const money = amount => SERVICES.currency + Number(amount).toLocaleString("en-US");

const BTN = {
  primary: "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-paper transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  outline: "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-ink ring-2 ring-ink/80 transition hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  light: "inline-flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-3.5 font-semibold text-ink transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
};

function placeholder(label = "", index = 0) {
  const color = [BRAND.colors.primary, BRAND.colors.accent][index % 2];
  const text = String(label).slice(0, 26).replace(/[<>&"']/g, "");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><defs><pattern id="k" width="26" height="30" patternUnits="userSpaceOnUse"><path d="M5 5l8 14 8-14" fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/></pattern></defs><rect width="400" height="500" fill="${BRAND.colors.soft}"/><rect width="400" height="500" fill="url(#k)"/><rect x="50" y="200" width="300" height="100" rx="14" fill="${BRAND.colors.paper}" opacity=".93"/><text x="200" y="250" text-anchor="middle" font-family="Georgia,serif" font-size="22" fill="${BRAND.colors.ink}">${text}</text><text x="200" y="278" text-anchor="middle" font-family="sans-serif" font-size="11" letter-spacing="3" fill="${BRAND.colors.primary}">PHOTO COMING SOON</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function imgFallback(element) {
  element.onerror = null;
  element.src = placeholder(element.dataset.label, Number(element.dataset.ph));
}

function image({ src, alt, cls = "", index = 0, label = "", eager = false }) {
  const fallback = src || placeholder(label, index);
  return `<img src="${esc(fallback)}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} data-label="${esc(label)}" data-ph="${index}" onerror="imgFallback(this)" class="${cls}">`;
}

function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal, .reveal-heading").forEach(element => element.classList.add("in"));
    return;
  }
  const observer = observeReveals.observer || (observeReveals.observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 }));
  document.querySelectorAll(".reveal:not(.in), .reveal-heading:not(.in)").forEach(element => observer.observe(element));
}

function initHeroSlideshow() {
  const slideshow = $("#hero-slideshow");
  const toggle = $("#hero-slideshow-toggle");
  if (!slideshow || !toggle) return;

  const slides = [...slideshow.querySelectorAll(".wcfc-hero-slide")];
  if (slides.length < 2) {
    toggle.hidden = true;
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeIndex = 0;
  let paused = reducedMotion.matches;
  let timer;

  function showNext() {
    slides[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add("is-active");
  }

  function syncTimer() {
    window.clearInterval(timer);
    if (!paused && !document.hidden) timer = window.setInterval(showNext, 6000);
  }

  function updateToggle() {
    toggle.textContent = paused ? "Play slideshow" : "Pause slideshow";
    toggle.setAttribute("aria-pressed", String(paused));
  }

  toggle.addEventListener("click", () => {
    paused = !paused;
    updateToggle();
    syncTimer();
  });
  document.addEventListener("visibilitychange", syncTimer);
  reducedMotion.addEventListener("change", event => {
    if (event.matches) {
      paused = true;
      updateToggle();
    }
    syncTimer();
  });
  updateToggle();
  syncTimer();
}

function priceText(service) {
  if (service.price == null) return "Price on request";
  const unit = service.unit ? ` <span class="text-sm font-normal text-ink/70">${esc(service.unit)}</span>` : "";
  return `${service.pricePrefix ? `${esc(service.pricePrefix)} ` : ""}${money(service.price)}${unit}`;
}

const WA = {
  ready: /^\d{10,15}$/.test(CONTACT.whatsapp),
  icon: '<svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8 7.8c.3-.7.6-.7 1-.7h.6c.2 0 .4.1.5.4l.9 2.1c.1.2.1.4-.1.6l-.7.9c-.2.2-.2.4-.1.6.6 1.1 1.5 2 2.7 2.6.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.6-.2l2.1 1c.2.1.4.3.4.5 0 .4-.2 1.4-.8 1.8-.5.4-1.2.6-2 .4-1.4-.3-3.2-1.2-4.7-2.7-1.3-1.3-2.2-2.9-2.5-4.1-.2-.8 0-1.6.4-2.1Z"/></svg>',
  url(message) {
    return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message || CONTACT.defaultMessage)}`;
  },
  mailto(message, subject = "Enquiry") {
    return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message || CONTACT.defaultMessage)}`;
  },
  open(message) {
    if (WA.ready) {
      window.open(WA.url(message), "_blank", "noopener,noreferrer");
    } else if (CONTACT.email) {
      window.location.href = WA.mailto(message);
    } else {
      throw new Error("No WhatsApp number or email address is configured for enquiries.");
    }
  },
  cta(message, label = "Enquire on WhatsApp", cls = BTN.primary) {
    if (WA.ready) return `<a href="${esc(WA.url(message))}" target="_blank" rel="noopener noreferrer" class="${cls}">${WA.icon}${esc(label)}</a>`;
    if (CONTACT.email) return `<a href="${esc(WA.mailto(message))}" class="${cls}">Enquire by email</a>`;
    return `<a href="contact.html" class="${cls}">Contact us</a>`;
  },
  mountFloat() {
    if (!WA.ready) return;
    const anchor = document.createElement("a");
    anchor.href = WA.url();
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.setAttribute("aria-label", "Chat with us on WhatsApp");
    anchor.className = "fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-white shadow-xl shadow-ink/30 transition hover:scale-105 hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
    anchor.innerHTML = WA.icon.replace("size-5", "size-7");
    document.body.appendChild(anchor);
  }
};

const Gallery = (() => {
  let items = [];
  let index = 0;
  let dialog;
  let opener;

  function render(container, records) {
    items = records;
    container.innerHTML = records.length
      ? `<ul class="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">${records.map((item, i) => `
          <li class="reveal">
            <button type="button" data-gallery-index="${i}" aria-label="View ${esc(item.title)}" class="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              <span class="relative block aspect-[4/5] overflow-hidden rounded-brand bg-soft">${image({ src: item.image, alt: item.alt || item.title, index: i, label: item.title, cls: "size-full object-cover transition duration-500 group-hover:scale-105" })}</span>
              <span class="mt-3 block font-display text-xl font-semibold group-hover:text-primary">${esc(item.title)}</span>
              <span class="block text-sm text-ink/70">${esc(item.category)}</span>
            </button>
          </li>`).join("")}</ul>`
      : '<p class="text-ink/70">No projects in this category yet.</p>';
    container.onclick = event => {
      const button = event.target.closest("[data-gallery-index]");
      if (button) open(Number(button.dataset.galleryIndex), button);
    };
    observeReveals();
  }

  function build() {
    dialog = document.createElement("dialog");
    dialog.setAttribute("aria-labelledby", "lb-title");
    dialog.className = "m-auto max-h-[92dvh] w-[min(100%-1.5rem,64rem)] overflow-y-auto rounded-brand bg-paper p-0 text-ink backdrop:bg-ink/85";
    dialog.innerHTML = `
      <div class="grid md:grid-cols-[3fr_2fr]">
        <div class="relative bg-soft">
          <div id="lb-img" class="grid place-items-center p-3 md:p-4"></div>
          <button type="button" id="lb-prev" aria-label="Previous photo" class="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-paper/90 text-xl shadow hover:bg-paper focus-visible:outline-2 focus-visible:outline-primary">&larr;</button>
          <button type="button" id="lb-next" aria-label="Next photo" class="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-paper/90 text-xl shadow hover:bg-paper focus-visible:outline-2 focus-visible:outline-primary">&rarr;</button>
        </div>
        <div class="flex flex-col p-6 pt-14 md:p-8 md:pt-14">
          <p id="lb-cat" class="text-xs font-semibold uppercase tracking-widest text-primary"></p>
          <h2 id="lb-title" class="mt-2 font-display text-3xl font-semibold leading-tight"></h2>
          <p id="lb-desc" class="mt-4 text-ink/80"></p>
          <div id="lb-cta" class="mt-6"></div>
          <p id="lb-count" class="mt-auto pt-6 text-sm text-ink/60"></p>
        </div>
      </div>
      <button type="button" id="lb-close" aria-label="Close" class="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-paper text-xl shadow hover:bg-soft focus-visible:outline-2 focus-visible:outline-primary">&times;</button>`;
    document.body.appendChild(dialog);
    $("#lb-close", dialog).onclick = () => dialog.close();
    $("#lb-prev", dialog).onclick = () => show(index - 1);
    $("#lb-next", dialog).onclick = () => show(index + 1);
    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("keydown", event => {
      if (event.key === "ArrowRight") show(index + 1);
      if (event.key === "ArrowLeft") show(index - 1);
    });
    dialog.addEventListener("close", () => {
      document.body.classList.remove("overflow-hidden");
      if (opener?.isConnected) opener.focus();
    });
  }

  function show(nextIndex) {
    index = (nextIndex + items.length) % items.length;
    const item = items[index];
    $("#lb-img", dialog).innerHTML = image({ src: item.image, alt: item.alt || item.title, index, label: item.title, eager: true, cls: "max-h-[55dvh] w-auto max-w-full rounded-brand object-contain md:max-h-[78dvh]" });
    $("#lb-cat", dialog).textContent = item.category;
    $("#lb-title", dialog).textContent = item.title;
    $("#lb-desc", dialog).textContent = item.description || "";
    $("#lb-cta", dialog).innerHTML = WA.cta(`Hello! I'd love something like your "${item.title}". Can we talk about it?`, "Ask about this piece");
    $("#lb-count", dialog).textContent = `${index + 1} of ${items.length}`;
    const multiple = items.length > 1;
    $("#lb-prev", dialog).hidden = $("#lb-next", dialog).hidden = !multiple;
  }

  function open(itemIndex, trigger) {
    if (!dialog) build();
    opener = trigger;
    show(itemIndex);
    document.body.classList.add("overflow-hidden");
    dialog.showModal();
  }

  return { render };
})();

const NAV = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "about", label: "About", href: "about.html" },
  { id: "portfolio", label: "Portfolio", href: "portfolio.html" },
  { id: "services", label: "Services", href: "services.html" },
  { id: "contact", label: "Contact", href: "contact.html", cta: true }
];

function renderLayout(page) {
  const logo = BRAND.logo
    ? `<img src="${esc(BRAND.logo)}" alt="${esc(BUSINESS.brandName)}" class="h-10 w-auto" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span hidden class="block max-w-[270px] font-display text-lg font-bold leading-tight tracking-tight text-accent sm:max-w-none sm:text-xl lg:text-2xl">${esc(BUSINESS.shortName)}</span>`
    : `<span class="block max-w-[270px] font-display text-lg font-bold leading-tight tracking-tight text-accent sm:max-w-none sm:text-xl lg:text-2xl">${esc(BUSINESS.shortName || BUSINESS.brandName)}</span>`;
  const navLink = item => `<li><a href="${item.href}"${item.id === page ? ' aria-current="page"' : ""} class="${item.cta
    ? "rounded-full bg-primary px-5 py-2 text-paper hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    : "hover:text-primary aria-[current=page]:text-primary aria-[current=page]:underline aria-[current=page]:decoration-accent aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"}">${item.label}</a></li>`;
  const mobileNavLink = item => `<li${item.cta ? ' class="col-span-2"' : ""}><a href="${item.href}"${item.id === page ? ' aria-current="page"' : ""} class="${item.cta
    ? "flex min-h-12 items-center justify-center rounded-xl bg-accent px-4 py-3 font-bold text-ink transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    : "flex min-h-12 items-center justify-between rounded-xl border border-ink/10 bg-paper px-4 py-3 transition hover:border-accent hover:bg-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-[current=page]:border-accent aria-[current=page]:bg-soft aria-[current=page]:font-semibold"}">${item.label}${item.id === page ? '<span class="size-2 rounded-full bg-accent" aria-hidden="true"></span>' : ""}</a></li>`;

  $("#site-header").innerHTML = `
    <header id="header" class="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur transition-shadow">
      <nav aria-label="Main" class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="index.html" class="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">${logo}</a>
        <ul class="hidden items-center gap-8 text-sm font-medium md:flex">${NAV.map(navLink).join("")}</ul>
        <button id="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-menu" class="rounded-lg p-2 hover:bg-soft focus-visible:outline-2 focus-visible:outline-primary md:hidden">
          <span class="sr-only">Open menu</span>
          <svg id="ico-open" class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          <svg id="ico-close" class="hidden size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
        </button>
      </nav>
      <div id="mobile-menu" hidden class="border-t border-ink/10 bg-soft px-4 py-5 md:hidden">
        <div class="mx-auto max-w-7xl">
          <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/60">Explore</p>
          <ul class="grid grid-cols-2 gap-2 text-sm font-medium">${NAV.map(mobileNavLink).join("")}</ul>
        </div>
      </div>
    </header>`;

  const socials = CONTACT.socials.filter(item => item.url).map(item => `<li><a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer" class="hover:text-primary">${esc(item.name)}</a></li>`).join("");
  $("#site-footer").innerHTML = `
    <footer class="border-t border-ink/10 bg-soft">
      <div class="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p class="font-display text-2xl font-bold">${esc(BUSINESS.brandName)}</p>
          <p class="mt-2 max-w-xs text-sm text-ink/70">${esc(BUSINESS.tagline)}</p>
          <p class="mt-2 text-sm text-ink/70">${esc(placeLine(BUSINESS.location))}</p>
          ${BUSINESS.location.address ? `<p class="text-sm text-ink/70">${esc(BUSINESS.location.address)}</p>` : ""}
        </div>
        <nav aria-label="Footer">
          <p class="text-sm font-semibold">Explore</p>
          <ul class="mt-3 space-y-2 text-sm text-ink/70">${NAV.map(item => `<li><a href="${item.href}" class="hover:text-primary">${item.label}</a></li>`).join("")}</ul>
        </nav>
        <div>
          <p class="text-sm font-semibold">Get in touch</p>
          <ul class="mt-3 space-y-2 text-sm text-ink/70">
            ${CONTACT.phone ? `<li><a href="tel:${esc(CONTACT.phone)}" class="hover:text-primary">${esc(CONTACT.phoneDisplay || CONTACT.phone)}</a></li>` : ""}
            ${CONTACT.email ? `<li><a href="mailto:${esc(CONTACT.email)}" class="break-all hover:text-primary">${esc(CONTACT.email)}</a></li>` : ""}
            ${socials}
          </ul>
        </div>
      </div>
      <p class="border-t border-ink/10 px-4 py-5 text-center text-sm text-ink/60">&copy; ${new Date().getFullYear()} ${esc(BUSINESS.brandName)}. All rights reserved.</p>
    </footer>`;

  const seo = BUSINESS.seo[page];
  document.title = seo.title;
  $('meta[name="description"]').content = seo.description;
  $('meta[property="og:title"]').content = seo.title;
  $('meta[property="og:description"]').content = seo.description;
  $('meta[name="theme-color"]').content = BRAND.colors.primary;

  if (BUSINESS.website) {
    const base = new URL(BUSINESS.website);
    if (base.protocol !== "https:" && base.hostname !== "localhost") {
      throw new Error("BUSINESS.website must use HTTPS.");
    }
    const canonical = page === "home" ? base.href : new URL(`${page}.html`, base).href;
    let canonicalLink = $('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    let ogUrl = $('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = canonical;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.brandName,
    description: BUSINESS.intro,
    email: CONTACT.email || undefined,
    telephone: CONTACT.phone || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.location.address || undefined,
      addressLocality: BUSINESS.location.city || undefined,
      addressRegion: BUSINESS.location.region || undefined,
      addressCountry: BUSINESS.location.country || undefined
    },
    sameAs: CONTACT.socials.filter(item => item.url).map(item => item.url)
  };
  if (BUSINESS.website) structuredData.url = BUSINESS.website;
  const schema = document.createElement("script");
  schema.type = "application/ld+json";
  schema.textContent = JSON.stringify(structuredData);
  document.head.appendChild(schema);

  const button = $("#menu-btn");
  const menu = $("#mobile-menu");
  function setMenu(open) {
    menu.hidden = !open;
    button.setAttribute("aria-expanded", String(open));
    $("span", button).textContent = open ? "Close menu" : "Open menu";
    $("#ico-open").classList.toggle("hidden", open);
    $("#ico-close").classList.toggle("hidden", !open);
  }
  button.addEventListener("click", () => setMenu(menu.hidden));
  menu.addEventListener("click", event => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !menu.hidden) {
      setMenu(false);
      button.focus();
    }
  });
  window.matchMedia("(min-width: 768px)").addEventListener("change", event => {
    if (event.matches) setMenu(false);
  });
  window.addEventListener("scroll", () => $("#header").classList.toggle("shadow-md", window.scrollY > 8), { passive: true });
  WA.mountFloat();
}

function titleBand(title, description) {
  return `<section class="bg-soft"><div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8"><h1 class="font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">${title}</h1><p class="mt-4 max-w-2xl text-lg text-ink/75">${description}</p></div></section>`;
}

function renderHome() {
  const featured = PORTFOLIO.items.filter(item => item.featured).slice(0, 6);
  if ($("#hero-title")) {
    $("#hero-eyebrow").textContent = BUSINESS.brandName;
    $("#hero-intro").textContent = BUSINESS.intro;
    $("#hero-ctas").innerHTML = `<a href="portfolio.html" class="${BTN.primary}">See our work</a>${WA.cta("Hello! I'd like to place an order.", "Order on WhatsApp", BTN.outline)}`;
    $("#cta-actions").innerHTML = WA.cta(CONTACT.defaultMessage, "Start a conversation", BTN.light);
    initHeroSlideshow();
    Gallery.render($("#featured-gallery"), featured.length ? featured : PORTFOLIO.items.slice(0, 6));
    return;
  }
  $("#main").innerHTML = `
    <section aria-labelledby="hero-title" class="wcfc-hero relative isolate min-h-[520px] overflow-hidden bg-ink text-paper sm:min-h-[580px]">
      <div id="hero-slideshow" class="wcfc-hero-slideshow" aria-hidden="true">
        <div class="wcfc-hero-slide is-active" style="background-image:url('images/hero/knitwear-outdoor.jpg')"></div>
        <div class="wcfc-hero-slide" style="background-image:url('images/hero/baby-knitwear-set.jpg')"></div>
        <div class="wcfc-hero-slide" style="background-image:url('images/hero/colorful-knitwear.jpg')"></div>
        <div class="wcfc-hero-slide" style="background-image:url('images/hero/gold-knit-sweater.jpg')"></div>
      </div>
      <div class="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-24 sm:px-6 sm:py-28 md:min-h-[580px] md:py-36 lg:px-8">
        <div class="wcfc-hero-copy max-w-3xl">
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-accent">${esc(BUSINESS.brandName)}</p>
          <h1 id="hero-title" class="mt-3 font-display text-5xl font-semibold leading-[1.08] text-white sm:text-6xl">${esc(BUSINESS.tagline)}</h1>
          <p class="mt-5 max-w-lg text-lg leading-relaxed text-white/90">${esc(BUSINESS.intro)}</p>
          <div class="mt-8 flex flex-wrap gap-3"><a href="portfolio.html" class="${BTN.primary}">See our work</a>${WA.cta("Hello! I'd like to place an order.", "Order on WhatsApp", "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white ring-2 ring-white/80 transition hover:bg-white hover:text-ink")}</div>
        </div>
      </div>
      <button id="hero-slideshow-toggle" type="button" aria-pressed="false" class="absolute bottom-5 right-5 z-20 rounded-full border border-white/60 bg-ink/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Pause slideshow</button>
    </section>
    <section aria-labelledby="featured-title" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div class="flex flex-wrap items-end justify-between gap-4"><h2 id="featured-title" class="font-display text-3xl font-semibold sm:text-4xl">Recent work</h2><a href="portfolio.html" class="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4">View full portfolio</a></div>
      <div id="featured-gallery" class="mt-10"></div>
    </section>
    <section aria-labelledby="services-title" class="border-y border-ink/10 bg-soft">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div class="flex flex-wrap items-end justify-between gap-4"><h2 id="services-title" class="font-display text-3xl font-semibold sm:text-4xl">What we make</h2><a href="services.html" class="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4">All products and pricing</a></div>
        <div class="mt-10 grid gap-6 md:grid-cols-3">${SERVICES.items.slice(0, 3).map(service => `<article class="reveal rounded-brand border border-ink/10 bg-paper p-7"><h3 class="font-display text-2xl font-semibold">${esc(service.name)}</h3><p class="mt-2 text-ink/75">${esc(service.description)}</p><p class="mt-4 font-semibold">${priceText(service)}</p></article>`).join("")}</div>
      </div>
    </section>
    <section aria-labelledby="how-title" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <h2 id="how-title" class="font-display text-3xl font-semibold sm:text-4xl">How custom orders work</h2>
      <ol class="mt-10 grid gap-5 rounded-brand bg-soft p-5 sm:grid-cols-2 lg:grid-cols-4">${ORDERS.process.map((step, i) => `<li class="reveal rounded-brand bg-paper p-6"><span class="font-display text-4xl text-primary">${String(i + 1).padStart(2, "0")}</span><h3 class="mt-2 text-lg font-semibold">${esc(step.title)}</h3><p class="mt-1 text-ink/75">${esc(step.text)}</p></li>`).join("")}</ol>
    </section>
    <section aria-labelledby="cta-title" class="bg-primary text-paper">
      <div class="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8"><h2 id="cta-title" class="font-display text-3xl font-semibold sm:text-4xl">Have something in mind?</h2><p class="mx-auto mt-3 max-w-xl opacity-90">Tell us what you would love and we will send you a quote.</p><div class="mt-7 flex justify-center">${WA.cta(CONTACT.defaultMessage, "Start a conversation", BTN.light)}</div></div>
    </section>`;
  initHeroSlideshow();
  Gallery.render($("#featured-gallery"), featured.length ? featured : PORTFOLIO.items.slice(0, 6));
}

function renderAbout() {
  if ($("#owner-photo")) {
    $("#owner-name").textContent = BUSINESS.ownerName || "";
    $("#owner-photo").innerHTML = image({ src: BUSINESS.ownerPhoto, alt: `${BUSINESS.ownerName ? `${BUSINESS.ownerName}, ` : ""}${BUSINESS.brandName}`, label: BUSINESS.shortName || BUSINESS.brandName, eager: true, cls: "size-full object-cover" });
    return;
  }
  $("#main").innerHTML = `
    ${titleBand("About us", "The story behind the stitches.")}
    <section aria-labelledby="bio-title" class="mx-auto grid max-w-7xl items-start gap-12 px-4 py-16 sm:px-6 md:grid-cols-5 md:py-20 lg:px-8">
      <div class="md:col-span-2"><div id="owner-photo" class="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-brand bg-soft"></div><p class="mt-4 text-center font-display text-xl font-semibold">${esc(BUSINESS.ownerName)}</p></div>
      <div class="md:col-span-3"><h2 id="bio-title" class="font-display text-3xl font-semibold sm:text-4xl">Our story</h2><div class="mt-5 space-y-4 text-lg leading-relaxed text-ink/80">${BUSINESS.biography.map(paragraph => `<p>${esc(paragraph)}</p>`).join("")}</div><div class="mt-8"><h3 class="text-sm font-semibold uppercase tracking-widest text-primary">Find us</h3><div class="mt-2"><p class="font-semibold">${esc(placeLine(BUSINESS.location))}</p>${BUSINESS.location.address ? `<p class="text-ink/75">${esc(BUSINESS.location.address)}</p>` : ""}${BUSINESS.location.note ? `<p class="text-ink/75">${esc(BUSINESS.location.note)}</p>` : ""}</div></div><div class="mt-8 flex flex-wrap gap-3"><a href="portfolio.html" class="${BTN.primary}">View our work</a>${WA.cta(CONTACT.defaultMessage, "Say hello", BTN.outline)}</div></div>
    </section>
    <section aria-labelledby="values-title" class="border-t border-ink/10 bg-soft"><div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8"><h2 id="values-title" class="font-display text-3xl font-semibold sm:text-4xl">What we do</h2><ul class="mt-10 grid gap-6 md:grid-cols-3">${BUSINESS.values.map(value => `<li class="reveal rounded-brand border border-ink/10 bg-paper p-7"><h3 class="font-display text-2xl font-semibold">${esc(value.title)}</h3><p class="mt-2 text-ink/75">${esc(value.text)}</p></li>`).join("")}</ul></div></section>`;
  $("#owner-photo").innerHTML = image({ src: BUSINESS.ownerPhoto, alt: `${BUSINESS.ownerName ? `${BUSINESS.ownerName}, ` : ""}${BUSINESS.brandName}`, label: BUSINESS.shortName || BUSINESS.brandName, eager: true, cls: "size-full object-cover" });
}

function renderPortfolio() {
  if (!$("#filters")) {
  $("#main").innerHTML = `
    ${titleBand("Portfolio", "A look at our pieces. Tap any photo to see it larger and read more.")}
    <section aria-label="Project gallery" class="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div id="filters" role="group" aria-label="Filter by category" class="flex flex-wrap gap-2"></div>
      <p id="gallery-count" class="mt-4 text-ink/70" aria-live="polite"></p>
      <div id="gallery" class="mt-8"></div>
    </section>`;
  }
  let active = "All";
  const categories = ["All", ...PORTFOLIO.categories];
  function draw() {
    $("#filters").innerHTML = categories.map(category => `<button type="button" data-category="${esc(category)}" aria-pressed="${category === active}" class="rounded-full border px-5 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${category === active ? "border-ink bg-ink text-paper" : "border-ink/20 hover:border-primary"}">${esc(category)}</button>`).join("");
    const filtered = PORTFOLIO.items.filter(item => active === "All" || item.category === active);
    Gallery.render($("#gallery"), filtered);
    $("#gallery-count").textContent = `Showing ${filtered.length} ${filtered.length === 1 ? "project" : "projects"}${active === "All" ? "" : ` in ${active}`}`;
  }
  $("#filters").addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    active = button.dataset.category;
    draw();
    $(`[data-category="${CSS.escape(active)}"]`).focus();
  });
  draw();
}

function renderServices() {
  if ($("#service-grid")) return;
  $("#main").innerHTML = `
    ${titleBand("Products & services", SERVICES.intro)}
    <section aria-labelledby="products-title" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <h2 id="products-title" class="sr-only">Products and services</h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">${SERVICES.items.map(service => `<article class="reveal flex flex-col rounded-brand border border-ink/10 bg-paper p-7 shadow-sm"><p class="text-xs font-semibold uppercase tracking-widest text-primary">${esc(service.type)}</p><h3 class="mt-2 font-display text-2xl font-semibold">${esc(service.name)}</h3><p class="mt-2 flex-1 text-ink/75">${esc(service.description)}</p><p class="mt-5 text-lg font-semibold">${priceText(service)}</p><div class="mt-5">${WA.cta(`Hello! I'd like to enquire about: ${service.name}.`, "Enquire", BTN.primary)}</div></article>`).join("")}</div>
    </section>
    <section aria-labelledby="custom-title" class="bg-primary text-paper"><div class="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8"><div><h2 id="custom-title" class="font-display text-3xl font-semibold sm:text-4xl">${esc(SERVICES.custom.title)}</h2><p class="mt-3 max-w-lg opacity-90">${esc(SERVICES.custom.description)}</p><div class="mt-6">${WA.cta("Hello! I'd like to ask about a custom order.", "Request a custom order", BTN.light)}</div></div><ul class="grid gap-3 text-lg">${SERVICES.custom.options.map(option => `<li class="flex gap-2"><span class="text-paper" aria-hidden="true">&#10003;</span>${esc(option)}</li>`).join("")}</ul></div></section>
    <section aria-labelledby="order-info-title" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <h2 id="order-info-title" class="font-display text-3xl font-semibold sm:text-4xl">Order information</h2>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <div class="reveal rounded-brand border border-ink/10 bg-paper p-7"><h3 class="font-display text-2xl font-semibold">Production time</h3><ul class="mt-4 space-y-3">${ORDERS.productionTime.map(time => `<li><span class="font-semibold">${esc(time.label)}:</span> ${esc(time.time)}</li>`).join("")}</ul></div>
        <div class="reveal rounded-brand border border-ink/10 bg-paper p-7"><h3 class="font-display text-2xl font-semibold">Payment</h3><ul class="mt-4 list-inside list-disc space-y-2">${ORDERS.payment.methods.map(method => `<li>${esc(method)}</li>`).join("")}${ORDERS.payment.note ? `<li class="list-none pt-2 text-ink/80">${esc(ORDERS.payment.note)}</li>` : ""}</ul></div>
        <div class="reveal rounded-brand border border-ink/10 bg-paper p-7"><h3 class="font-display text-2xl font-semibold">Delivery</h3><ul class="mt-4 space-y-3">${ORDERS.delivery.map(delivery => `<li><span class="font-semibold">${esc(delivery.name)}</span><br><span class="text-ink/75">${esc(delivery.detail)}${delivery.cost ? ` ${esc(delivery.cost)}.` : ""}</span></li>`).join("")}</ul></div>
      </div>
      ${ORDERS.policies.length ? `<ul class="mt-8 list-inside list-disc space-y-1 text-sm text-ink/70">${ORDERS.policies.map(policy => `<li>${esc(policy)}</li>`).join("")}</ul>` : ""}
    </section>`;
}

function renderContact() {
  const cards = [];
  if (WA.ready) cards.push(`<a href="${esc(WA.url())}" target="_blank" rel="noopener noreferrer" class="block rounded-brand bg-primary p-6 text-paper transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><p class="text-sm opacity-90">WhatsApp</p><p class="mt-1 text-lg font-semibold">Chat with us</p></a>`);
  if (CONTACT.phone) cards.push(`<div class="rounded-brand border border-ink/10 bg-paper p-6"><p class="text-sm text-ink/70">Call us</p><a href="tel:${esc(CONTACT.phone)}" class="mt-1 block text-lg font-semibold hover:text-primary">${esc(CONTACT.phoneDisplay || CONTACT.phone)}</a></div>`);
  if (CONTACT.email) cards.push(`<div class="rounded-brand border border-ink/10 bg-paper p-6"><p class="text-sm text-ink/70">Email</p><a href="mailto:${esc(CONTACT.email)}" class="mt-1 block break-all text-lg font-semibold hover:text-primary">${esc(CONTACT.email)}</a></div>`);
  const location = BUSINESS.location;
  cards.push(`<div class="rounded-brand border border-ink/10 bg-paper p-6"><p class="text-sm text-ink/70">Location</p><p class="mt-1 text-lg font-semibold">${esc(placeLine(location))}</p>${location.address ? `<p class="text-ink/75">${esc(location.address)}</p>` : ""}${location.note ? `<p class="text-ink/75">${esc(location.note)}</p>` : ""}</div>`);
  if (CONTACT.hours) cards.push(`<div class="rounded-brand border border-ink/10 bg-paper p-6"><p class="text-sm text-ink/70">Opening hours</p><p class="mt-1 text-lg font-semibold">${esc(CONTACT.hours)}</p></div>`);
  const socials = CONTACT.socials.filter(social => social.url);
  if (socials.length) cards.push(`<div class="rounded-brand border border-ink/10 bg-paper p-6"><p class="text-sm text-ink/70">Follow us</p><ul class="mt-2 flex flex-wrap gap-x-5 gap-y-1">${socials.map(social => `<li><a href="${esc(social.url)}" target="_blank" rel="noopener noreferrer" class="font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-primary">${esc(social.name)}</a></li>`).join("")}</ul></div>`);

  if (!$("#enquiry-form")) {
  $("#main").innerHTML = `
    ${titleBand("Get in touch", "Questions, orders or a custom idea? Send us a message and we will reply as soon as we can.")}
    <section aria-label="Contact details and enquiry form" class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
      <div class="grid content-start gap-4">${cards.join("")}</div>
      <form id="enquiry-form" novalidate class="rounded-brand bg-soft p-6 sm:p-8">
        <h2 class="font-display text-2xl font-semibold">Send an enquiry</h2>
        <p class="mt-1 text-sm text-ink/70">This opens WhatsApp (or your email app) with your message ready to send. Nothing is stored on this website.</p>
        <label for="name" class="mt-6 block text-sm font-semibold">Your name</label>
        <input id="name" type="text" autocomplete="name" required aria-invalid="false" class="mt-1 w-full rounded-lg border border-ink/20 bg-paper px-4 py-3 focus-visible:outline-2 focus-visible:outline-primary aria-[invalid=true]:border-primary">
        <label for="interest" class="mt-4 block text-sm font-semibold">I'm interested in</label>
        <select id="interest" class="mt-1 w-full rounded-lg border border-ink/20 bg-paper px-4 py-3 focus-visible:outline-2 focus-visible:outline-primary">${["General enquiry", ...SERVICES.items.map(service => service.name)].map(item => `<option>${esc(item)}</option>`).join("")}</select>
        <label for="message" class="mt-4 block text-sm font-semibold">Message</label>
        <textarea id="message" rows="5" required aria-invalid="false" class="mt-1 w-full rounded-lg border border-ink/20 bg-paper px-4 py-3 focus-visible:outline-2 focus-visible:outline-primary aria-[invalid=true]:border-primary"></textarea>
        <button type="submit" class="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-paper transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Send enquiry</button>
        <p id="form-note" role="status" class="mt-3 min-h-6 text-sm text-ink/80"></p>
      </form>
    </section>`;
  }
  $("#contact-cards").innerHTML = cards.join("");
  $("#enquiry-form").addEventListener("submit", event => {
    event.preventDefault();
    const name = $("#name").value.trim();
    const message = $("#message").value.trim();
    const note = $("#form-note");
    $("#name").setAttribute("aria-invalid", String(!name));
    $("#message").setAttribute("aria-invalid", String(!message));
    if (!name || !message) {
      note.textContent = "Please add your name and a short message.";
      return;
    }
    if (!WA.ready && !CONTACT.email) {
      note.textContent = "Enquiries are temporarily unavailable. Please try again later.";
      return;
    }
    const text = `Hello! My name is ${name}.\nI'm interested in: ${$("#interest").value}.\n\n${message}`;
    note.textContent = WA.ready ? "Opening WhatsApp..." : "Opening your email app...";
    WA.open(text);
  });
}

function renderPage() {
  const page = document.body.dataset.page;
  if (!Object.hasOwn(BUSINESS.seo, page)) throw new Error(`Unknown page: ${page}`);
  renderLayout(page);
  if (page === "home") renderHome();
  else if (page === "about") renderAbout();
  else if (page === "portfolio") renderPortfolio();
  else if (page === "services") renderServices();
  else renderContact();
  document.querySelectorAll("main section h1, main section h2").forEach(heading => heading.classList.add("reveal-heading"));
  observeReveals();
}

document.addEventListener("error", event => {
  const target = event.target;
  if (target instanceof HTMLImageElement && target.dataset.ph !== undefined) imgFallback(target);
}, true);
renderPage();
