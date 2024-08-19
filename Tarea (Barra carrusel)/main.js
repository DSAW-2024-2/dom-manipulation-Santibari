document.addEventListener('DOMContentLoaded', () => {
    const bloqueCentro = document.querySelector('.bloque.centro');
    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');
    let currentIndex = 0;

    const updateCarousel = () => {
        const offset = -currentIndex * bloqueCentro.clientWidth;
        bloqueCentro.style.transform = `translateX(${offset}px)`;
    };

    btn1.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    btn2.addEventListener('click', () => {
        if (currentIndex < bloqueCentro.children.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);
});
