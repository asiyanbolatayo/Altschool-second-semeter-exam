document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        // Ensure the correct icon is shown on load
        updateToggleButtonIcon(currentTheme);
    } else {
        // Default to light mode if no preference is found
        body.classList.add('light-mode');
        updateToggleButtonIcon('light-mode');
    }

    // Function to update the sun/moon icon visibility
    function updateToggleButtonIcon(theme) {
        const sunIcon = themeToggleBtn.querySelector('.sun');
        const moonIcon = themeToggleBtn.querySelector('.moon');
        if (theme === 'dark-mode') {
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'block';
        } else {
            if (sunIcon) sunIcon.style.display = 'block';
            if (moonIcon) moonIcon.style.display = 'none';
        }
    }


    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            updateToggleButtonIcon('light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateToggleButtonIcon('dark-mode');
        }
    });
});