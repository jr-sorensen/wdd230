function checkPasswordMatch() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var message = document.getElementById("passwordMatchMessage");

    if (password.value !== confirmPassword.value) {
        message.innerHTML = "Passwords do not match!";
        confirmPassword.setCustomValidity("Passwords do not match!");
    } else {
        message.innerHTML = "";
        confirmPassword.setCustomValidity("");
    }
}

function displayRatingValue() {
    var ratingValue = document.getElementById("ratingValue");
    var pageRating = document.getElementById("pageRating");
    ratingValue.innerHTML = pageRating.value;
}