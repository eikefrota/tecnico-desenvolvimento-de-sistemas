require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const profissionalRoutes = require('./routes/profissionalRoutes');
const dbInit = require('./db/dbInit');
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

    this.app.get('/', (req, res) => {
      res.send('API de Profissionais está funcionando!');
    });

    this.app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: 'Erro interno do servidor.' });
    });
  }

  async initDb() {
    try {
      await dbInit();
      console.log('Tabela criada com sucesso!');
    } catch (err) {
      console.error('Erro ao criar a tabela: ', err);
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
