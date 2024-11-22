// Get gallery items and gallery view
const galleryItems = document.querySelectorAll('.gallery-item img');
const galleryView = document.getElementById('gallery-view');
const galleryImage = document.getElementById('gallery-image');
const galleryCaption = document.getElementById('gallery-caption');
const closeView = document.getElementById('close-view');

// Add click event to each gallery item
galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    galleryImage.src = item.src; // Set the source of the gallery view image
    galleryCaption.textContent = item.alt; // Set the caption to the alt text of the image
    galleryView.style.display = 'flex'; // Show the gallery view
  });
});

// Close the gallery view when clicking the close button
closeView.addEventListener('click', () => {
  galleryView.style.display = 'none';
});

// Close the gallery view when clicking outside the image
galleryView.addEventListener('click', (e) => {
  if (e.target === galleryView) {
    galleryView.style.display = 'none';
  }
});
