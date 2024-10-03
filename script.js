 // Initialize EmailJS with your user ID
 (function(){
    emailjs.init("wJX7PDg_ocIW4EP6s");
})();

// Function to send email using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send the email using the form data
    console.log(this)
    emailjs.sendForm('service_ba1dhoh','template_j6i4ed5', this)
        .then(function() {
            alert('Message Sent Successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});
