const service = require('../services/celularService');

const getAll = async (req, res) => {
    try {
        const celular = await service.getAll();
        Response.json(celular);
    } catch (error) {
        next(error);
    }
}

const getById = async (req, res, next) => {
    try {
        const celular = await service.getById(req.params.id);
        if (!celular)
            return res.status(404).json({ error: 'Celular não encontrado' });
        res.json(celular);
    } catch (err) {
        next(err);
    }
};

const create = async (req, res, next) => {
    try {
        const novo = await service.create(req.body);
        res.status(201).json(novo);
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const atualizado = await service.update(req.params.id, req.body);
        if (!atualizado)
            return res.status(404).json({ error: 'Celular não encontrado' });
        res.json(atualizado);
    } catch (err) {
        next(err);
    }
};

const remove = async (req, res, next) => {
    try {
        const deletado = await service.remove(req.params.id);
        if (!deletado) return res.status(404).json({ error: 'Celular não encontrado' });
        res.json({ message: 'Celular deletado com sucesso' });
    } catch (err) {
        next(err);
    }
};

module.exports = { getAll, getById, create, update, remove };