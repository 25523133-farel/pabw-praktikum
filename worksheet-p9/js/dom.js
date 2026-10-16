// ==========================================
// LEMBAR A — Seleksi Elemen DOM
// ==========================================
const heroListContainer = document.querySelector(".hero-cards") || document.querySelector("#daftar-hero") || document.body;
const filterRow = document.querySelector(".filter-buttons") || document.querySelector("header") || document.body;

// Elemen tambahan untuk pesan kosong & form
let emptyMessage = document.querySelector("#empty-message");
if (!emptyMessage) {
  emptyMessage = document.createElement("p");
  emptyMessage.id = "empty-message";
  emptyMessage.textContent = "Tidak ada hero yang cocok dengan kategori ini.";
  emptyMessage.style.textAlign = "center";
  emptyMessage.style.color = "#ccc";
  emptyMessage.hidden = true;
  heroListContainer.parentNode.insertBefore(emptyMessage, heroListContainer.nextSibling);
}

const heroForm = document.querySelector("form");

// ==========================================
// LEMBAR B — Build Card & Clear Container
// ==========================================
function buildCard(hero) {
  const card = document.createElement("div");
  card.className = "card";

  const nama = document.createElement("h3");
  nama.textContent = hero.nama;

  const role = document.createElement("p");
  role.textContent = `Role: ${hero.role}`;

  const winRate = document.createElement("p");
  winRate.textContent = `Win Rate: ${hero.winRate}%`;

  card.append(nama, role, winRate);
  return card;
}

// ==========================================
// LEMBAR D — Render Pattern
// ==========================================
function render(list) {
  // 1. Clear container terlebih dahulu
  heroListContainer.textContent = "";

  // 2. Cek kondisi data kosong
  if (!list || list.length === 0) {
    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;

  // 3. Render kartu dari data
  list.forEach((hero) => {
    heroListContainer.append(buildCard(hero));
  });
}

// ==========================================
// LEMBAR C — Event Delegation pada Tombol Filter
// ==========================================
if (filterRow) {
  filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const category = button.dataset.category || button.textContent.trim().toLowerCase();

    // Tandai tombol aktif
    filterRow.querySelectorAll("button").forEach((btn) => {
      btn.classList.toggle("active", btn === button);
    });

    // Ambil data hero dari window atau buat fallback array
    const dataHero = window.daftarHero || [
      { nama: "Fanny", role: "Assassin", winRate: 65.0 },
      { nama: "Ling", role: "Assassin", winRate: 58.0 },
      { nama: "Chou", role: "Fighter", winRate: 60.0 }
    ];

    const selected = dataHero.filter((hero) => {
      if (category === "all" || category === "daftar hero" || category === "semua") return true;
      return hero.role.toLowerCase() === category;
    });

    render(selected);
  });
}

// ==========================================
// LEMBAR D.2 — Form Validation & Submit
// ==========================================
if (heroForm) {
  heroForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah reload halaman

    const inputNama = heroForm.querySelector("input[type='text']") || heroForm.querySelectorAll("input")[0];
    const inputRole = heroForm.querySelectorAll("input")[1];
    const inputWinRate = heroForm.querySelector("input[type='number']") || heroForm.querySelectorAll("input")[2];

    if (inputNama && inputNama.value.trim() === "") {
      alert("Nama Hero tidak boleh kosong!");
      inputNama.focus();
      return;
    }

    console.log("Form berhasil disubmit tanpa reload halaman!");
  });
}

// Jalankan render awal saat halaman pertama dimuat
const initialData = window.daftarHero || [
  { nama: "Fanny", role: "Assassin", winRate: 65.0 },
  { nama: "Ling", role: "Assassin", winRate: 58.0 },
  { nama: "Chou", role: "Fighter", winRate: 60.0 }
];
render(initialData);