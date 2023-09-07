const galleryContainer = document.querySelector('.photo-gallery__container');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;
let startX = null;

function showImage(index) {
    const images = document.querySelectorAll('.photo-gallery__item');
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[index].style.display = 'block';
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= galleryContainer.children.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryContainer.children.length - 1;
    }
    showImage(currentIndex);
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (startX === null) {
        return;
    }

    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;

    if (deltaX > 50) {
        prevImage();
        startX = null;
    } else if (deltaX < -50) {
        nextImage();
        startX = null;
    }
}

function handleTouchEnd() {
    startX = null;
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

galleryContainer.addEventListener('touchstart', handleTouchStart);
galleryContainer.addEventListener('touchmove', handleTouchMove);
galleryContainer.addEventListener('touchend', handleTouchEnd);

showImage(currentIndex);

