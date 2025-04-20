document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");
    const lightTheme = "css/light.css";
    const darkTheme = "css/dark.css";
    const themeLink = document.querySelector('link[href*="css/"]');

    function getPreferredTheme() {
        const stored = localStorage.getItem("theme");
        if (stored) return stored;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function setTheme(theme) {
        localStorage.setItem("theme", theme);
        themeLink.setAttribute("href", theme === "dark" ? darkTheme : lightTheme);
        icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }

    setTheme(getPreferredTheme());

    toggleBtn.addEventListener("click", () => {
        const newTheme = getPreferredTheme() === "dark" ? "light" : "dark";
        setTheme(newTheme);
    });
});
