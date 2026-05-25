import { supabase } from "./supabaseClient.js"

export async function getUserRole(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .maybeSingle()

  if (error || !data) {
    console.error("Erro ao obter role:", error)
    return null
  }

  return data.role
}

export async function checkUser(requiredRole) {
  const { data: sessionData } = await supabase.auth.getSession()

  if (!sessionData.session) {
    window.location.href = "login.html"
    return
  }

  const user = sessionData.session.user
  const role = await getUserRole(user.id)

  if (!role) {
    window.location.href = "login.html"
    return
  }

  if (role === requiredRole) {
    return
  }

  if (role === "admin") {
    window.location.href = "admin.html"
    return
  }

  if (role === "funcionario") {
    window.location.href = "funcionario.html"
    return
  }

  if (role === "cliente") {
    window.location.href = "cliente.html"
    return
  }

  window.location.href = "login.html"
}