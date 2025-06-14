
const translations = {
  en: {
    home: "Home",
    skins: "Skin Generator",
    vip: "VIP Server",
    familycraft: "FamilyCraft",
    proguide: "Pro Guide",
    dailyReward: "Claim Daily Reward (+5 emeralds)",
    yourEmeralds: "Your emeralds",
    openChest: "🎁 Open a Chest",
    shop: "🛒 Shop",
    buyDiscord: "Join Discord (10 emeralds)",
    buyVIP: "VIP Server Access (100 emeralds)"
  },
  es: {
    home: "Inicio",
    skins: "Generador de Skins",
    vip: "Servidor VIP",
    familycraft: "FamilyCraft",
    proguide: "Guía PRO",
    dailyReward: "Reclamar recompensa diaria (+5 esmeraldas)",
    yourEmeralds: "Tus esmeraldas",
    openChest: "🎁 Abrir un cofre",
    shop: "🛒 Tienda",
    buyDiscord: "Unirse a Discord (10 esmeraldas)",
    buyVIP: "Acceso VIP (100 esmeraldas)"
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  const selector = document.getElementById("language-selector");
  if (selector) {
    selector.value = lang;
    selector.addEventListener("change", e => {
      localStorage.setItem("lang", e.target.value);
      applyTranslations(e.target.value);
    });
  }
  applyTranslations(lang);
});

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
