document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const icon = navLinks.classList.contains('open') ? '✕' : '☰';
            hamburger.textContent = icon;
        });
    }

    // Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Global Footer Injection
    const footer = document.createElement('footer');
    footer.className = 'main-footer';
    footer.innerHTML = '<div class="footer-content">© 2026 ASTRO.BIO | Apoio Criativo: Antigravity. Todos os direitos reservados.</div>';
    document.body.appendChild(footer);
});
