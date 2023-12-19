function submitForm() {
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Display alert with input values
    var alertMessage = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message;
    alert(alertMessage);
}