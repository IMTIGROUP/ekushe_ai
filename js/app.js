const SUPABASE_URL = "https://kqdoubgbzdxmrxbdgoci.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_sw-BaQ0Fz1lPG_WKomzonQ_MbkjnONZ";

const client = supabase.createClient(
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
            email: email,
            password: password
        });

    if(error){
        result.innerText = error.message;
        return;
    }

    result.innerText =
        "User created successfully";
}
