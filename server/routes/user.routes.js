const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');

router.get('/', userCtrl.getAll);
router.get('/chat/:id', userCtrl.getAllExceptMe);
router.get('/id/:id', userCtrl.get);
router.get('/username/:user', userCtrl.getByUsername);
router.get('/matches/:user/:gender/:gender_lookfor', userCtrl.getByGender);
router.get('/password/:email/:birth', userCtrl.getPassword);
router.get('/admins', userCtrl.getAdmins);

router.post('/', userCtrl.create);
router.post('/getUsersExcept', userCtrl.getAllExceptArray);
router.put('/:id', userCtrl.update);
router.put('/permission/:id', userCtrl.updatePermission);
router.delete('/:id', userCtrl.delete);


module.exports = router;