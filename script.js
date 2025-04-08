
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
    showSection('sakums');

    // Handle complaint form submission
    const complaintForm = document.querySelector('.complaint-form');
    complaintForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Paldies par jūsu sūdzību! Mēs to izskatīsim pēc iespējas ātrāk.');
        complaintForm.reset();
    });

    // Handle auth form submission
    const authForm = document.querySelector('.auth-form');
    authForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = this.querySelector('input[type="text"]').value;
        const password = this.querySelector('input[type="password"]').value;
        
        // Check credentials (you can change these values)
        const correctUsername = "admin";
        const correctPassword = "password123";
        
        if (username === correctUsername && password === correctPassword) {
            alert("Jūs esat veiksmīgi pieteicies!");
        } else {
            alert("Nepareizs lietotājvārds vai parole!");
        }
        authForm.reset();
    });
});
