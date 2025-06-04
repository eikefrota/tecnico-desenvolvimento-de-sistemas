class ValidatePessoa {
  static validate(req, res, next) {
    const { nome, idade, profissao, salario } = req.body;

    if (!nome || !idade || !profissao || !salario) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    if (typeof salario !== 'number' || salario < 0) {
      return res.status(400).json({ error: 'Salário deve ser um número positivo.' });
    }

    next();
  }
}

module.exports = ValidatePessoa;
