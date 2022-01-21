const { Router } = require('express');
const InscriptionController = require('../controllers/InscriptionController');

const router = Router();

router.get('/api/v1/inscriptions', InscriptionController.index);
router.get('/api/v1/inscriptions/:id', InscriptionController.show);
router.get('/api/v1/confirmedsinscriptions', InscriptionController.getConfirmeds);
router.get('/api/v1/canceledsinscriptions', InscriptionController.getCanceleds);
router.get('/api/v1/inscriptions/student/:studentId', InscriptionController.getByStudentId);
router.get('/api/v1/inscriptions/class/:classId', InscriptionController.getByClassId);

module.exports = router;
