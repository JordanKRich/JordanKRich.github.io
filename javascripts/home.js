document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.scroll-section').forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.style.opacity = 1;
            }
        });
    });
});
