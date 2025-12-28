const telefone = "5543998613818";

// identifica o catálogo pelo nome do arquivo HTML
const pagina = window.location.pathname.split("/").pop();

let nomeCatalogo = "Catálogo";

if (pagina.includes("1")) nomeCatalogo = "Casual e Esportivo";
else if (pagina.includes("2")) nomeCatalogo = "Tênis 1ª Linha";
else if (pagina.includes("3")) nomeCatalogo = "Tênis Importado";
else if (pagina.includes("4")) nomeCatalogo = "Tênis Infantil";
else if (pagina.includes("5")) nomeCatalogo = "Tênis Premium";

document.querySelectorAll(".whatsapp-btn").forEach(botao => {
  const produtoDiv = botao.closest(".produto");
  if (!produtoDiv) return;

  const img = produtoDiv.querySelector("img");
  if (!img) return;

  let nomeArquivo = decodeURIComponent(img.src.split("/").pop());
  nomeArquivo = nomeArquivo.replace(/\.(jpg|jpeg|png|webp)$/i, "");

  let numeroItem = 1;
  const match = nomeArquivo.match(/\((\d+)\)$/);
  if (match) {
    numeroItem = parseInt(match[1], 10) + 1;
  }

  // 👉 cria o selo visual do item
  const badge = document.createElement("div");
  badge.className = "item-numero";
  badge.innerText = `${numeroItem}`;

  produtoDiv.prepend(badge);

  const mensagem =
    `Olá! Tenho interesse no item nº ${numeroItem} do catálogo ${nomeCatalogo}.`;

  botao.href =
    `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  botao.target = "_blank";
});
