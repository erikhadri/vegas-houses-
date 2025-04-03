// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Form submission (placeholder)
document.getElementById('hero-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! We’ll contact you soon with your creative financing offer.');
});

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('bg-opacity-90');
    } else {
        header.classList.remove('bg-opacity-90');
    }
});