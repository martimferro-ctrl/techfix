import { supabase } from "./supabaseClient.js"

// LOGIN
window.login = async function () {

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })
  if (error) {
    alert("Login inválido")
    console.error(error)
    return
  }
  checkRole()
}
// VERIFICAR ROLE
async function checkRole() {
  const { data: { user } } = await supabase.auth.getUser()
  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single()
  if (error || !data) {
    alert("Perfil não encontrado")
    console.error(error)
    return
  }
  if (data.role === "admin") {
    window.location.href = "admin.html"
  }
  if (data.role === "funcionario") {
    window.location.href = "funcionario.html"
  }
  if (data.role === "cliente") {
    window.location.href = "cliente.html"
  }
}
// LOGOUT
window.logout = async function () {
  await supabase.auth.signOut()
  window.location.href = "login.html"
}