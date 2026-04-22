import { supabase } from './supabaseClient.js'
import { getUserRole } from './auth.js'

export async function login(email, password) {

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    alert(error.message)
    return
  }

  const user = data.user
  const role = await getUserRole(user.id)

  if (role === "admin") {
    window.location.href = "admin.html"
  } 
  else if (role === "funcionario") {
    window.location.href = "funcionario.html"
  } 
  else {
    window.location.href = "cliente.html"
  }
}