// script.js

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all <img> elements inside the .gallery div
    const galleryImages = document.querySelectorAll('.gallery img');
    
    // Loop through each image and add a click event listener
    galleryImages.forEach(function(img) {
        img.addEventListener('click', function() {
            console.log('Image clicked:', img.src);
            // Example of adding a class to the clicked image for styling purposes
            img.classList.toggle('selected');
        });
    });
});
