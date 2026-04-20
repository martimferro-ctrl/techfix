import { supabase } from "./supabaseClient.js"

async function checkLogin(){

const { data } = await supabase.auth.getUser()

if(!data.user){
window.location.href = "/login.html"
}

}

checkLogin()