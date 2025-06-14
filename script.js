
const translations = {
  en: {
    guide_title: "Ultimate Minecraft Guide",
    step1_title: "Step 1: Starting Out",
    step1_text: "Use basic tools and explore a village to get started.",
    step2_title: "Step 2: Villager Trading",
    step2_text: "Trade emeralds and collect books and gear from villagers.",
    step3_title: "Step 3: Enter the Nether",
    step3_text: "Build a portal and collect resources in the Nether.",
    familycraft_title: "Familycraft",
    join_discord: "Join our Discord"
  },
  es: {
    guide_title: "Guía definitiva de Minecraft",
    step1_title: "Paso 1: Empezar",
    step1_text: "Usa herramientas básicas y explora una aldea para comenzar.",
    step2_title: "Paso 2: Intercambio con aldeanos",
    step2_text: "Intercambia esmeraldas y consigue libros y equipamiento.",
    step3_title: "Paso 3: Entra al Nether",
    step3_text: "Construye un portal y recoge recursos en el Nether.",
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
