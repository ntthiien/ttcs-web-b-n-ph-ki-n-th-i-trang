let currentImageIndex = 0;
const images = document.querySelectorAll('#slideshow img');
const totalImages = images.length;

setInterval(() => {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].classList.add('active');
}, 3000);