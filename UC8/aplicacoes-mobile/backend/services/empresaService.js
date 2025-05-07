const repository = require('../repositories/empresaRepository');

class EmpresaService {
  static async getAll() {
    const empresas = await repository.findAll();
    return empresas;  // Já é um array de objetos Empresa
  }

  static async getById(id) {
    const empresa = await repository.findById(id);
    return empresa;  // Pode ser null ou um objeto Empresa
  }

  static async create(dados) {
    const novaEmpresa = await repository.create(dados);
    return novaEmpresa;  // Retorna um objeto Empresa
  }

  static async update(id, dados) {
    const empresaAtualizada = await repository.update(id, dados);
    return empresaAtualizada;  // Retorna um objeto Empresa
  }

  static async remove(id) {
    const empresaRemovido = await repository.remove(id);
    return empresaRemovido;  // Retorna um objeto Empresa ou null
  }
}

module.exports = EmpresaService;
