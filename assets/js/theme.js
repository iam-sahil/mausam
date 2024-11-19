const toggleThemeBtn = document.querySelector('[data-theme-btn]');

const themes = ['cat','gruv','nord','ayu','tokyo','mono'];

const storedTheme = localStorage.getItem('mausam-theme') || (localStorage.setItem('mausam-theme', themes[0]), themes[0]);

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('mausam-theme', theme);
}

function setThemeCycle() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  setTheme(themes[(themes.indexOf(currentTheme) + 1) % themes.length]);
}

document.addEventListener('DOMContentLoaded', () => setTheme(storedTheme));
toggleThemeBtn.addEventListener('click', setThemeCycle);
document.addEventListener('keydown', event => {
    if (event.code === "Slash") {
      setThemeCycle();
      event.preventDefault();
    }
});
