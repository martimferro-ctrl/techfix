// verEstadoReparacao.js

export async function renderVerEstado(container, supabase, userId) {
  container.innerHTML = `
    <div class="techfix-card">
      <h2>🔧 Estado da Reparação</h2>

      <input id="searchCode" placeholder="Código da reparação..." />
      <button id="btnSearch">Consultar</button>

      <div id="result" class="techfix-result"></div>
    </div>
  `;

  document.getElementById("btnSearch").onclick = async () => {
    const code = document.getElementById("searchCode").value;

    const { data, error } = await supabase
      .from("reparacoes")
      .select("*")
      .eq("codigo", code)
      .single();

    const result = document.getElementById("result");

    if (error || !data) {
      result.innerHTML = `<p class="error">Reparação não encontrada.</p>`;
      return;
    }

    result.innerHTML = `
      <p><b>Equipamento:</b> ${data.equipamento}</p>
      <p><b>Estado:</b> ${data.estado}</p>
      <p><b>Técnico:</b> ${data.tecnico || "Aguarda atribuição"}</p>
      <p><b>Atualização:</b> ${data.updated_at}</p>
    `;
  };
}