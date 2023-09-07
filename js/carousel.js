const galleryContainer = document.querySelector('.photo-gallery__container');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

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

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

showImage(currentIndex);