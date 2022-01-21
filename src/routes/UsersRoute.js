const { Router } = require('express');
const UserController = require('../controllers/UserController');
const validateUserIndex = require('../middlewares/validators/user/index');
const validateUserStore = require('../middlewares/validators/user/store');
const validateUserUpdateComplete = require('../middlewares/validators/user/updateComplete');
const validateUserUpdateParcial = require('../middlewares/validators/user/updateParcial');

const router = Router();

router.get('/api/v1/users', validateUserIndex(), UserController.index);
router.get('/api/v1/users/:id', UserController.show);
router.post('/api/v1/users', validateUserStore(), UserController.store);
router.put('/api/v1/users/:id', validateUserUpdateComplete(), UserController.updateComplete);
router.patch('/api/v1/users/:id', validateUserUpdateParcial(), UserController.updateParcial);
router.delete('/api/v1/users/:id', UserController.delete);
router.get('/api/v1/users/:id/inscriptions', UserController.getInscriptions);
router.get('/api/v1/users/:id/classes', UserController.getClasses);

module.exports = router;
