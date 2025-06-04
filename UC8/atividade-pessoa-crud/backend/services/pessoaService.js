const repository = require('../repositories/pessoaRepository');

class PessoaService {
  static async getAll() {
    const pessoas = await repository.findAll();
    return pessoas;  // Já é um array de objetos Pessoa
  }

  static async getById(id) {
    const pessoa = await repository.findById(id);
    return pessoa;  // Pode ser null ou um objeto Pessoa
  }

  static async create(dados) {
    const novaPessoa = await repository.create(dados);
    return novaPessoa;  // Retorna um objeto Pessoa
  }

  static async update(id, dados) {
    const pessoaAtualizada = await repository.update(id, dados);
    return pessoaAtualizada;  // Retorna um objeto Pessoa
  }

  static async remove(id) {
    const pessoaRemovida = await repository.remove(id);
    return pessoaRemovida;  // Retorna um objeto Pessoa ou null
  }
}

module.exports = PessoaService;
