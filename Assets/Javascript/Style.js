alert('test')

document.getElementById("hamburger").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
});

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to validate manually

    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('Email');
    const message = document.getElementById('message');

    if (!fname.value.trim() || fname.value === 'First Name') {
        alert('Please enter a valid first name');
        fname.focus();
        return;
    }
    
    if (!lname.value.trim() || lname.value === 'Last Name') {
        alert('Please enter a valid last name');
        lname.focus();
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address');
        email.focus();
        return;
    }

    if (!message.value.trim()) {
        alert('Message cannot be empty');
        message.focus();
        return;
    }

    alert('Form submitted successfully!');
    event.target.submit();
});

