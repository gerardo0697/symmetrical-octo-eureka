function toggleContent(card) {
    var fullText = card.querySelector('.full-text');
    var summaryText = card.querySelector('.card-text-summary');
    var isExpanded = card.classList.contains('card-expanded');
    var button = card.querySelector('.show-more');
    var socialIcons = document.querySelector('.social-icons'); // Seleccionar los íconos de redes sociales

    // Colapsar todas las tarjetas abiertas antes de expandir la nueva
    var allCards = document.querySelectorAll('.card');
    allCards.forEach(function(otherCard) {
        if (otherCard !== card && otherCard.classList.contains('card-expanded')) {
            var otherFullText = otherCard.querySelector('.full-text');
            var otherSummaryText = otherCard.querySelector('.card-text-summary');
            otherFullText.style.display = 'none';
            otherSummaryText.style.display = '-webkit-box';
            otherCard.classList.remove('card-expanded');
            var otherButton = otherCard.querySelector('.show-more');
            otherButton.textContent = 'Ver más'; // Cambiar el texto del botón al colapsar
        }
    });

    // Expandir o colapsar la tarjeta actual
    if (isExpanded) {
        // Si está expandida, colapsarla
        fullText.style.display = 'none';
        summaryText.style.display = '-webkit-box';
        card.classList.remove('card-expanded');
        button.textContent = 'Ver más'; // Cambiar el texto del botón al colapsar

        // Mostrar los íconos sociales nuevamente al colapsar en pantallas más grandes
        if (window.innerWidth > 576) {
            socialIcons.style.display = 'flex';
        }
    } else {
        // Expandir la tarjeta
        fullText.style.display = 'block';
        summaryText.style.display = 'none';
        card.classList.add('card-expanded');
        button.textContent = 'Ver menos'; // Cambiar el texto del botón al expandir

        // Ocultar los íconos sociales al expandir en pantallas más grandes
        if (window.innerWidth > 576) {
            socialIcons.style.display = 'none';
        }

        // Desplazar la tarjeta a la vista del usuario
        card.scrollIntoView({
            behavior: 'smooth', // Desplazamiento suave
            block: 'center'     // Centrar la tarjeta en la vista
        });
    }
}
