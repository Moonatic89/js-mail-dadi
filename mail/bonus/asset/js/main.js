// Asks for user Mail and check if he's allowed to access, and print a message with the output.

// BONUS - Use an Input /w a button for the email, and then update the message. 

//Locate button for validation
const validateBtn = document.getElementById("validateBtn");
const userEmail = document.getElementById("email");
const validateMessage = document.getElementById("output");

// Create a list with viable emails
const allowedEmails = [
    "moonatic1989@gmail.com",
    "kirisakipam@gmail.com",
    "nesi_stefano@hotmail.com",
    "ninielart@gmail.com",
    "pippopaperino@pluto.ru"
];

//Add event listener
validateBtn.addEventListener("click", checkForEmail);

function checkForEmail() {
    const bAccess = allowedEmails.includes(userEmail.value);

    if (bAccess == true) {
        validateMessage.innerHTML = "Your e-mail is valid, you can enter. Enjoy!~"
    } else {
        validateMessage.innerHTML = "I'm sorry, the access is denied for you. Bye!"
    }
}
