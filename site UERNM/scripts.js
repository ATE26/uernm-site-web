document.addEventListener('DOMContentLoaded', function() {
   // Fonction pour ajouter un événement
   function addEvent(eventName, eventDate, eventDescription, eventId) {
    var eventsSection = document.getElementById('eventList');
    var eventDiv = document.createElement('div');
    eventDiv.classList.add('col-md-6', 'mb-4');
    var eventContent = `
        <div class="card">
            <div class="card-body">
                <h4>${eventName}</h4>
                <p>Date: ${eventDate}</p>
                <p>${eventDescription}</p>
                <a href="registration.html?event-id=${eventId}" class="btn btn-primary">S'inscrire</a>
            </div>
        </div>
    `;
    eventDiv.innerHTML = eventContent;
    eventsSection.appendChild(eventDiv);
}
    // Ajouter les deux premiers événements à la page d'accueil
    addEvent('Formation en Patisserie', '10 Août 2024', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'eventList');
    addEvent('Formation de Fabrication de Savon', '15 Août 2024', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'eventList');

    // Gestion du bouton "Voir plus"
    var voirPlusButton = document.getElementById('voirPlusButton');
    voirPlusButton.addEventListener('click', function() {
        window.location.href = 'events.html';
    });

    // Gestion des liens de navigation actifs
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
