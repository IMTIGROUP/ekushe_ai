function register() {
    const email = document.getElementById("email").value;

    document.getElementById("result").innerText =
        "Registration request for: " + email;
}
