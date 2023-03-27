// Get all the dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

// Loop through each dropdown
dropdowns.forEach(dropdown => {
  // Get the dropdown content
  const content = dropdown.querySelector('.dropdown-content');

  // Hide the dropdown content by default
  content.style.display = 'none';

  // When the dropdown is clicked
  dropdown.addEventListener('click', () => {
    // Toggle the dropdown content
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
