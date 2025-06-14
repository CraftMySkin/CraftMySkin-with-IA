const translations = {
  en: {
    home: "Home",
    skins: "Skin Generator",
    vip: "VIP Server",
    community: "Community",
    welcome: "Welcome to CraftMySkin",
    intro: "Upload your photo, create a Minecraft skin with AI, and join our exclusive community!",
    tryNow: "Try it now",
    vipAccess: "🎮 VIP Server Access",
    vipText: "Play with others worldwide! Access is limited and rewarded through activity and support. Server open daily: 17:00–22:00 (Spain Time).",
    learnMore: "Learn more",
    uploadSkin: "Upload your photo and we'll generate a Minecraft-style skin using AI. For now, this is a simulation!",
    previewText: "Generated skin will appear here:",
    vipLockedText: "This section will soon allow access to the exclusive CraftMySkin multiplayer server. Stay tuned and join our community to be the first to enter!",
    comingSoon: "Coming Soon"
  },
  es: {
    home: "Inicio",
    skins: "Generador de Skins",
    vip: "Servidor VIP",
    community: "Comunidad",
    welcome: "Bienvenido a CraftMySkin",
    intro: "Sube tu foto, crea una skin de Minecraft con IA y únete a nuestra comunidad exclusiva.",
    tryNow: "Pruébalo ahora",
    vipAccess: "🎮 Acceso al Servidor VIP",
    vipText: "¡Juega con gente de todo el mundo! El acceso es limitado y se recompensa mediante actividad y apoyo. Servidor abierto cada día de 17:00 a 22:00 (hora de España).",
    learnMore: "Saber más",
    uploadSkin: "Sube tu foto y generaremos una skin de estilo Minecraft usando IA. ¡Por ahora es una simulación!",
    previewText: "La skin generada aparecerá aquí:",
    vipLockedText: "Esta sección pronto dará acceso al servidor multijugador exclusivo de CraftMySkin. ¡Sigue atento y únete a nuestra comunidad para ser de los primeros!",
    comingSoon: "Próximamente"
  }
};

const languageSelector = document.getElementById("languageSelector");

function updateLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("craftLang", lang);
}

languageSelector.addEventListener("change", (e) => {
  updateLanguage(e.target.value);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("craftLang") || "en";
  languageSelector.value = savedLang;
  updateLanguage(savedLang);
});
