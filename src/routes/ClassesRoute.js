const { Router } = require('express');
const ClassesController = require('../controllers/ClassController');

const router = Router();

router.get('/api/v1/classes', ClassesController.index);
router.get('/api/v1/classes/:id', ClassesController.show);
router.get('/api/v1/classes/teacher/:teacherId', ClassesController.getByTeacherId);
router.get('/api/v1/classes/level/:levelId', ClassesController.getByLevelId);

module.exports = router;
