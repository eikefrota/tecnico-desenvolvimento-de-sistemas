require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const profissionalRoutes = require('./routes/profissionalRoutes');
const EmpresaRoutes = require('./routes/empresaRoutes');
const dbProfissional = require('./db/dbProfissional');
const dbEmpresa = require('./db/dbEmpresa');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig'); // <- import Swagger config

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.configureMiddlewares();
    this.routes();
    this.initDb();
  }

  configureMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan('dev'));

    // Documentação Swagger
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  routes() {
    this.app.use('/profissionais', profissionalRoutes);
    this.app.use('/empresas', EmpresaRoutes);

    this.app.get('/', (req, res) => {
      res.send('API está funcionando!');
    });

    this.app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: 'Erro interno do servidor.' });
    });
  }

  async initDb() {
    try {
      await dbProfissional();
      console.log('Tabelas "profissional" criada com sucesso!');
    } catch (err) {
      console.error('Erro ao criar a tabela "Profissional": ', err);
    }

    try {
      await dbEmpresa();
      console.log('Tabelas "empresa" criada com sucesso!');
    } catch (err) {
      console.error('Erro ao criar a tabela "empresa": ', err);
    }
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Servidor rodando na porta ${this.port}`);
      console.log(`Documentação Swagger em http://localhost:${this.port}/api-docs`);
    });
  }
}

module.exports = Server;
