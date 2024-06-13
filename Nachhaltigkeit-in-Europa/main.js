document.addEventListener('DOMContentLoaded', function() {
    var quizLink = document.getElementById('quiz-link');
    var popup = document.getElementById('popup');
    var kahootButton = document.getElementById('kahoot-button');
    var websiteQuizButton = document.getElementById('website-quiz-button');

    // Event Listener für Klick auf das Quiz-Link
    quizLink.addEventListener('click', function(event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Links
        popup.style.display = 'block'; // Zeigt das Popup an
    });

    // Event Listener für Klick auf "Zu Kahoot!" Button im Popup
    kahootButton.addEventListener('click', function() {
        window.location.href = 'https://kahoot.it/solo/?quizId=ffbc6fdc-52bb-453a-9fd5-6592893a2061';
    });

    // Event Listener für Klick auf "Zu den Quizzen auf der Website" Button im Popup
    websiteQuizButton.addEventListener('click', function() {
        window.location.href = 'https://quizizz.com/join/quiz/666966941771a69bf7201bad/start?studentShare=true'; 
    });

   // Funktionen für das Karussell
   let currentIndex = 1;
   const containerCount = document.querySelectorAll('.container').length;

   function updateCarousel() {
       const carouselInner = document.getElementById('carouselInner');
       const containers = document.querySelectorAll('.container');

       const offset = -currentIndex * 33.33 + 33.33;
       carouselInner.style.transform = `translateX(${offset}%)`;

       containers.forEach((container, index) => {
           container.classList.remove('center', 'left', 'right');
           if (index === currentIndex) {
               container.classList.add('center');
           } else if (index === currentIndex - 1 || (currentIndex === 0 && index === containerCount - 1)) {
               container.classList.add('left');
           } else if (index === currentIndex + 1 || (currentIndex === containerCount - 1 && index === 0)) {
               container.classList.add('right');
           }
       });
   }

   function moveLeft() {
       currentIndex = (currentIndex > 0) ? currentIndex - 1 : containerCount - 1;
       updateCarousel();
   }

   function moveRight() {
       currentIndex = (currentIndex < containerCount - 1) ? currentIndex + 1 : 0;
       updateCarousel();
   }

   // Event Listener für Pfeil-Buttons
   document.querySelector('.arrow.left').addEventListener('click', moveLeft);
   document.querySelector('.arrow.right').addEventListener('click', moveRight);

   updateCarousel(); // Initialisierung des Karussells
});
