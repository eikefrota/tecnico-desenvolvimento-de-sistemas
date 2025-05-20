const EmpresaService = require('../services/empresaService');
const ProfissionalRepository = require('../repositories/profissionalRepository');

class EmpresaController {
  // Buscar todas as empresas
  async getAll(req, res) {
    try {
      const empresas = await EmpresaService.getAll();
      res.status(200).json(empresas);
    } catch (error) {
      console.error('Erro ao buscar empresas:', error);
      res.status(500).json({ error: 'Erro ao buscar empresas.' });
    }
  }

  // Buscar por id
  async getById(req, res) {
    try {
      const { id } = req.params;
      const empresa = await EmpresaService.getById(id);

      if (!empresa) {
        return res.status(404).json({ error: 'Empresa não encontrada.' });
      }

      res.status(200).json(empresa);
    } catch (error) {
      console.error('Erro ao buscar empresa por ID:', error);
      res.status(500).json({ error: 'Erro ao buscar empresa.' });
    }
  }

  // Criar empresa
  async create(req, res) {
    try {
      const dados = req.body;
      const novaEmpresa = await EmpresaService.create(dados);
      res.status(201).json({ message: 'Empresa criada', data: novaEmpresa });
    } catch (error) {
      console.error('Erro ao criar empresa:', error);
      res.status(500).json({ error: 'Erro ao criar empresa.' });
    }
  }

  // Atualizar empresa
  async update(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const empresaAtualizada = await EmpresaService.update(id, dados);

      if (!empresaAtualizada) {
        return res.status(404).json({ error: 'Empresa não encontrada para atualizar.' });
      }

      res.status(200).json({ message: 'Empresa atualizada', data: empresaAtualizada });
    } catch (error) {
      console.error('Erro ao atualizar empresa:', error);
      res.status(500).json({ error: 'Erro ao atualizar empresa.' });
    }
  }

  // Remover empresa
  async remove(req, res) {
    try {
      const { id } = req.params;
      const resultado = await EmpresaService.remove(id);

      if (!resultado) {
        return res.status(404).json({ error: 'Empresa não encontrada para remover.' });
      }

      res.status(200).json({ message: 'Empresa removida com sucesso.' });
    } catch (error) {
      console.error('Erro ao remover empresa:', error);
      res.status(500).json({ error: 'Erro ao remover empresa.' });
    }
  }

  // Buscar profissionais de uma empresa
  async getProfissionais(req, res) {
    try {
      const { id } = req.params;
      const profissionais = await ProfissionalRepository.findByEmpresa(id);
      res.status(200).json(profissionais);
    } catch (error) {
      console.error('Erro ao buscar profissionais da empresa:', error);
      res.status(500).json({ error: 'Erro ao buscar profissionais da empresa.' });
    }
  }

  // Contar profissionais de uma empresa
  async getProfissionaisCount(req, res) {
    try {
      const { id } = req.params;
      const count = await ProfissionalRepository.countByEmpresa(id);
      res.status(200).json({ count });
    } catch (error) {
      console.error('Erro ao contar profissionais da empresa:', error);
      res.status(500).json({ error: 'Erro ao contar profissionais da empresa.' });
    }
  }

  // Calcular salário médio dos profissionais de uma empresa
  async getSalarioMedio(req, res) {
    try {
      const { id } = req.params;
      const media = await ProfissionalRepository.getSalarioMedioByEmpresa(id);
      res.status(200).json({ media });
    } catch (error) {
      console.error('Erro ao calcular salário médio:', error);
      res.status(500).json({ error: 'Erro ao calcular salário médio.' });
    }
  }
}

module.exports = new EmpresaController();
