const express = require('express');
const router = express.Router();
const controller = require('../controllers/celularController');
const validate = require('../middleware/validateCelular');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', validate, controller.create);
router.put('/:id', validate, controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
