import { supabase } from "./supabaseClient.js"

export async function checkUser(requiredRole) {

  const { data: sessionData } = await supabase.auth.getSession()

  if (!sessionData.session) {
    window.location.href = "/login.html"
    return
  }

  const user = sessionData.session.user

  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle()

  if (!data || data.role !== requiredRole) {
    window.location.href = "/cliente.html"
  }
}