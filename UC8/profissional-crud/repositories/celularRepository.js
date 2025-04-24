const db = require('../db');

const findAll = () => db.query(
    'SELECT * FROM celular'
)

const findById = (id) => db.query(
    'SELECT * FROM celular WHERE id = $1', [id]
)

const create = ({ nome, valor, ano_fabricacao, nome_dono }) => {
    return db.query(
      'INSERT INTO celular (nome, valor, ano_fabricacao, nome_dono) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, valor, ano_fabricacao, nome_dono]
    );
};
  
const update = (id, { nome, valor, ano_fabricacao, nome_dono }) => {
    return db.query(
        'UPDATE celular SET nome=$1, valor=$2, ano_fabricacao=$3, nome_dono=$4 WHERE id=$5 RETURNING *',
        [nome, valor, ano_fabricacao, nome_dono, id]
    );
};

const remove = (id) => db.query(
        'DELETE FROM celular WHERE id = $1', [id]
);

module.exports = { findAll, findById, create, update, remove }