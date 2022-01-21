const { Router } = require('express');
const LevelsController = require('../controllers/LevelController');

const router = Router();

router.get('/api/v1/levels', LevelsController.index);
router.get('/api/v1/levels/:id', LevelsController.show);

module.exports = router;
