// Initialize EmailJS with your user ID
(function() {
    emailjs.init("NG1fXfD3z2zQpxTaz"); // Replace with your actual EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the form data
    var formData = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_name: "Tracy" // Replace with the name you want to receive in the email
        
    };

    // Send the form data using EmailJS
    emailjs.send('service_t769hdj', 'template_wdq1riq', formData)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset the form
        }, function(error) {
            alert('Failed to send message. Please try again.');
        });
});
