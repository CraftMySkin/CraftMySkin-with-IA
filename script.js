
const translations = {
  en: {
    title: "CraftMySkin",
    subtitle: "Create your Minecraft skin",
    guide_title: "Ultimate Technical Minecraft Guide",
    vip_title: "VIP Server",
    coming_soon: "Coming Soon",
    skins_title: "Skin Gallery",
    familycraft_title: "Familycraft",
    join_discord: "Join our Discord"
  },
  es: {
    title: "CraftMySkin",
    subtitle: "Crea tu skin de Minecraft",
    guide_title: "Guía Técnica Definitiva de Minecraft",
    vip_title: "Servidor VIP",
    coming_soon: "Próximamente",
    skins_title: "Galería de Skins",
    familycraft_title: "Familycraft",
    join_discord: "Únete a nuestro Discord"
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  const selector = document.getElementById("language-selector");
  if (selector) {
    selector.value = lang;
    selector.addEventListener("change", e => {
      applyTranslations(e.target.value);
      localStorage.setItem("lang", e.target.value);
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
