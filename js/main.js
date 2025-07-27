
// Dark mode toggle
const toggleBtn = document.querySelector('.dark-mode-toggle');
const body = document.body;

function setTheme(theme) {
  if (theme === 'dark') {
    body.setAttribute('data-theme', 'dark');
  } else {
    body.removeAttribute('data-theme');
  }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) setTheme(savedTheme);

// Toggle on click
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? null : 'dark');
    localStorage.setItem('theme', isDark ? '' : 'dark');
  });
} 
