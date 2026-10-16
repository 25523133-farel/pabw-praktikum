// js/dom.js
const heroListContainer =
  document.querySelector(".hero-cards") ||
  document.querySelector("#daftar-hero") ||
  document.querySelector(".sisi") ||
  document.body;

// Element status pesan UI
let statusMessage = document.querySelector("#status-message");
if (!statusMessage) {
  statusMessage = document.createElement("p");
  statusMessage.id = "status-message";
  statusMessage.style.textAlign = "center";
  statusMessage.style.padding = "15px";
  statusMessage.style.color = "#ffcc00";
  if (heroListContainer.parentNode) {
    heroListContainer.parentNode.insertBefore(statusMessage, heroListContainer);
  }
}

// 1. Loading State
export function showLoading() {
  heroListContainer.textContent = "";
  statusMessage.textContent = "⏳ Memuat data hero dari server...";
  statusMessage.hidden = false;
}

// 2. Failure State
export function showError(msg) {
  heroListContainer.textContent = "";
  statusMessage.textContent = `❌ Gagal memuat data: ${msg}`;
  statusMessage.hidden = false;
}

// 3. Success & Empty State
export function render(list) {
  heroListContainer.textContent = ""; // Clear container

  // 4. Empty State
  if (!list || list.length === 0) {
    statusMessage.textContent = "📭 Tidak ada data hero yang tersedia.";
    statusMessage.hidden = false;
    return;
  }

  statusMessage.hidden = true; // Sembunyikan status jika sukses

  list.forEach((hero) => {
    heroListContainer.append(buildCard(hero));
  });
}

function buildCard(hero) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = hero.gambar || "hero-favorit-1.jpg";
  img.alt = hero.nama;
  img.style.width = "100%";
  img.style.height = "160px";
  img.style.objectFit = "cover";
  img.style.objectPosition = "top center";
  img.style.borderRadius = "8px";
  img.style.marginBottom = "10px";

  img.onerror = () => {
    img.src = "hero-favorit-1.jpg";
  };

  const nama = document.createElement("h3");
  nama.textContent = hero.nama;

  const role = document.createElement("p");
  role.textContent = `Role: ${hero.role}`;

  const winRate = document.createElement("p");
  winRate.textContent = `Win Rate: ${hero.winRate}%`;

  card.append(img, nama, role, winRate);
  return card;
}

window.render = render;