// Ajoute un écouteur d'événement pour le défilement de la fenêtre
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section'); // Sélectionne toutes les sections
    const images = document.querySelectorAll('img'); // Sélectionne toutes les images
    const triggerBottom = window.innerHeight / 5 * 4; // Définit le point de déclenchement pour l'animation

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top; // Récupère la position de la section

        if (sectionTop < triggerBottom) {
            section.classList.add('show'); // Ajoute la classe 'show' si la section est visible
        } else {
            section.classList.remove('show'); // Retire la classe 'show' sinon
        }
    });

    images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top; // Récupère la position de l'image

        if (imageTop < triggerBottom) {
            image.classList.add('show'); // Ajoute la classe 'show' si l'image est visible
        } else {
            image.classList.remove('show'); // Retire la classe 'show' sinon
        }
    });
});

// Ajoute un écouteur d'événement une fois le DOM complètement chargé
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section'); // Sélectionne toutes les sections
    sections.forEach(section => section.classList.add('show')); // Ajoute la classe 'show' à toutes les sections

    const navItems = document.querySelectorAll('nav ul li'); // Sélectionne tous les éléments de la navigation
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            item.style.animation = 'pulse 0.5s'; // Ajoute une animation de pulsation au survol
        });

        item.addEventListener('animationend', function () {
            item.style.animation = ''; // Retire l'animation après sa fin
        });
    });

    const images = document.querySelectorAll('img'); // Sélectionne toutes les images
    images.forEach(image => image.classList.add('show')); // Ajoute la classe 'show' à toutes les images
});
// Script JavaScript pour l'interactivité du bouton
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-popup').style.display = 'flex';
        document.getElementById('overlay').style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    } else {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('cookie-popup').style.display = 'none';
    }
}); 

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', true);
    document.getElementById('cookie-popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

function rejectCookies() {
    window.location.href = 'https://dinosaur.game/fr/'; 
}