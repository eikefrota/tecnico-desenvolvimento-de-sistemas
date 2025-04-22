const db = require('../db');

const findAll = () => {
    'SELECT * FROM profissional';
}

const findById = () => {
    'SELECT * FROM profissional WHERE id = $1', [id];
}

const create = ({ nome, profissao, salario, setor, cidade, estado }) => {
    return db.query(
      'INSERT INTO profissional (nome, profissao, salario, setor, cidade, estado) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [nome, profissao, salario, setor, cidade, estado]
    );
};
  
const update = (id, { nome, profissao, salario, setor, cidade, estado }) => {
    return db.query(
        'UPDATE profissional SET nome=$1, profissao=$2, salario=$3, setor=$4, cidade=$5, estado=$6 WHERE matricula=$7 RETURNING *',
        [nome, profissao, salario, setor, cidade, estado, id]
    );
};