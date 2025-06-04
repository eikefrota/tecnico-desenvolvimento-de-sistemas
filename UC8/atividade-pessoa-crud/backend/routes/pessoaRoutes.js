const express = require('express');
const controller = require('../controllers/pessoaController');
const ValidatePessoa = require('../middleware/validatePessoa');  // Importe a classe
const Pessoa = require('../models/pessoaModel');

class PessoaRoutes {
  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  registerRoutes() {
    // Verifique se o ValidatePessoa.validate está sendo referenciado corretamente
    this.router.get('/', controller.getAll);
    this.router.get('/:id', controller.getById);
    this.router.post('/', ValidatePessoa.validate, controller.create);  // Middleware de validação
    this.router.put('/:id', ValidatePessoa.validate, controller.update);  // Middleware de validação
    this.router.delete('/:id', controller.remove);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = new PessoaRoutes().getRouter();
