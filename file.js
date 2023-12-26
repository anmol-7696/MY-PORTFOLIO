document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const darkModeToggle = document.createElement('div');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = 'Toggle Dark Mode';

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    document.body.appendChild(darkModeToggle);
});