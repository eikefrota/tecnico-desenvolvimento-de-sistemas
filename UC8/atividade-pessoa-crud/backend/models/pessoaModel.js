class Pessoa {
  constructor({ id, nome, idade, profissao, salario }) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.salario = salario;
  };

  // Você pode adicionar métodos auxiliares aqui, se necessário
  toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      idade: this.idade,
      profissao: this.profissao,
      salario: this.salario,
    };
  };
};

module.exports = Pessoa;
