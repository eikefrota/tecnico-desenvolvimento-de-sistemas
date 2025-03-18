function carregarCarrinho() {
    const listaCarrinho = document.querySelector('.container');
    listaCarrinho.innerHTML = '<h1>CARRINHO</h1>';

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML += '<p>CARRINHO VAZIO!</p>';
        return;
    }

    carrinho.forEach(produto => {
        const novoItemDaLista = document.createElement('div');
        novoItemDaLista.classList.add('carrinho');
        
        const precoFormatado = produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        
        novoItemDaLista.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img">
            <div class="produto-info">
                <p class="produto-nome">${produto.nome}</p>
                <p class="produto-quantidade">Quantidade: ${produto.quantidade}</p>
                <p class="produto-preco">${precoFormatado} </p>
            </div>
            <div class="botoes">
                <button class="produto-btn" onclick="removerProduto(${produto.id})">Remover</button>
            </div>
        `;
        
        listaCarrinho.appendChild(novoItemDaLista);
    });

    listaCarrinho.innerHTML = '<div><button>FINALIZAR</button>`</div>';
}

function removerProduto(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoIndex = carrinho.findIndex(produto => produto.id === id);

    if (produtoIndex !== -1) {
        if (carrinho[produtoIndex].quantidade > 1) {
            carrinho[produtoIndex].quantidade -= 1;
        } else {
            carrinho.splice(produtoIndex, 1);
        }
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
}

carregarCarrinho();

const btnVoltar = document.getElementById('btn-voltar');
btnVoltar.addEventListener('click', () => {
    window.location.href = 'catalogo.html';
});