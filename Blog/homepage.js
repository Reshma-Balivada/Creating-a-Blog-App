function submitRating() {
const selectedRating = document.querySelector('input[name="rating"]:checked');
if (selectedRating) {
  const ratingValue = selectedRating.value;
  alert('Thank you for rating! You rated: ' + ratingValue + ' stars.');
} else {
  alert('Please select a rating before submitting.');
}
}
function searchBlogs() {
const searchInput = document.querySelector('.search-box').value.toLowerCase();
const blogs = document.querySelectorAll('.card');
let noBlogsFound = true;

blogs.forEach((blog) => {
const blogTitle = blog.querySelector('h2').textContent.toLowerCase();

if (blogTitle.includes(searchInput)) {
    blog.style.display = 'block';
    noBlogsFound = false;
} else {
    blog.style.display = 'none';
}
});

const noBlogsMessage = document.getElementById('noBlogsMessage');
noBlogsMessage.style.display = noBlogsFound ? 'block' : 'none';
}

// Initialize the search functionality when the page loads
searchBlogs();