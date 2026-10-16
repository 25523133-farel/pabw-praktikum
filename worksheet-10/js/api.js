// js/api.js - Data Layer
const API_URL = "https://raw.githubusercontent.com/public-apis/sample-data/main/mlbb-heroes.json";

const fallbackHeroes = [
  { id: 1, nama: "Fanny", role: "Assassin", winRate: 65.0, gambar: "hero-favorit-1.jpg" },
  { id: 2, nama: "Ling", role: "Assassin", winRate: 58.0, gambar: "hero-favorit-2.jpg" },
  { id: 3, nama: "Chou", role: "Fighter", winRate: 60.0, gambar: "hero-favorit-3.jpg" }
];

// SHEET B.1: Export async function dengan try/catch
export async function fetchHeroes() {
  try {
    const response = await fetch(API_URL);
    
    // Cek jika HTTP Status bukan 2xx (misal 404/500)
    if (!response.ok) {
      throw new Error("status " + response.status);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal memuat API, menggunakan data fallback:", error.message);
    // Kembalikan fallback agar aplikasi tidak crash
    return fallbackHeroes;
  }
}