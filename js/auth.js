import { supabase } from './supabaseClient.js'

// 🔑 Obter role do utilizador
export async function getUserRole(userId) {
  if (!userId) return null

  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single()

  if (error) {
    console.error("Erro ao obter role:", error.message)
    return null
  }

  return data.role
}

// 👤 Obter utilizador atual
export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser()

  if (error) {
    console.error("Erro ao obter utilizador:", error.message)
    return null
  }

  return data.user
}

// 🚪 Logout
export async function logout() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error("Erro no logout:", error.message)
    return
  }

  window.location.href = "login.html"
}