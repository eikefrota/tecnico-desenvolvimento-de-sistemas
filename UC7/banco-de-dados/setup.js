import {getConnection, closeConnection} from "./db.js";

const pool = getConnection();

const criarTabelaUsuarios = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS usuarios(
            id SERIAL PRIMARY KEY,
            login TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            data_nascimento DATE NOT NULL
            );
        `)
        console.log("Tabela usuarios criada com sucesso!");
    }
    catch (error) {
        console.error("Erro ao criar tabela usuarios:", error);
    }
    finally {
        closeConnection();
    }
}

criarTabelaUsuarios()