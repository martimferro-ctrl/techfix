// contactarSuporte.js

export async function renderSuporte(container, supabase, userId) {
  container.innerHTML = `
    <div class="techfix-card">
      <h2>Contactar Suporte</h2>

      <input id="assunto" placeholder="Assunto" />
      <textarea id="mensagem" placeholder="Escreve a tua mensagem..."></textarea>

      <button id="btnSend">Enviar</button>

      <p id="status"></p>
    </div>
  `;

  document.getElementById("btnSend").onclick = async () => {
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    const { error } = await supabase
      .from("suporte")
      .insert([
        {
          user_id: userId,
          assunto,
          mensagem,
          estado: "aberto"
        }
      ]);

    const status = document.getElementById("status");

    if (error) {
      status.innerHTML = "Erro ao enviar mensagem.";
      return;
    }

    status.innerHTML = "Mensagem enviada com sucesso!";
  };
}