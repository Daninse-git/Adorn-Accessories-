let form = document.getElementById("contactForm");
let response = document.getElementById("response");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" ||
        subject === "" || message === "") {
        response.style.color = "red";
        response.textContent = "Please fill in all the fields.";
    } else {
        response.style.color = "green";
        response.textContent =
            "Thank you, " + name +
            "! Your message has been received.";

        form.reset();
    }
});