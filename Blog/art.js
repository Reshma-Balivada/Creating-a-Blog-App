function saveImage(button) {
    const productContainer = button.parentNode;
    const image = productContainer.querySelector('img');
    const imageUrl = image.getAttribute('src');
    // Check if the image is already saved
    const isSaved = button.classList.contains('saved');

    if (!isSaved) {
        // Add the image URL to saved_images in localStorage
        const savedImages = getSavedImages();
        savedImages.push(imageUrl); 
        localStorage.setItem('saved_images', JSON.stringify(savedImages));

      // Change the button text to "Saved"
      button.innerText = 'Saved';
      button.classList.add('saved');
    }
}
     // Function to retrieve saved image URLs from localStorage
function getSavedImages() {
    const savedImagesJSON = localStorage.getItem('saved_images');
    return savedImagesJSON ? JSON.parse(savedImagesJSON) : [];
}
function likeImage(button) {
    const isLiked = button.classList.contains('liked');

    if (isLiked) {
        button.innerText = 'Like';
        button.classList.remove('liked');
    } else {
        button.innerText = 'Liked';
        button.classList.add('liked');
    }
}