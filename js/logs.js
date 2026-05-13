import { supabase } from './js/supabaseClient.js'

export async function addLog(acao, utilizador, detalhes = "") {

  const { data, error } = await supabase
    .from("logs")
    .insert([
      {
        acao: acao,
        utilizador: utilizador,
        detalhes: detalhes
      }
    ])

  if (error) {
    console.error("Erro ao adicionar log:", error)
    return false
  }

  return true
}

export async function getLogs() {

  const { data, error } = await supabase
    .from("logs")
    .select("*")
    .order("data", { ascending: false })

  if (error) {
    console.error("Erro ao buscar logs:", error)
    return []
  }

  return data
}

export async function deleteLog(id) {

  const { error } = await supabase
    .from("logs")
    .delete()
    .eq("id", id)

  if (error) {
    console.error("Erro ao apagar log:", error)
    return false
  }

  return true
}

export async function clearLogs() {

  const { error } = await supabase
    .from("logs")
    .delete()
    .neq("id", "")

  if (error) {
    console.error("Erro ao limpar logs:", error)
    return false
  }

  return true
}