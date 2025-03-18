function carregarListaProdutos() {
    const listaProdutos = document.querySelector('.container');
    listaProdutos.innerHTML = '<h1>CATÁLOGO DE CAMISAS</h1>';

    produtos.forEach(produto => {
        const novoItemDaLista = document.createElement('div');
        novoItemDaLista.classList.add('produtos');
        
        const precoFormatado = produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        
        novoItemDaLista.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img">
            <div class="produto-info">
                <p class="produto-nome">${produto.nome}</p>
                <p class="produto-descricao">${produto.descricao}</p>
                <p class="produto-preco">${precoFormatado}</p>
            </div>
            <div class="botoes">
                <button class="produto-btn" onclick="adicionarProduto(${produto.id})">Comprar</button>
            </div>
        `;
        
        listaProdutos.appendChild(novoItemDaLista);
    });
}

function adicionarProduto(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let produtoSelecionado = produtos.find(produto => produto.id == id);

    if (!produtoSelecionado) {
        alert("PRODUTO NÃO EXISTE");
        return;
    }

    let produtoNoCarrinho = carrinho.find(produto => produto.id == id);

    if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade += 1;
    } else {
        produtoSelecionado.quantidade = 1;
        carrinho.push(produtoSelecionado);
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

const produtos = [
    {
        "id": 1,
        "nome": "Camisa Listrada 2024",
        "descricao": "Camisa N° 01 de 2024",
        "preco": 250.00,
        "imagem": "images/camisa-01-masculina.png"
    },
    {
        "id": 2,
        "nome": "Camisa Branca 2024",
        "descricao": "Camisa N° 02 de 2024",
        "preco": 250.00,
        "imagem": "images/camisa-02-masculina.png"
    },
    {
        "id": 3,
        "nome": "Camisa Aquecimento",
        "descricao": "Camisa de Aquecimento",
        "preco": 150.00,
        "imagem": "images/camisa-aquecimento-masculina.png"
    },
    {
        "id": 4,
        "nome": "Camisa Goleiro Verde",
        "descricao": "Camisa de Goleiro Verde",
        "preco": 200.00,
        "imagem": "images/camisa-goleiro-01-masculina.png"
    },
    {
        "id": 5,
        "nome": "Camisa Goleiro Roxa",
        "descricao": "Camisa de Goleiro Roxa",
        "preco": 200.00,
        "imagem": "images/camisa-goleiro-02-masculina.png"
    },
    {
        "id": 6,
        "nome": "Camisa Goleiro Laranja",
        "descricao": "Camisa de Goleiro Laranja",
        "preco": 200.00,
        "imagem": "images/camisa-goleiro-03-masculina.png"
    },
    {
        "id": 7,
        "nome": "Camisa Liberdade",
        "descricao": "Camisa Liberdade",
        "preco": 250.00,
        "imagem": "images/camisa-liberdade.png"
    },
    {
        "id": 8,
        "nome": "Camisa Redenção",
        "descricao": "Camisa Redenção",
        "preco": 250.00,
        "imagem": "images/camisa-redencao.png"
    },
    {
        "id": 9,
        "nome": "Camisa Cearamor",
        "descricao": "Camisa em homenagem à Cearamor",
        "preco": 250.00,
        "imagem": "images/camisa-cearamor-masculina.png"
    },
];

carregarListaProdutos();

const btnCart = document.getElementById('btn-cart');

btnCart.addEventListener('click', () => {
    window.location.href = 'carrinho.html';
});