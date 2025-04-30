const express = require('express');
const router = express.Router();
const controller = require('../controllers/profissionalController');
const validate = require('../middleware/validateProfissional');

router.head('/', controller.head); // HEAD
router.options('/', controller.options); // OPTIONS
router.trace('/', controller.trace); // TRACE
router.all('/connect', controller.connect); // CONNECT
router.patch('/:matricula', controller.patch); // PATCH (não implementado ainda)

router.all('/webdav/propfind', controller.propfind); // PROPFIND
router.all('/webdav/mkcol', controller.mkcol);       // MKCOL

module.exports = router;

// Testar endpoints
// curl -I http://localhost:3000/profissionais/ (HEAD)
// curl -X OPTIONS http://localhost:3000/profissionais/ -i
// curl -X TRACE http://localhost:3000/profissionais/ -i
// curl -X CONNECT http://localhost:3000/profissionais/connect -i
// curl -X PATCH http://localhost:3000/profissionais/12345 -i
// curl -X PROPFIND http://localhost:3000/profissionais/webdav/propfind -i
// curl -X MKCOL http://localhost:3000/profissionais/webdav/mkcol -i
// curl -X OPTIONS http://localhost:3000/profissionais/ -v