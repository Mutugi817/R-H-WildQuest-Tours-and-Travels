// 1. Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if(window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled')
    }
})

// 2. Hero Slider Logic
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000);

// 3. Mobile Navigation logic
const menuToggle = document.getElementById('menu-icon');
const navbar = document.getElementById('nav-list');

menuToggle.addEventListener('click', (event)=> {
    event.stopPropagation();
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
})

document.addEventListener('click', (event) => {
        if(!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
        menuToggle.classList.remove('active');
        navbar.classList.remove('active');
        }
    })