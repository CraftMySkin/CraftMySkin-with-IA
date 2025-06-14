
const translations = {
  en: {
    title: "Craft your Minecraft skin",
    guide_title: "Step-by-step guide",
    step_upload: "1. Upload your image",
    step_upload_desc: "Choose a photo or draw your idea...",
    step_edit: "2. Edit your skin",
    step_edit_desc: "Customize pixel by pixel..."
  },
  es: {
    title: "Crea tu skin de Minecraft",
    guide_title: "Guía paso a paso",
    step_upload: "1. Sube tu imagen",
    step_upload_desc: "Elige una foto o dibuja tu idea...",
    step_edit: "2. Edita tu skin",
    step_edit_desc: "Personalízala píxel a píxel..."
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
