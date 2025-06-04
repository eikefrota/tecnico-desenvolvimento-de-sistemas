const db = require('../db/db');
const Pessoa = require('../models/pessoaModel');

class PessoaRepository {
  // Método para buscar todas as pessoa
  async findAll() {
    const result = await db.query('SELECT * FROM pessoa');
    return result.rows.map(row => new Pessoa(row));  // Retorna um array de objetos Pessoa
  }

  // Método para buscar uma pessoa por ID
  async findById(id) {
    const result = await db.query('SELECT * FROM pessoa WHERE id = $1', [id]);
    return result.rows[0] ? new Pessoa(result.rows[0]) : null;  // Retorna um objeto Pessoa ou null
  }

  // Método para criar uma nova pessoa
  async create({ nome, idade, profissao, salario }) {
    const result = await db.query(
      'INSERT INTO pessoa (nome, idade, profissao, salario) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, idade, profissao, salario]
    );
    return new Pessoa(result.rows[0]);  // Retorna uma instância de Pessoa
  }

  // Método para atualizar uma pessoa
  async update(id, { nome, idade, profissao, salario }) {
    const result = await db.query(
      'UPDATE pessoa SET nome=$1, idade=$2, profissao=$3, salario=$4 WHERE matricula=$5 RETURNING *',
      [nome, idade, profissao, salario, id]
    );
    return new Pessoa(result.rows[0]);  // Retorna a instância atualizada de Pessoa
  }

  // Método para remover uma pessoa
  async remove(id) {
    const result = await db.query('DELETE FROM pessoa WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] ? new Pessoa(result.rows[0]) : null;  // Retorna a pessoa deletada ou null
  }
}

module.exports = new PessoaRepository();  // Exporte uma instância única da classe
