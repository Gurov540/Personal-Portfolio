// Функция для установки темы
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

// Получение сохраненной темы из localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  loadTheme();

  const themeToggleButton = document.getElementById("theme-toggle");

  themeToggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  });
});
