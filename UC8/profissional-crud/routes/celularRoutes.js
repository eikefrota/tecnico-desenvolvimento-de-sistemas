const express = require('express');
const router = express.Router();
const controller = require('../controllers/celularController');
const validate = require('../middleware/validateCelular');

router.head('/', controller.head); // HEAD
router.options('/', controller.options); // OPTIONS
router.trace('/', controller.trace); // TRACE
router.all('/connect', controller.connect); // CONNECT
//router.patch('/:id', controller.patch); // PATCH (não implementado ainda)

// router.all('/webdav/propfind', controller.propfind); // PROPFIND
// router.all('/webdav/mkcol', controller.mkcol);       // MKCOL

// Testar endpoints
// curl -I http://localhost:3000/celulares/ (HEAD)
// curl -X OPTIONS http://localhost:3000/celulares/ -i
// curl -X TRACE http://localhost:3000/celulares/ -i
// curl -X CONNECT http://localhost:3000/celulares/connect -i
// curl -X PATCH http://localhost:3000/celulares/12345 -i
// curl -X PROPFIND http://localhost:3000/celulares/webdav/propfind -i
// curl -X MKCOL http://localhost:3000/celulares/webdav/mkcol -i
// curl -X OPTIONS http://localhost:3000/celulares/ -v

module.exports = router;
