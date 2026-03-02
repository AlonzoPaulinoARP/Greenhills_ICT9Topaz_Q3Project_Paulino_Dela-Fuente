const form = document.getElementById("form")
const submitButton = document.getElementById("submitButton"); 

form.addEventListener("required", function() {
    if (form.checkValidity()) {
        submitButton.enabled = true;
    } else {
        submitButton.enabled = false;
    }
});
form.addEventListener("disabled", function() {
    if (form.checkValidity()) {
        submitButton.enabled = true;
    } else {
        submitButton.enabled = false;
    }
});