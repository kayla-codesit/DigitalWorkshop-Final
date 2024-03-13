function contactForm(form) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var timezone = document.getElementById('timezone').value;

    if (!name || !email || !timezone || !message) {
        alert('Please fill in all required fields.');
        return false;
    } else {
        alert('Thank you so much for contacting me about your business! I will contact you within the next 72 hours via your email to discuss in detail about how can ensure your business excels!');
        return true; 
    }
}
