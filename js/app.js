const SUPABASE_URL = "https://kqdoubgbzdxmrxbdgoci.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_sw-BaQ0Fz1lPG_WKomzonQ_MbkjnONZ";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function register() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const { data, error } =
        await supabaseClient.auth.signUp({
            email,
            password
        });

    if(error){
        document.getElementById("result").innerText =
        error.message;
        return;
    }

    document.getElementById("result").innerText =
    "Registration successful. Check your email.";
}
