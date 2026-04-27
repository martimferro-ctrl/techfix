import { supabase } from './supabaseClient.js'
import { checkUser } from './auth.js'

const form = document.getElementById("login-form")

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  // 1. Login
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    alert("Erro: " + error.message)
    return
  }

  // 2. Pega sessão atual
  const { data: sessionData } = await supabase.auth.getSession()
  const user = sessionData.session.user

  console.log("USER:", user.id)

  // 3. Vai buscar role diretamente (sem getUserRole)
  const { data, error: roleError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single()

  if (roleError || !data) {
    alert("Erro ao obter role")
    return
  }

  const role = data.role

  console.log("ROLE:", role)

  // 4. Redirect
  if (role === "admin") {
    window.location.href = "admin.html"

  } else if (role === "funcionario") {
    window.location.href = "funcionario.html"

  } else {
    window.location.href = "cliente.html"
  }
})