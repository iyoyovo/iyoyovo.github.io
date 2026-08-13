(() => {
  const pages = Array.from(document.querySelectorAll("[data-language-page]"));

  function setLanguage(language) {
    pages.forEach((page) => {
      page.hidden = page.dataset.languagePage !== language;
    });
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.languageToggle));
  });
})();
