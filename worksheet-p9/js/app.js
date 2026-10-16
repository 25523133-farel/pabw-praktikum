// === LEMBAR B: Data Profil sebagai Variabel ===
const profil = {
  nama: "Farel Putra Ragil Wiyono",
  peran: "Pemain MLBB & Web Developer",
  keahlian: ["Fanny", "Ling", "Chou", "Assassin", "Fighter"],
  jumlahHero: 3,
};

// === LEMBAR C: Dua Fungsi Murni ===
// 1. Pembuat kalimat perkenalan
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Pemformat daftar keahlian / hero favorit
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// === LEMBAR D: Array of Object & Array Methods ===
const daftarHero = [
  { nama: "Fanny", role: "Assassin", winRate: 65.0, seringDimainkan: true },
  { nama: "Ling", role: "Assassin", winRate: 58.0, seringDimainkan: true },
  { nama: "Chou", role: "Fighter", winRate: 60.0, seringDimainkan: true },
];

// Menampilkan data sebagai tabel di Console
console.table(profil.keahlian);
console.table(daftarHero);

// 1. Filter: Hero yang sering dimainkan
const heroSering = daftarHero.filter((hero) => hero.seringDimainkan);
console.table(heroSering);

// 2. Find: Cari hero spesifik berdasarkan nama
const heroChou = daftarHero.find((hero) => hero.nama === "Chou");
console.log("Hero ditemukan:", heroChou);

// 3. Map: Ambil daftar nama hero saja
const daftarNamaHero = daftarHero.map((hero) => hero.nama);
console.log("Daftar Nama Hero:", daftarNamaHero);