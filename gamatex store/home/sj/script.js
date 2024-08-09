let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    let newIndex = currentIndex + direction;
    showSlide(newIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);

    // Change slides automatically every 5 seconds
    setInterval(() => {
        moveSlide(1);
    }, 5000); // 5000 ms = 5 seconds
});


