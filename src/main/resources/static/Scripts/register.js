function changePart() {
    let part1 = document.getElementById("part1");
    let part2 = document.getElementById("part2");

    let username = document.getElementById("username")
    let email = document.querySelector("#userMail");
    let password = document.querySelector("#password");
    let terms = document.querySelector("#termsAndConditions")

    if (!username.reportValidity()) return;
    if (!email.reportValidity()) return;
    if (!password.reportValidity()) return;
    if (!terms.reportValidity()) return;

    if (part1.style.display === "none") {
        part2.style.display = "none";
        part1.style.display = "flex";
    } else {
        part1.style.display = "none";
        part2.style.display = "flex";
    }

}