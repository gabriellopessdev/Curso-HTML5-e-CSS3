document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.video-container a');

    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
            image.style.zIndex = "1";
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
            image.style.zIndex = "auto";
        });
    });
});
