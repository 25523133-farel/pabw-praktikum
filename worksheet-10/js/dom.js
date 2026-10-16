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

// Elemen penampung pesan kosong (Empty State)
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

  // 1. Tag Gambar (Proporsi & Fokus Pas)
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