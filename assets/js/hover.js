// Wait for the DOM to fully load
window.addEventListener('DOMContentLoaded', function () {
    const homeBlobImg = document.querySelector('.home__blob-img');

    // When mouse enters the image area
    homeBlobImg.addEventListener('mouseenter', function() {
        // Change the image source on hover
        this.src = 'assets/img/roboo.png';

        // Add animation to the image (flicker back-and-forth effect)
        this.style.animation = 'flickerEffect 1s infinite';
    });

    // When mouse leaves the image area
    homeBlobImg.addEventListener('mouseleave', function() {
        // Revert back to the original image when mouse leaves
        this.src = 'assets/img/robo4.png';

        // Remove animation
        this.style.animation = 'none';
    });
});
