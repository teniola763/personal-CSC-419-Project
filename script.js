// ================================
// 1) CATEGORY DATA (Home page cards)
// ================================
const categoryData = [
  { id: "braids", name: "Braids", thumbImg: "images/braids/braid1.jpg" },
  { id: "pixies", name: "Pixies", thumbImg: "images/pixies/pixie1.jpg" },
  { id: "wigs", name: "Wigs", thumbImg: "images/wigs/wig1.jpg" },
  { id: "dyed hair", name: "Dyed Hair", thumbImg: "images/dyed/dyed1.jpg" },
  { id: "locs", name: "Locs", thumbImg: "images/locs/locs1.jpg" },
  { id: "sew ins", name: "Sew Ins", thumbImg: "images/sewins/sewins1.jpg" },
];

// =======================================
// 2) ALL HAIRSTYLE IMAGES (Try-on thumbs)
// =======================================
const hairstyleStyles = [
  // BRAIDS (8)
  { cat: "braids", name: "Eviedoesla Braids", img: "images/braids/braid1.jpg" },
  { cat: "braids", name: "Cornrow Ponytail", img: "images/braids/braid2.jpg" },
  { cat: "braids", name: "Two Shuck Side Part Ponytail", img: "images/braids/braid3.jpg" },
  { cat: "braids", name: "Two Ponytail Braids", img: "images/braids/braid4.jpg" },
  { cat: "braids", name: "High Ponytail Braids", img: "images/braids/braid5.jpg" },
  { cat: "braids", name: "Sade Adu Cornrows", img: "images/braids/braid6.jpg" },
  { cat: "braids", name: "Fulani Braids with Beads", img: "images/braids/braid7.jpg" },
  { cat: "braids", name: "Short Bob Braids", img: "images/braids/braid8.jpg" },

  // PIXIES (13)  ✅ you already have pixie1, the rest start from pixie2
  { cat: "pixies", name: "Soft Textured Pixie", img: "images/pixies/pixie1.jpg" },
  { cat: "pixies", name: "Layered Pixie Cut", img: "images/pixies/pixie2.jpg" },
  { cat: "pixies", name: "Classic Short Pixie", img: "images/pixies/pixie3.jpg" },
  { cat: "pixies", name: "Slick Micro Pixie", img: "images/pixies/pixie4.jpg" },
  { cat: "pixies", name: "Classic Pixie Style", img: "images/pixies/pixie5.jpg" },
  { cat: "pixies", name: "Edgy Tapered Pixie", img: "images/pixies/pixie6.jpg" },
  { cat: "pixies", name: "Blonde Pixie Crop", img: "images/pixies/pixie7.jpg" },
  { cat: "pixies", name: "Chic Close-Cut Pixie", img: "images/pixies/pixie8.jpg" },
  { cat: "pixies", name: "Soft Feminine Pixie", img: "images/pixies/pixie9.jpg" },
  { cat: "pixies", name: "Blonde Slick Pixie Cut", img: "images/pixies/pixie10.jpg" },
  { cat: "pixies", name: "Natural Curly Pixie", img: "images/pixies/pixie11.jpg" },
  { cat: "pixies", name: "Tight Coil Pixie Cut", img: "images/pixies/pixie12.jpg" },
  { cat: "pixies", name: "Short Curly Pixie", img: "images/pixies/pixie13.jpg" },

  // WIGS (11)
  { cat: "wigs", name: "Statement Wig", img: "images/wigs/wig1.jpg" },
  { cat: "wigs", name: "90's Wavy Wig", img: "images/wigs/wig2.jpg" },
  { cat: "wigs", name: "Light Wave Wig", img: "images/wigs/wig3.jpg" },
  { cat: "wigs", name: "Middle Part Wig", img: "images/wigs/wig4.jpg" },
  { cat: "wigs", name: "Side Part Wig", img: "images/wigs/wig5.jpg" },
  { cat: "wigs", name: "Soft Glam Wig", img: "images/wigs/wig6.jpg" },
  { cat: "wigs", name: "Hollywood Waves Wig", img: "images/wigs/wig7.jpg" },
  { cat: "wigs", name: "Extra Volume Wig", img: "images/wigs/wig8.jpg" },
  { cat: "wigs", name: "Wavy Black Wig", img: "images/wigs/wig9.jpg" },
  { cat: "wigs", name: "Chestnut Brown Wig", img: "images/wigs/wig10.jpg" },
  { cat: "wigs", name: "Ginger Wig", img: "images/wigs/wig11.jpg" },

  // DYED HAIR (11)
  { cat: "dyed hair", name: "Loose Ginger Curls", img: "images/dyed/dyed1.jpg" },
  { cat: "dyed hair", name: "Cherry Red Curls", img: "images/dyed/dyed2.jpg" },
  { cat: "dyed hair", name: "Blue Bob", img: "images/dyed/dyed3.jpg" },
  { cat: "dyed hair", name: "Pink Straight", img: "images/dyed/dyed4.jpg" },
  { cat: "dyed hair", name: "Magenta Shine", img: "images/dyed/dyed5.jpg" },
  { cat: "dyed hair", name: "Blonde Afro Puff", img: "images/dyed/dyed6.jpg" },
  { cat: "dyed hair", name: "Cherry Red Bomb", img: "images/dyed/dyed7.jpg" },
  { cat: "dyed hair", name: "Sun-kissed Brown", img: "images/dyed/dyed8.jpg" },
  { cat: "dyed hair", name: "Hot Pink Waves", img: "images/dyed/dyed9.jpg" },
  { cat: "dyed hair", name: "Chocolate Glam", img: "images/dyed/dyed10.jpg" },
  { cat: "dyed hair", name: "Light Brown Afro", img: "images/dyed/dyed11.jpg" },

  // LOCS (11)
  { cat: "locs", name: "Classic Medium Locs", img: "images/locs/locs1.jpg" },
  { cat: "locs", name: "Butterfly Locs Vibe", img: "images/locs/locs2.jpg" },
  { cat: "locs", name: "Shoulder-Length Locs", img: "images/locs/locs3.jpg" },
  { cat: "locs", name: "Soft Glam Locs", img: "images/locs/locs4.jpg" },
  { cat: "locs", name: "Sunlight Locs Glow", img: "images/locs/locs5.jpg" },
  { cat: "locs", name: "Dirty Blonde Natural Locs", img: "images/locs/locs6.jpg" },
  { cat: "locs", name: "Natural Black Locs", img: "images/locs/locs7.jpg" },
  { cat: "locs", name: "Curly Locs Style", img: "images/locs/locs8.jpg" },
  { cat: "locs", name: "Long Wavy Locs", img: "images/locs/locs9.jpg" },
  { cat: "locs", name: "Middle Part Locs", img: "images/locs/locs10.jpg" },
  { cat: "locs", name: "Long Back Classic Locs", img: "images/locs/locs11.jpg" },

  // SEW INS (8)
  { cat: "sew ins", name: "Classic Layered Sew-In", img: "images/sewins/sewins1.jpg" },
  { cat: "sew ins", name: "Long Bob Sew-In", img: "images/sewins/sewins2.jpg" },
  { cat: "sew ins", name: "Body Wave Sew-In", img: "images/sewins/sewins3.jpg" },
  { cat: "sew ins", name: "Curly Sew-In", img: "images/sewins/sewins4.jpg" },
  { cat: "sew ins", name: "Blowout Bubble Sew-In", img: "images/sewins/sewins5.jpg" },
  { cat: "sew ins", name: "Loose Wave Sew-In", img: "images/sewins/sewins6.jpg" },
  { cat: "sew ins", name: "Vintage Sew-In", img: "images/sewins/sewins7.jpg" },
  { cat: "sew ins", name: "Golden Blonde Sew-In", img: "images/sewins/sewins8.jpg" },
];

// ======================
// THEME TOGGLE (global)
// ======================
const toggle = document.getElementById("theme-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    toggle.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", theme);
  });

  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.dataset.theme = saved;
  toggle.textContent = saved === "dark" ? "☀️" : "🌙";
}

// =====================================================
// HOME / INDEX: Category cards (click to detail pages)
// =====================================================
(function initCategoryCards() {
  const gallery = document.querySelector(".gallery");
  // IMPORTANT: On tryon.html we also have .gallery, so we avoid running this
  // unless we detect we're on the index page by checking for a filter row:
  const hasFilterRow = document.querySelector(".filter-btn");

  if (!gallery || !hasFilterRow) return;

  const categoryPages = {
    braids: "braids-detail.html",
    pixies: "pixies-detail.html",
    wigs: "wigs-detail.html",
    "dyed hair": "dyed-detail.html",
    locs: "locs-detail.html",
    "sew ins": "sewins-detail.html",
  };

  function renderCategories(selected = "all") {
    gallery.innerHTML = "";

    const filtered =
      selected === "all" ? categoryData : categoryData.filter((c) => c.id === selected);

    filtered.forEach((cat) => {
      const box = document.createElement("div");
      box.className = "style-thumb";

      const link = document.createElement("a");
      link.href = categoryPages[cat.id] || "#";
      link.style.textDecoration = "none";
      link.style.color = "inherit";

      link.innerHTML = `
        <img src="${cat.thumbImg}" alt="${cat.name}">
        <h3>${cat.name}</h3>
      `;

      box.appendChild(link);
      gallery.appendChild(box);
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCategories(btn.dataset.category);
    });
  });

  renderCategories("all");
})();

// ======================================
// TRY-ON PAGE: Upload + render thumbnails
// ======================================
(function initTryOn() {
  const photoUpload = document.getElementById("photo-upload");
  const userPhoto = document.getElementById("user-photo");
  const overlay = document.getElementById("hairstyle-overlay");
  const gallery = document.querySelector(".gallery");
  const tryonFilters = document.querySelectorAll("[data-tryon-filter]");

  // Only run on tryon page
  if (!gallery || !overlay) return;

  function renderTryOnThumbs(selected = "braids") {
    gallery.innerHTML = "";

    const list =
      selected === "all"
        ? hairstyleStyles
        : hairstyleStyles.filter((s) => s.cat === selected);

    list.forEach((style) => {
      const img = document.createElement("img");
      img.className = "style-thumb";
      img.src = style.img;
      img.alt = style.name;
      img.setAttribute("data-src", style.img);
      img.setAttribute("data-style", style.name);
      gallery.appendChild(img);
    });

    // attach click handlers AFTER render
    document.querySelectorAll(".style-thumb").forEach((thumb) => {
      thumb.addEventListener("click", function () {
        const styleSrc = this.getAttribute("data-src");
        if (styleSrc) {
          overlay.src = styleSrc;
          overlay.style.display = "block";
          document.querySelector(".preview-container")?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Upload handler
  if (photoUpload && userPhoto) {
    photoUpload.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (file) {
        userPhoto.src = URL.createObjectURL(file);
        overlay.src = "";
      }
    });
  }

  // Filter buttons on try-on page
  tryonFilters.forEach((btn) => {
    btn.addEventListener("click", () => {
      tryonFilters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderTryOnThumbs(btn.dataset.tryonFilter);
    });
  });

  // default view
  renderTryOnThumbs("braids");
})();