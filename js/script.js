function sendMail() {
    // Get form field values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Name validation: only letters and spaces
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Please enter a valid name (letters and spaces only, no numbers).");
        return; // Stop the function if validation fails
    }

    // Simple validation for name length
    if (name.length < 4) {
        alert("Please enter at least 4 characters for the name.");
        return; // Stop the function if validation fails
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return; // Stop the function if validation fails
    }

    // Subject validation
    if (subject.length < 8) {
        alert("Please enter at least 8 characters for the subject.");
        return; // Stop the function if validation fails
    }

    // Message validation
    if (message.trim() === '') {
        alert("Please write a message.");
        return; // Stop the function if validation fails
    }

    // Prepare parameters for emailjs
    let parms = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    // Send the email using emailjs
    emailjs.send("contact_service", "contact_form", parms)
    .then(function(response) {
        // Show a success message after sending the email
        alert("EMAIL SENT!!!");
    }, function(error) {
        // Show an error message if something went wrong
        alert("FAILED TO SEND EMAIL: " + error);
    });
}
