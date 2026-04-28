import { supabase } from './supabaseClient.js'
import { getUserRole } from './auth.js'

const form = document.getElementById("login-form")

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    alert("Erro: " + error.message)
    return
  }

  
  const { data: sessionData } = await supabase.auth.getSession()
  const user = sessionData.session.user

  console.log("USER:", user.id)

  const role = await getUserRole(user.id)

  console.log("ROLE:", role)

  if (!role) {
    alert("Utilizador sem role")
    return
  }

  if (role === "admin") {
    window.location.href = "admin.html"

  } else if (role === "funcionario") {
    window.location.href = "funcionario.html"

  } else {
    window.location.href = "cliente.html"
  }
})