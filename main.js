function login() {
    let name = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Case-insensitive check for both username and password
    if (name.toLowerCase() === "sm1" && password.toLowerCase() === "sm1") {
        location.href = "page1.html";
    } else {
        alert("Incorrect username or password.");
    }
}
