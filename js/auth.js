import { supabase } from "./supabaseClient.js"

export async function getUserRole(userId) {
  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .maybeSingle()

  if (!data) {
    return null
  }

  return data.role
}

export async function checkUser(requiredRole) {
  const { data: sessionData } = await supabase.auth.getSession()

  if (!sessionData.session) {
    window.location.href = "/login.html"
    return
  }

  const user = sessionData.session.user
  const role = await getUserRole(user.id)

  if (!role || role !== requiredRole) {
    window.location.href = "/cliente.html"
  }
}