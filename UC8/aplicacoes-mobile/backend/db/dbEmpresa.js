// db/dbInit.js
const db = require('./db'); // Importa a conexão com o banco de dados

// Script SQL para criar a tabela empresa
const createTableEmpresa = async () => {
  const checkTableQuery = `SELECT to_regclass('public.empresa') AS empresa_exists;`;

  try {
    const result = await db.query(checkTableQuery);

    // Verifica se a tabela já existe
    if (result.rows[0].empresa_exists === null) {
      // Se a tabela não existir, cria a tabela
      const createQuery = `
        CREATE TABLE empresa(
         id SERIAL PRIMARY KEY,
         nome VARCHAR(255) NOT NULL,
         ramo VARCHAR(255) NOT NULL,
         logradouro VARCHAR(255) NOT NULL,
         cidade VARCHAR(255) NOT NULL,
         estado VARCHAR(2) NOT NULL
        );
      `;
      await db.query(createQuery);  // Executa a criação da tabela
      console.log('Tabela "empresa" criada com sucesso!');  // Exibe a mensagem apenas se a tabela for criada
    } else {
      // Se a tabela já existir, não faz nada
      console.log('Tabela "empresa" já existe.');
    }
  } catch (err) {
    console.error('Erro ao criar tabela "empresa":', err.message);
  }
};

module.exports = createTableEmpresa;
