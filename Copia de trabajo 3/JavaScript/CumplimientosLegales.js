
// Funcionalidad para abrir PDFs
const openPdfButtons = document.querySelectorAll('.open-pdf');
const pdfModal = document.querySelector('.pdf-modal');
const pdfOverlay = document.querySelector('.pdf-overlay');
const pdfFrame = document.querySelector('.pdf-frame');
const closePdfButton = document.querySelector('.close-pdf');
const downloadPdfLink = document.querySelector('.download-pdf');

// Agrega un event listener a cada botón de abrir PDF
openPdfButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar comportamiento por defecto

        // Obtiene la URL del PDF desde el atributo data-pdf
        const pdfUrl = this.closest('.pdf-card').getAttribute('data-pdf');

        // Comprobar si el ancho de la pantalla es menor o igual a 768px
        if (window.innerWidth <= 768) {
            // Abrir en una nueva pestaña
            window.open(pdfUrl, '_blank');
        } else {
            // Abrir en el modal
            pdfFrame.src = pdfUrl;
            downloadPdfLink.href = pdfUrl; // Asegúrate de que el enlace de descarga tenga la URL correcta
            pdfModal.style.display = 'flex';
            pdfOverlay.style.display = 'block';
        }
    });
});

// Cerrar el modal
closePdfButton.addEventListener('click', function () {
    pdfModal.style.display = 'none';
    pdfOverlay.style.display = 'none';
    pdfFrame.src = ''; // Limpia la fuente del iframe al cerrar
});

// Cerrar el modal al hacer clic en el overlay
pdfOverlay.addEventListener('click', function () {
    pdfModal.style.display = 'none';
    pdfOverlay.style.display = 'none';
    pdfFrame.src = ''; // Limpia la fuente del iframe al cerrar
});
