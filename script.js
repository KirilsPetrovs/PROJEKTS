
// Function to show selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Show the home section by default when page loads
document.addEventListener('DOMContentLoaded', function() {
    showSection('par-mums');
});
