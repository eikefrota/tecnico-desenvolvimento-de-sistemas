const express = require('express');
const controller = require('../controllers/profissionalController');
const ValidateProfissional = require('../middleware/validateProfissional');

class ProfissionalRoutes {
  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  registerRoutes() {
    /**
     * @swagger
     * /profissionais:
     *   get:
     *     summary: Retorna todos os profissionais
     *     tags: [Profissionais]
     *     responses:
     *       200:
     *         description: Lista de profissionais
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   matricula:
     *                     type: integer
     *                   nome:
     *                     type: string
     *                   profissao:
     *                     type: string
     *                   salario:
     *                     type: number
     *                   setor:
     *                     type: string
     *                   cidade:
     *                     type: string
     *                   estado:
     *                     type: string
     *                   empresa_id:
     *                     type: integer
     */
    this.router.get('/', controller.getAll);

    /**
     * @swagger
     * /profissionais/{matricula}:
     *   get:
     *     summary: Retorna um profissional por matrícula
     *     tags: [Profissionais]
     *     parameters:
     *       - in: path
     *         name: matricula
     *         required: true
     *         schema:
     *           type: integer
     *         description: Matrícula do profissional
     *     responses:
     *       200:
     *         description: Profissional encontrado
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 matricula:
     *                   type: integer
     *                 nome:
     *                   type: string
     *                 profissao:
     *                   type: string
     *                 salario:
     *                   type: number
     *                 setor:
     *                   type: string
     *                 cidade:
     *                   type: string
     *                 estado:
     *                   type: string
     *                 empresa_id:
     *                   type: integer
     *       404:
     *         description: Profissional não encontrado
     */
    this.router.get('/:matricula', controller.getById);

    /**
     * @swagger
     * /profissionais:
     *   post:
     *     summary: Cria um novo profissional
     *     tags: [Profissionais]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - matricula
     *               - nome
     *               - profissao
     *               - salario
     *               - setor
     *               - cidade
     *               - estado
     *               - empresa_id
     *             properties:
     *               matricula:
     *                 type: integer
     *               nome:
     *                 type: string
     *               profissao:
     *                 type: string
     *               salario:
     *                 type: number
     *               setor:
     *                 type: string
     *               cidade:
     *                 type: string
     *               estado:
     *                 type: string
     *                 minLength: 2
     *                 maxLength: 2
     *               empresa_id:
     *                 type: integer
     *     responses:
     *       201:
     *         description: Profissional criado com sucesso
     */
    this.router.post('/', ValidateProfissional.validate, controller.create);

    /**
     * @swagger
     * /profissionais/{matricula}:
     *   put:
     *     summary: Atualiza um profissional existente
     *     tags: [Profissionais]
     *     parameters:
     *       - in: path
     *         name: matricula
     *         required: true
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - nome
     *               - profissao
     *               - salario
     *               - setor
     *               - cidade
     *               - estado
     *               - empresa_id
     *             properties:
     *               nome:
     *                 type: string
     *               profissao:
     *                 type: string
     *               salario:
     *                 type: number
     *               setor:
     *                 type: string
     *               cidade:
     *                 type: string
     *               estado:
     *                 type: string
     *                 minLength: 2
     *                 maxLength: 2
     *               empresa_id:
     *                 type: integer
     *     responses:
     *       200:
     *         description: Profissional atualizado
     *       404:
     *         description: Profissional não encontrado
     */
    this.router.put('/:matricula', ValidateProfissional.validate, controller.update);

    /**
     * @swagger
     * /profissionais/{matricula}:
     *   delete:
     *     summary: Remove um profissional
     *     tags: [Profissionais]
     *     parameters:
     *       - in: path
     *         name: matricula
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Profissional removido com sucesso
     *       404:
     *         description: Profissional não encontrado
     */
    this.router.delete('/:matricula', controller.remove);

    /**
     * @swagger
     * /profissionais/salario/maior/{valor}:
     *   get:
     *     summary: Retorna profissionais com salário maior que o valor informado
     *     tags: [Profissionais]
     *     parameters:
     *       - in: path
     *         name: valor
     *         required: true
     *         schema:
     *           type: number
     *         description: Valor do salário para comparação
     *     responses:
     *       200:
     *         description: Lista de profissionais encontrados
     */
    this.router.get('/salario/maior/:valor', controller.getBySalarioMaiorQue);

    /**
     * @swagger
     * /profissionais/salario/menor/{valor}:
     *   get:
     *     summary: Retorna profissionais com salário menor que o valor informado
     *     tags: [Profissionais]
     *     parameters:
     *       - in: path
     *         name: valor
     *         required: true
     *         schema:
     *           type: number
     *         description: Valor do salário para comparação
     *     responses:
     *       200:
     *         description: Lista de profissionais encontrados
     */
    this.router.get('/salario/menor/:valor', controller.getBySalarioMenorQue);

    /**
     * @swagger
     * /profissionais/salario/entre/{minimo}/{maximo}:
     *   get:
     *     summary: Retorna profissionais com salário entre dois valores
     *     tags: [Profissionais]
     *     parameters:
     *       - in: path
     *         name: minimo
     *         required: true
     *         schema:
     *           type: number
     *         description: Valor mínimo do salário
     *       - in: path
     *         name: maximo
     *         required: true
     *         schema:
     *           type: number
     *         description: Valor máximo do salário
     *     responses:
     *       200:
     *         description: Lista de profissionais encontrados
     */
    this.router.get('/salario/entre/:minimo/:maximo', controller.getBySalarioEntre);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = new ProfissionalRoutes().getRouter();