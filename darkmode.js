const toggleThemeButton = document.getElementById("toggleButton");
const currentTheme = localStorage.getItem("theme") || "light"; // Padrão para o tema claro

function toggleTheme() {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.classList.toggle("dark-mode", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
}

toggleThemeButton.addEventListener("click", toggleTheme);

document.body.classList.toggle("dark-mode", currentTheme === "dark");
