function register() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const result =
        document.getElementById("result");

    result.innerText =
        "Email: " + email +
        " | Password Length: " +
        password.length;
}
