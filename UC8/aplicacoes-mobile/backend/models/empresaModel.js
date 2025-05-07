class Empresa {
    constructor({ id, nome, ramo, logradouro, cidade, estado }) {
      this.id = id;
      this.nome = nome;
      this.ramo = ramo;
      this.logradouro = logradouro;
      this.cidade = cidade;
      this.estado = estado;
    }
  
    // Você pode adicionar métodos auxiliares aqui, se necessário
    toJSON() {
      return {
        id: this.id,
        nome: this.nome,
        ramo: this.ramo,
        logradouro: this.logradouro,
        cidade: this.cidade,
        estado: this.estado,
      };
    }
  }
  
  module.exports = Empresa;
  