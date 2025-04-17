document.addEventListener("DOMContentLoaded", () =>{
    fetchProdutos();
});

function fetchProdutos (){
    fetch("http://localhost:8000/api/produtos/")
    .then(res => res.json())
    .then(data => renderProdutos(data))
    .catch(err => console.error("erro ao buscar produtos", err));
}
function renderProdutos(produtos){

    const container = document.getElementById("produtos-container");
    container.innerHTML = "";

    produtos.forEach(produto =>{
        const card = document.createElement('div');
        card.className = "produto";
        card.innerHTML = `
            <div class="imagem-container">
                <img src="${produto.imagem}" alt="${produto.nome}" /> 
            </div>
            <h2>${produto.nome}</h2>
            <p>${produto.descricao}</P>
            <p class="preco"> R$ ${produto.preco}</p>
            <p><strong>Categoria:</strong> ${produto.categoria.nome}</p>
        `;
    container.appendChild(card);
});
}