document.getElementById("hamburger").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
});

var form = document.getElementById("contact-form");

form.addEventListener ("submit", function() {
    var fullname = document. getElementById("fullname").value;
    if (fullname != "") {
        return true
    }
    else {
        alert ("You can't submit the form without a full name entered");
        event.preventDefault();
        return false;
    }
});