const express = require('express');
const router = express.Router();
const msgCtrl = require('../controllers/msg.controller');

router.post('/', msgCtrl.create);
// router.delete('/:user/:msg', msgCtrl.delete);
 router.get('/', msgCtrl.getAll);
 router.get('/archivados/', msgCtrl.getAllArchivados);
 router.get('/:id', msgCtrl.get);
 router.get('/user/:user', msgCtrl.getUserMsg);
 router.put('/:id', msgCtrl.update);

module.exports = router;