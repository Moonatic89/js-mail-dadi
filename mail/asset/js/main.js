// Asks for user Mail and check if he's allowed to access, and print a message with the output.

/*
Tools:

- Ask for User mail -> prompt();
- Check on a list if he can access -> array[];
- Print a message -> console.log (debug) / innerHTML (definitive)

*/

// Email acquisition
const userEmail = prompt(`Please insert your e-mail address before entering
[HINT -  moonatic1989@gmail.com is allowed]`);


// Create a list with viable emails
const allowedEmails = [
    "moonatic1989@gmail.com",
    "kirisakipam@gmail.com",
    "nesi_stefano@hotmail.com",
    "naminielart@gmail.com",
    "pippopaperino@pluto.ru"
];

//Check for allowed emails
const bAccess = allowedEmails.includes(userEmail);

//debug
//console.log(bAccess);


if (bAccess == true) {
    document.getElementById("output").innerHTML = "Your e-mail is valid, you can enter. Enjoy!~"
} else {
    document.getElementById("output").innerHTML = "I'm sorry, the access is denied for you. Bye!"
}
