// js/app.js
import { fetchHeroes } from "./api.js";
import { showLoading, showError, render } from "./dom.js";

async function initApp() {
  showLoading(); // Tampilkan Loading State
  try {
    const data = await fetchHeroes();
    window.daftarHero = data;
    render(data); // Render Success / Empty State
  } catch (error) {
    showError(error.message); // Tampilkan Failure State
  }
}

// Jalankan aplikasi
initApp();