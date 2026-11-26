function register() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    if(email === "" || password === "") {

        document.getElementById("result").innerText =
        "Fill all fields";

        return;
    }

    document.getElementById("result").innerText =
    "Account ready for: " + email;
}
