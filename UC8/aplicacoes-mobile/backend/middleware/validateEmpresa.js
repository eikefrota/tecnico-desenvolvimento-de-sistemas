class ValidateEmpresa {
    static validate(req, res, next) {
      const { nome, ramo, logradouro, cidade, estado, id } = req.body;
  
      if (!nome || !ramo || !logradouro || !cidade || !estado || !id) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios, incluindo id.' });
      }
  
      if (typeof estado !== 'string' || estado.length !== 2) {
        return res.status(400).json({ error: 'Estado deve ter exatamente 2 letras.' });
      }
  
      next();
    }
  }
  
  module.exports = ValidateEmpresa;
  