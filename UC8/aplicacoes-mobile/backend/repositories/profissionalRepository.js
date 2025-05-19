const db = require('../db/db');
const Profissional = require('../models/profissionalModel');

class ProfissionalRepository {
  // Método para buscar todos os profissionais
  async findAll() {
    const result = await db.query('SELECT * FROM profissional');
    return result.rows.map(row => new Profissional(row));  // Retorna um array de objetos Profissional
  }

  // Método para buscar um profissional por ID
  async findById(id) {
    const result = await db.query('SELECT * FROM profissional WHERE matricula = $1', [id]);
    return result.rows[0] ? new Profissional(result.rows[0]) : null;  // Retorna um objeto Profissional ou null
  }

  // Método para criar um novo profissional
  async create({ matricula, nome, profissao, salario, setor, cidade, estado, empresa_id }) {
    const result = await db.query(
      'INSERT INTO profissional (matricula, nome, profissao, salario, setor, cidade, estado, empresa_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [matricula, nome, profissao, salario, setor, cidade, estado, empresa_id]
    );
    return new Profissional(result.rows[0]);
  }

  // Método para atualizar um profissional
  async update(id, { nome, profissao, salario, setor, cidade, estado, empresa_id }) {
    const result = await db.query(
      'UPDATE profissional SET nome=$1, profissao=$2, salario=$3, setor=$4, cidade=$5, estado=$6, empresa_id=$7 WHERE matricula=$8 RETURNING *',
      [nome, profissao, salario, setor, cidade, estado, empresa_id, id]
    );
    return new Profissional(result.rows[0]);  // Retorna a instância atualizada de Profissional
  }

  // Método para remover um profissional
  async remove(id) {
    const result = await db.query('DELETE FROM profissional WHERE matricula = $1 RETURNING *', [id]);
    return result.rows[0] ? new Profissional(result.rows[0]) : null;  // Retorna o profissional deletado ou null
  }

  // Adicione estes métodos na classe ProfissionalRepository

  async findBySalarioMaiorQue(valor) {
    const result = await db.query('SELECT * FROM profissional WHERE salario > $1', [valor]);
    return result.rows.map(row => new Profissional(row));
  }

  async findBySalarioMenorQue(valor) {
    const result = await db.query('SELECT * FROM profissional WHERE salario < $1', [valor]);
    return result.rows.map(row => new Profissional(row));
  }

  async findBySalarioEntre(minimo, maximo) {
    const result = await db.query('SELECT * FROM profissional WHERE salario BETWEEN $1 AND $2', [minimo, maximo]);
    return result.rows.map(row => new Profissional(row));
  }

  // Novas consultas relacionadas a empresas
  async findByEmpresa(empresa_id) {
    const result = await db.query('SELECT * FROM profissional WHERE empresa_id = $1', [empresa_id]);
    return result.rows.map(row => new Profissional(row));  // Retorna um array de objetos Profissional
  }

  async countByEmpresa(empresa_id) {
    const result = await db.query('SELECT COUNT(*) FROM profissional WHERE empresa_id = $1', [empresa_id]);
    return parseInt(result.rows[0].count);  // Retorna a contagem de profissionais na empresa
  }

  async getSalarioMedioByEmpresa(empresa_id) {
    const result = await db.query('SELECT AVG(salario) as media FROM profissional WHERE empresa_id = $1', [empresa_id]);
    return parseFloat(result.rows[0].media);  // Retorna o salário médio dos profissionais na empresa
  }
}

module.exports = new ProfissionalRepository();  // Exporte uma instância única da classe
