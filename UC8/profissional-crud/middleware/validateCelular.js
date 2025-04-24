module.exports = (req, res, next) => {
    const { nome, valor, ano_fabricacao, nome_dono } = req.body;
  
    if (!nome || !valor || !ano_fabricacao || !nome_dono) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }
    
    next();
};