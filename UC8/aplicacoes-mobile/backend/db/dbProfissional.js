// db/dbInit.js
const db = require('./db'); // Importa a conexão com o banco de dados

// Script SQL para criar ou modificar a tabela profissional
const createTableProfissional = async () => {
  const checkTableQuery = `SELECT to_regclass('public.profissional') AS profissional_exists;`;

  try {
    const result = await db.query(checkTableQuery);

    // Verifica se a tabela já existe
    if (result.rows[0].profissional_exists === null) {
      // Se a tabela não existir, cria a tabela
      const createQuery = `
        CREATE TABLE profissional (
          matricula SERIAL PRIMARY KEY,
          nome VARCHAR(255) NOT NULL,
          profissao VARCHAR(255) NOT NULL,
          salario DECIMAL(10, 2) NOT NULL,
          setor VARCHAR(255) NOT NULL,
          cidade VARCHAR(255) NOT NULL,
          estado CHAR(2) NOT NULL,
          empresa_id INTEGER NOT NULL,
          FOREIGN KEY (empresa_id) REFERENCES empresa(id)
          ON DELETE CASCADE
        );
      `;
      await db.query(createQuery);  // Executa a criação da tabela
      console.log('Tabela "profissional" criada com sucesso!');  // Exibe a mensagem apenas se a tabela foi criada
    } else {
      // Se a tabela existir, vamos alterá-la para adicionar a coluna empresa_id
      const alterQuery = `
        DO $$ 
        BEGIN 
          IF NOT EXISTS (
            SELECT 1 FROM information_schema.columns 
            WHERE table_name = 'profissional' AND column_name = 'empresa_id'
          ) THEN 
            ALTER TABLE profissional 
            ADD COLUMN empresa_id INTEGER,
            ADD CONSTRAINT fk_empresa 
            FOREIGN KEY (empresa_id) 
            REFERENCES empresa(id) 
            ON DELETE CASCADE;
          END IF;
        END $$;
      `;
      await db.query(alterQuery);
      console.log('Tabela "profissional" atualizada com sucesso!');
    }
  } catch (err) {
    console.error('Erro ao modificar tabela "profissional":', err.message);
  }
};

module.exports = createTableProfissional;
