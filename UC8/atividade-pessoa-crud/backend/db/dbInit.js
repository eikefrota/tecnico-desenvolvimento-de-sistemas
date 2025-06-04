// db/dbInit.js
const db = require('./db'); // Importa a conexão com o banco de dados

// Script SQL para criar a tabela pessoa
const createTable = async () => {
  const checkTableQuery = `SELECT to_regclass('public.pessoa');`;

  try {
    const result = await db.query(checkTableQuery);

    // Verifica se a tabela já existe
    if (result.rows[0].to_regclass === null) {
      // Se a tabela não existir, cria a tabela
      const createQuery = `
        CREATE TABLE pessoa (
          id SERIAL PRIMARY KEY,
          nome VARCHAR(255) NOT NULL,
          idade INT NOT NULL
          profissao VARCHAR(255) NOT NULL,
          salario DECIMAL(10, 2) NOT NULL,
      `;
      await db.query(createQuery);  // Executa a criação da tabela
      console.log('Tabela "pessoa" criada com sucesso!');  // Exibe a mensagem apenas se a tabela foi criada
    } else {
      // Se a tabela já existir, não faz nada
      console.log('Tabela "pessoa" já existe.');
    }
  } catch (err) {
    console.error('Erro ao criar tabela "pessoa":', err.message);
  }
};

module.exports = createTable;
