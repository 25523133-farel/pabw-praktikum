// ==========================================
// DATA PROFIL & HERO MOBILE LEGENDS
// ==========================================

const profil = {
  nama: "Farel Putra Ragil Wiyono",
  peran: "Pemain MLBB & Web Developer",
  keahlian: ["Fanny", "Ling", "Chou", "Assassin", "Fighter"]
};

console.log(`${profil.nama} – ${profil.peran}`);
console.log(profil.keahlian.join(" · "));

// Gunakan gambar lokal yang ada di dalam folder worksheet-p9
const daftarHero = [
  {
    nama: "Fanny",
    role: "Assassin",
    winRate: 65.0,
    seringDimainkan: true,
    gambar: "hero-favorit-1.jpg"
  },
  {
    nama: "Ling",
    role: "Assassin",
    winRate: 58.0,
    seringDimainkan: true,
    gambar: "hero-favorit-2.jpg"
  },
  {
    nama: "Chou",
    role: "Fighter",
    winRate: 60.0,
    seringDimainkan: true,
    gambar: "hero-favorit-3.jpg"
  }
];

console.table(profil.keahlian);
console.table(daftarHero);

const heroSering = daftarHero.filter((hero) => hero.seringDimainkan);
console.table(heroSering);

const heroChou = daftarHero.find((hero) => hero.nama === "Chou");
console.log("Hero ditemukan:", heroChou);

const daftarNamaHero = daftarHero.map((hero) => hero.nama);
console.log("Daftar Nama Hero:", daftarNamaHero);

window.daftarHero = daftarHero;