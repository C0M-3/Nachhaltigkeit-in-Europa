let currentIndex = 1; // Startet mit dem ersten Bild

// Aktualisiert das Karussell
function updateCarousel() {
    const carouselInner = document.getElementById('carouselInner');
    const containers = document.querySelectorAll('.container');

    // Berechnet und setzt die Transform-Eigenschaft
    const offset = -currentIndex * 33.33 + 33.33; // Mittlere Position in der Ansicht
    carouselInner.style.transform = `translateX(${offset}%)`;

    // Setzt die Klassen für die Container
    containers.forEach((container, index) => {
        container.classList.remove('center', 'left', 'right');
        if (index === currentIndex) {
            container.classList.add('center');
        } else if (index === currentIndex - 1) {
            container.classList.add('left');
        } else if (index === currentIndex + 1) {
            container.classList.add('right');
        }
    });
}

// Bewegt das Karussell nach links
function moveLeft() {
    const containers = document.querySelectorAll('.container').length;
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : containers - 1;
    updateCarousel();
}

// Bewegt das Karussell nach rechts
function moveRight() {
    const containers = document.querySelectorAll('.container').length;
    currentIndex = (currentIndex < containers - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}

// Initiale Aktualisierung des Karussells
updateCarousel();

