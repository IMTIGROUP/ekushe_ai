const SUPABASE_URL = "https://kqdoubgbzdxmrxbdgoci.supabase.co";
const SUPABASE_KEY = "sb_publishable_sw-BaQ0Fz1lPG_WKomzonQ_MbkjnONZ";

const client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// REGISTER
async function register() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const result =
        document.getElementById("result");

    const { error } =
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

// LOGIN
async function login() {

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    const result =
        document.getElementById("loginResult");

    const { error } =
        await client.auth.signInWithPassword({
            email,
            password
        });

    if (error) {
        result.innerText = error.message;
        return;
    }

    window.location.href = "dashboard.html";
}

// LOGOUT
async function logout() {

    await client.auth.signOut();

    window.location.href = "../index.html";
}

// PROTECT DASHBOARD
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

    document.getElementById("dashboard").style.display =
        "block";

    loadMessages();
}

// SEND MESSAGE
async function sendMessage() {

    const {
        data: { user }
    } = await client.auth.getUser();

    const input =
        document.getElementById("message");

    const text =
        input.value.trim();

    if (!text) return;

    const { error } =
        await client
        .from("messages")
        .insert([
            {
                user_email: user.email,
                message: text
            }
        ]);

    if (!error) {
        input.value = "";
        loadMessages();
    }
}

// LOAD CHAT HISTORY
async function loadMessages() {

    const {
        data: { user }
    } = await client.auth.getUser();

    const chatBox =
        document.getElementById("chatBox");

    if (!chatBox) return;

    const { data, error } =
        await client
        .from("messages")
        .select("*")
        .eq("user_email", user.email)
        .order("created_at", {
            ascending: true
        });

    if (error) return;

    chatBox.innerHTML = "";

    data.forEach(msg => {

        const div =
            document.createElement("div");

        div.className = "message";

        div.innerText =
            msg.message;

        chatBox.appendChild(div);
    });
}
