document.getElementById("hamburger").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
});

// checking what this does
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const submitButton = document.querySelector('.submit-button input');
    submitButton.value = 'Submitting...';
    submitButton.disabled = true;

    setTimeout(() => {
        alert('Form submitted successfully!');
        submitButton.value = 'Submit';
        submitButton.disabled = false;
        this.reset(); // Reset the form
    }, 2000); // Simulate a 2-second delay
});