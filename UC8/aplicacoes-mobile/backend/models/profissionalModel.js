class Profissional {
  constructor({ matricula, nome, profissao, salario, setor, cidade, estado, empresa_id }) {
    this.matricula = matricula;
    this.nome = nome;
    this.profissao = profissao;
    this.salario = salario;
    this.setor = setor;
    this.cidade = cidade;
    this.estado = estado;
    this.empresa_id = empresa_id;
  }

  toJSON() {
    return {
      matricula: this.matricula,
      nome: this.nome,
      profissao: this.profissao,
      salario: this.salario,
      setor: this.setor,
      cidade: this.cidade,
      estado: this.estado,
      empresa_id: this.empresa_id
    };
  }
}

module.exports = Profissional;
