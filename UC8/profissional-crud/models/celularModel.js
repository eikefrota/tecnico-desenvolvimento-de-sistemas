class Celular{
    constructor({id, nome, valor, ano_fabricacao, nome_dono }){
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.ano_fabricacao = ano_fabricacao;
        this.nome_dono = nome_dono;
    };
};

module.exports = Celular