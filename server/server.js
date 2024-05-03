const name = document.getElementById("name"); //variable for name
const password = document.getElementById("password"); //variable for password
const form = document.getElementById("form"); 
const errorElement = document.getElementById("error");

/**to be able to catch these errors, you need to add event listeners to the form because by 
 * default when you click submit it automatically refreshes the page  */

//now we add the submit even listener
//in order to cancel out our form submitting you add the (e)
form.addEventListener("submit", (e) => {
    let messages = []  /* creating a variable that is going to be equal to all of our error messsages*/
    if (name.value === "" || name.value === null ) {
        messages.push("name is required")
    }

    if (password.value.length <= 6 ) {
        messages.push("Password must be longer than six characters");
    }

    if (password.value.length >= 20 ) {
        messages.push("password must be less than 20 characters")
    }

    if (password.value === "password") {
        messages.push("password cannot be set to password");
    }

    if (messages.length  > 0) {
        e.preventDefault(); /**this called function is going to prevent our page from submitting, 
        but we only want to do this if we have errors */ 
        errorElement.innerText = messages.join(",")  /**here we are taking our error element and setting the 
        innerText text here take our messafges and join each one of these by a comma so they are 
        all separated by a comma */
    }
 
});