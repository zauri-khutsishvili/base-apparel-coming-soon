const notificationForm = document.getElementById("notification-form");
const email = document.getElementById("email");

notificationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const emailValue = email.value.trim();
    email.value = "";

    if (!isEmail(emailValue)) {
        setErrorFor(email, "Please provide a valid email");
    } else {
        setSuccessFor(email);
    }
});

function setErrorFor(input, message) {
    const inputDiv = input.parentElement;
    const inputField = inputDiv.querySelector("input");
    const errorMessage = inputDiv.querySelector("small");

    inputField.classList.add("error");
    inputDiv.classList.add("error");
    errorMessage.innerText = message;
}

function setSuccessFor(input) {
    const inputDiv = input.parentElement;
    const inputField = inputDiv.querySelector("input");
    const errorMessage = inputDiv.querySelector("small");

    inputDiv.classList.remove("error");
    inputField.classList.remove("error");
    errorMessage.innerText = "";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}