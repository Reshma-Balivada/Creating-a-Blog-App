        // Function to display saved images in the container
        function displaySavedImages() {
            const savedContainer = document.getElementById('saved-container');
            const savedImages = getSavedImages();

            savedContainer.innerHTML = ''; // Clear existing content

            savedImages.forEach(imageUrl => {
                const imageContainer = document.createElement('div');
                imageContainer.classList.add('saved-image');

                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;

                imageContainer.appendChild(imageElement);
                savedContainer.appendChild(imageContainer);
            });
        }

        // Call the function to display saved images when the page loads
        displaySavedImages();

        // Function to retrieve saved image URLs from localStorage
        function getSavedImages() {
            const savedImagesJSON = localStorage.getItem('saved_images');
            return savedImagesJSON ? JSON.parse(savedImagesJSON) : [];
        }

        // Function to clear all saved images
        function clearSavedImages() {
            localStorage.removeItem('saved_images');
            displaySavedImages();
        }