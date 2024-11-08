{
    /*banner de descuento*/
    // Muestra el banner después de cargar la página
    document.addEventListener("DOMContentLoaded", function () {
    // Muestra el banner después de cargar la página
        document.getElementById("discountBanner").style.display = "block";

    // Puedes agregar aquí lógica adicional, por ejemplo, para cerrar el banner al hacer clic en el botón.
        document.querySelector(".cta-button").addEventListener("click", function () {
            document.getElementById("discountBanner").style.display = "none";
        });
    });

    /*carrousel*/
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const offset = currentIndex * -100 + '%';
        document.querySelector('.slides').style.transform = 'translateX(' + offset + ')';
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }
      
}