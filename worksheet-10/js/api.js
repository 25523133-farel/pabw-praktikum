// js/api.js

export async function fetchHeroes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          nama: "Fanny",
          role: "Assassin",
          winRate: "65%",
          gambar: "./hero-favorit-1.jpg",
        },
        {
          id: 2,
          nama: "Ling",
          role: "Assassin",
          winRate: "58%",
          gambar: "./hero-favorit-2.jpg",
        },
        {
          id: 3,
          nama: "Chou",
          role: "Fighter",
          winRate: "52%",
          gambar: "./hero-favorit-3.jpg",
        },
      ]);
    }, 300);
  });
}
