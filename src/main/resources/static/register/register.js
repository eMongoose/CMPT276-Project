function changePart() {
    let part1 = document.getElementById("part1");
    let part2 = document.getElementById("part2");

    const username = document.getElementById("username")
    const email = document.querySelector("#userMail");
    const password = document.querySelector("#password");
    const terms = document.querySelector("#termsAndConditions")

    let usernameRegex= new RegExp("^.{3,}$");

    if (!usernameRegex.test(username.value)) {
        username.setCustomValidity("Username must be at least 3 characters long");
        username.reportValidity();
        return;
    } else {
        username.setCustomValidity("");
    }

    if (!email.reportValidity()) return;

    let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+\\-]).{8,}$");

    if (!passwordRegex.test(password.value)) {
        let response = "Invalid Password: ";

        let passwordLength = new RegExp("^.{8,}$");
        let capitalLetter = new RegExp("(?=.*[A-Z])");
        let smallLetter = new RegExp("(?=.*[a-z])");
        let number = new RegExp("(?=.*[0-9])");
        let specialCharacter = new RegExp("(?=.*[\.!@#$%^&*_)=+-])");

        if (!passwordLength.test(password.value)) response += "Must be at least 8 characters long; ";
        if (!capitalLetter.test(password.value)) response += "Must include at least 1 uppercase letter; ";
        if (!smallLetter.test(password.value)) response += "Must include at least 1 lower case letter; ";
        if (!number.test(password.value)) response += "Must include at least 1 number; ";
        if (!specialCharacter.test(password.value)) response += "Must include at least 1 special character; "

        password.setCustomValidity(response);
        password.reportValidity();
        return;
    } else {
        password.setCustomValidity("");
    }


    if (!terms.reportValidity()) return;

    if (part1.style.display === "none") {
        part2.style.display = "none";
        part1.style.display = "flex";
    } else {
        part1.style.display = "none";
        part2.style.display = "flex";
    }

}