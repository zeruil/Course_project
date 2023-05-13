const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const prevButton = slider.querySelector('.prev');
const nextButton = slider.querySelector('.next');
const slideWidth = slider.clientWidth;

let slideIndex = 0;

function showSlide() {
    slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function updateButtons() {
    prevButton.disabled = slideIndex === 0;
    nextButton.disabled = slideIndex === 2;
}

prevButton.addEventListener('click', () => {
    slideIndex--;
    showSlide();
    updateButtons();
});

nextButton.addEventListener('click', () => {
    slideIndex++;
    showSlide();
    updateButtons();
});

showSlide();
updateButtons();