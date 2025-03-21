import "./CardLivro.css";

function CardLivro(){
    //Lógica

    //Renderização
    return(
        <li key={livro.id}>
            {livro.id} - {livro.titulo} - {livro.autor} - {livro.ano_lancamento}
        </li>
    )
}

export default CardLivro