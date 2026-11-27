const SUPABASE_URL = "https://kqdoubgbzdxmrxbdgoci.supabase.co";
const SUPABASE_KEY = "sb_publishable_sw-BaQ0Fz1lPG_WKomzonQ_MbkjnONZ";

const client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function register() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const result =
        document.getElementById("result");

    const { data, error } =
        await client.auth.signUp({
            email,
            password
        });

    if (error) {
        result.innerText = error.message;
        return;
    }

    result.innerText =
        "Registration successful. Check your email.";
}



async function login() {

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    const result =
        document.getElementById("loginResult");

    const { data, error } =
        await client.auth.signInWithPassword({
            email,
            password
        });

    if (error) {
        result.innerText = error.message;
        return;
    }

    result.innerText = "Login successful";

    alert("Login Success");

    window.location.href = "dashboard.html";
}



async function logout() {

    await client.auth.signOut();

    window.location.href = "../index.html";
}



async function checkUser() {

    const {
        data: { user }
    } = await client.auth.getUser();

    if (!user) {

        window.location.href =
            "login.html";

        return;
    }

    document.getElementById("userInfo").innerText =
        user.email;
}
