// ==========================================
// SELEKSI ELEMEN DOM
// ==========================================
const heroListContainer =
  document.querySelector(".hero-cards") ||
  document.querySelector("#daftar-hero") ||
  document.querySelector(".sisi") ||
  document.body;

const filterRow =
  document.querySelector(".filter-buttons") ||
  document.querySelector("header") ||
  document.body;

// Elemen penampung pesan status (Empty / Loading / Error State)
let emptyMessage = document.querySelector("#empty-message");
if (!emptyMessage) {
  emptyMessage = document.createElement("p");
  emptyMessage.id = "empty-message";
  emptyMessage.textContent = "Tidak ada hero yang cocok dengan kategori ini.";
  emptyMessage.style.textAlign = "center";
  emptyMessage.style.color = "#ccc";
  emptyMessage.style.padding = "20px";
  emptyMessage.hidden = true;
  if (heroListContainer.parentNode) {
    heroListContainer.parentNode.insertBefore(emptyMessage, heroListContainer.nextSibling);
  }
}

const heroForm = document.querySelector("#tambah-hero form") || document.querySelector("form");

// ==========================================
// BUILD CARD (Membuat Kartu Hero + Gambar)
// ==========================================
function buildCard(hero) {
  const card = document.createElement("div");
  card.className = "card";

  // 1. Tag Gambar
  const img = document.createElement("img");
  img.src = hero.gambar || "hero-favorit-1.jpg";
  img.alt = hero.nama;
  img.style.width = "100%";
  img.style.height = "200px";
  img.style.objectFit = "cover";
  img.style.objectPosition = "top center";
  img.style.borderRadius = "8px";
  img.style.marginBottom = "10px";

  // Fallback jika file gambar lokal tidak ditemukan
  img.onerror = () => {
    img.src = "hero-favorit-1.jpg";
  };

  // 2. Tag Nama Hero
  const nama = document.createElement("h3");
  nama.textContent = hero.nama;

  // 3. Tag Role
  const role = document.createElement("p");
  role.textContent = `Role: ${hero.role}`;

  // 4. Tag Win Rate
  const winRate = document.createElement("p");
  winRate.textContent = `Win Rate: ${hero.winRate}%`;

  // Gabungkan ke kartu
  card.append(img, nama, role, winRate);
  return card;
}

// ==========================================
// RENDER PATTERN (Pembersihan & Render Kartu)
// ==========================================
export function render(list) {
  heroListContainer.textContent = "";

  if (!list || list.length === 0) {
    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;

  list.forEach((hero) => {
    heroListContainer.append(buildCard(hero));
  });
}

window.render = render;

// ==========================================
// EVENT DELEGATION (Tombol Filter)
// ==========================================
if (filterRow) {
  filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const category = button.dataset.category || button.textContent.trim().toLowerCase();

    filterRow.querySelectorAll("button").forEach((btn) => {
      btn.classList.toggle("active", btn === button);
    });

    const dataHero = window.daftarHero || [];

    const selected = dataHero.filter((hero) => {
      if (category === "all" || category === "daftar hero" || category === "semua") return true;
      return hero.role.toLowerCase() === category;
    });

    render(selected);
  });
}

// ==========================================
// FORM VALIDATION & SUBMIT
// ==========================================
if (heroForm) {
  heroForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputNama = heroForm.querySelector("input[type='text']") || heroForm.querySelectorAll("input")[0];
    const inputRole = heroForm.querySelectorAll("input")[1];
    const inputWinRate = heroForm.querySelector("input[type='number']") || heroForm.querySelectorAll("input")[2];

    if (!inputNama || inputNama.value.trim() === "") {
      alert("Nama Hero tidak boleh kosong!");
      if (inputNama) inputNama.focus();
      return;
    }

    const heroBaru = {
      nama: inputNama.value.trim(),
      role: inputRole ? inputRole.value.trim() : "Unknown",
      winRate: inputWinRate ? parseFloat(inputWinRate.value) || 0 : 0,
      gambar: "hero-favorit-1.jpg"
    };

    if (window.daftarHero) {
      window.daftarHero.push(heroBaru);
      render(window.daftarHero);
    }

    heroForm.reset();
  });
}