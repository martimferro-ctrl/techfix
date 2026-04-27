export function redirectUser(role) {

  if (role === "admin") {
    window.location.href = "/admin.html"

  } else if (role === "funcionario") {
    window.location.href = "/funcionario.html"

  } else {
    window.location.href = "/cliente.html"
  }
}