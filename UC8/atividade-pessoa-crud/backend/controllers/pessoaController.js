const PessoaService = require('../services/pessoaService');

class PessoaController {
  // Buscar todas as pessoas
  async getAll(req, res) {
    try {
      const pessoas = await PessoaService.getAll();
      res.status(200).json(pessoas);
    } catch (error) {
      console.error('Erro ao buscar pessoas:', error);
      res.status(500).json({ error: 'Erro ao buscar pessoas.' });
    }
  }

  // Buscar por id
  async getById(req, res) {
    try {
      const { id } = req.params;
      const pessoa = await PessoaService.getById(id);

      if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrado.' });
      }

      res.status(200).json(pessoa);
    } catch (error) {
      console.error('Erro ao buscar pessoa por ID:', error);
      res.status(500).json({ error: 'Erro ao buscar pessoa.' });
    }
  }

  // Criar pessoa
  async create(req, res) {
    try {
      const dados = req.body;
      const novaPessoa = await PessoaService.create(dados);
      res.status(201).json({ message: 'Pessoa criada', data: novaPessoa });
    } catch (error) {
      console.error('Erro ao criar pessoa:', error);
      res.status(500).json({ error: 'Erro ao criar pessoa.' });
    }
  }

  // Atualizar pessoa
  async update(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const pessoaAtualizada = await PessoaService.update(id, dados);

      if (!pessoaAtualizada) {
        return res.status(404).json({ error: 'Pessoa não encontrada para atualizar.' });
      }

      res.status(200).json({ message: 'Pessoa atualizado', data: pessoaAtualizada });
    } catch (error) {
      console.error('Erro ao atualizar pessoa:', error);
      res.status(500).json({ error: 'Erro ao atualizar pessoa.' });
    }
  }

  // Remover pessoa
  async remove(req, res) {
    try {
      const { id } = req.params;
      const resultado = await PessoaService.remove(id);

      if (!resultado) {
        return res.status(404).json({ error: 'Pessoa não encontrada para remover.' });
      }

      res.status(200).json({ message: 'Pessoa removida com sucesso.' });
    } catch (error) {
      console.error('Erro ao remover pessoa:', error);
      res.status(500).json({ error: 'Erro ao remover pessoa.' });
    }
  }
}

module.exports = new PessoaController();
