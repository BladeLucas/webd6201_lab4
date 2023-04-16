/*
 * Name: Blade Lucas and Darren Dickson
 * Student ID: 100708461 and 100724289
 * Date Completed: March 4th, 2023
 */


//This class creates a user object with the given parameters
class User {
    //Constructor for users
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName
        this.lastName = lastName
        this.username = username
        this.email = email
        this.password = password
    }
}

/* This function will take the username of the logged in user and display it in the space between
 * the "Contact us" tab and "Login" button */
function displayNameInNav() {
    //Grabs the values of username and password using the class
    var username = $("#usernameInput").val()
    var password = $("#passwordInput").val()

    //Executes the logic if the username and password are input
    if (username != "" && password != "") {
        //Prevents the display from being injected more than once
        if ($("#usernameDisplay").length == 0) {
            $("#navbarNavAltMarkup").after("<span class='navbar-text me-5' id='usernameDisplay'>" + username + "</span>")
        }
    }
 }

 /* This function will take care of creating the error div using jquery, it will also handle all of
  * the error checking for the registration page, ensuring that all inputs match the assignment guidelines.
  * If all validation is passed then an instance of the user class will be created and output to the console
  * and the form will be cleared */
function errorMessageDiv() {

    //Variable for validation
    var error = false

    //Creates the empty hidden div if it is not already created
    if ($("#ErrorMessage").length == 0) {
        $("#registerForm").after("<div id='ErrorMessage'></div>")
        $("#ErrorMessage").hide()
    }
    //Resets the contents of the error div 
    else {
        $("#ErrorMessage").html("")
    }

    //Variable declarations for the required validation fields using jquery
    var firstName = $("#firstNameInput").val()
    var lastName = $("#lastNameInput").val()
    var email = $("#emailInput").val()
    var password = $("#passwordInput").val()
    var confirmPassword = $("#confirmPasswordInput").val()

    //Reveals the hidden div and populates an error message if the first/last name is not long enough
    if (firstName.length < 2 || lastName.length < 2) {
        $("#ErrorMessage").show()
        $("#ErrorMessage").html("<p>The First and Last Name needs to be 2 characters or more.</p>")
        error = true
    }

    //Reveals the hidden div and populates an error message if the email is not long enough and doesnt contain the @ symbol
    if (email.length < 8 || email.indexOf("@") == -1) {
        $("#ErrorMessage").show()
        $("#ErrorMessage").html("<p>The email address must be at least 8 characters long and include the @ symbol.</p>")
        error = true
    }

    //Reveals the hidden div and populates an error message if the password is not long enough
    if (password.length < 6 || password !== confirmPassword) {
        $("#ErrorMessage").show()
        $("#ErrorMessage").html("<p>The password must match the confirm password field and be at least 6 characters long.</p>")
        error = true
    }

    /* If there is no error then create a new user, using the given parameters and output them to the console.
     * Once the output happens clear the input fields. Nothing was specified for username so for the sake of 
     * the constructor, we are using the email as the username */
    if (!error) {
        var user = new User(firstName, lastName, email, email, password)
        console.log(user)

        $("#registerForm")[0].reset()
    }
}

//Imediately invoked functions
(function () {
    //Adds an event listener that will prevent the default function of the submit button
    addEventListener('submit', submitForm => {
        event.preventDefault()
    })

    //Outputs a message to the console on startup for testing purposes
    function Start() {
        console.log("App Started!")
    }

    window.addEventListener("load", Start)
})()