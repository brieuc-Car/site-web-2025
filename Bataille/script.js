// Ajoute un écouteur d'événement pour le défilement de la fenêtre
window.addEventListener('scroll', function() {
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
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section'); // Sélectionne toutes les sections
    sections.forEach(section => section.classList.add('show')); // Ajoute la classe 'show' à toutes les sections

    const navItems = document.querySelectorAll('nav ul li'); // Sélectionne tous les éléments de la navigation
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            item.style.animation = 'pulse 0.5s'; // Ajoute une animation de pulsation au survol
        });

        item.addEventListener('animationend', function() {
            item.style.animation = ''; // Retire l'animation après sa fin
        });
    });

    const images = document.querySelectorAll('img'); // Sélectionne toutes les images
    images.forEach(image => image.classList.add('show')); // Ajoute la classe 'show' à toutes les images
});
