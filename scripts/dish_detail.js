// Get the dish ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const dishId = urlParams.get('id'); // Fetch dish ID from URL

// Function to simulate editing a review
function editReview(reviewId) {
    // Simulate fetching review data
    const reviewText = "This is an edited review comment."; // Example text
    document.getElementById('review-input').value = reviewText; // Set textarea value
    document.getElementById('edit-indicator').classList.remove('hidden'); // Show editing indicator
}

// Function to cancel editing
function cancelEdit() {
    document.getElementById('review-input').value = ''; // Clear textarea
    document.getElementById('edit-indicator').classList.add('hidden'); // Hide editing indicator
}