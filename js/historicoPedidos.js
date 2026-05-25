// historicoPedidos.js

export async function renderHistorico(container, supabase, userId) {
  container.innerHTML = `
    <div class="techfix-card">
      <h2>Histórico de Pedidos</h2>
      <div id="lista" class="techfix-list"></div>
    </div>
  `;

  const { data, error } = await supabase
    .from("reparacoes")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  const lista = document.getElementById("lista");

  if (error || !data || data.length === 0) {
    lista.innerHTML = `<p>Sem pedidos anteriores.</p>`;
    return;
  }

  lista.innerHTML = data.map(item => `
    <div class="techfix-item">
      <h4>${item.equipamento}</h4>
      <p>Estado: <b>${item.estado}</b></p>
      <small>${new Date(item.created_at).toLocaleString()}</small>
    </div>
  `).join("");
}