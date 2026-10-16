// js/dom.js

const heroListContainer = 
  document.getElementById("hero-list") || 
  document.getElementById("daftar-hero") ||
  document.querySelector(".hero-container") ||
  document.querySelector(".hero-list") ||
  document.querySelector("main > div:first-child");

function buildCard(hero) {
  const card = document.createElement("div");
  card.className = "hero-card";
  card.style.cssText = "margin-bottom: 24px; max-width: 360px;";

  const heroName = hero.nama || hero.name || "";
  const heroRole = hero.role || "";
  
  let winRate = hero.winRate || hero.win_rate || "0%";
  if (typeof winRate === "string") {
    winRate = winRate.replace("%", "") + "%";
  } else {
    winRate = winRate + "%";
  }

  const heroImg = hero.gambar || hero.image || "";

  card.innerHTML = `
    <div style="width: 100%; border-radius: 8px; overflow: hidden; margin-bottom: 8px;">
      <img src="${heroImg}" alt="${heroName}" style="width: 100%; height: auto; display: block; border-radius: 8px; object-fit: cover;">
    </div>
    <h3 style="color: #ffcc00; margin: 8px 0 4px 0; font-size: 1.15rem; font-weight: bold;">${heroName}</h3>
    <p style="margin: 0 0 4px 0; color: #fff;">Role: ${heroRole}</p>
    <p style="margin: 0 0 16px 0; color: #fff;">Win Rate: ${winRate}</p>
  `;

  return card;
}

export function showLoading() {
  if (heroListContainer) {
    heroListContainer.innerHTML = `
      <p style="color: #ffcc00; font-size: 1.1rem; padding: 20px; text-align: center; font-weight: bold;">
        ⏳ Memuat data hero dari server...
      </p>
    `;
  }
}

export function showError(msg) {
  if (heroListContainer) {
    heroListContainer.innerHTML = `
      <p style="color: #ff4d4d; font-size: 1.1rem; padding: 20px; text-align: center; font-weight: bold;">
        ❌ Gagal memuat data: ${msg}
      </p>
    `;
  }
}

export function render(list) {
  if (heroListContainer) heroListContainer.textContent = "";

  if (!list || list.length === 0) {
    if (heroListContainer) {
      heroListContainer.innerHTML = `
        <p style="color: #ffcc00; font-size: 1.1rem; padding: 20px; text-align: center; font-weight: bold;">
          📭 Tidak ada data hero yang tersedia.
        </p>
      `;
    }
    return;
  }

  list.forEach((hero) => {
    if (heroListContainer) heroListContainer.append(buildCard(hero));
  });
}