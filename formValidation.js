// formValidation.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        document.getElementById("errorMsg").innerHTML = "All fields are required.";
        return;
    }
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("errorMsg").innerHTML = "Invalid email address.";
        return;
    }
    
    // Form is valid, perform further actions (e.g., send data to server)
    document.getElementById("errorMsg").innerHTML = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
});
