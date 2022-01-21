const Level = require('../models/levels');

class LevelController {
  static async index(req, res) {
    const { page = 1 } = req.query;
    try {
      const levels = await Level.findAll({
        offset: (page - 1) * 10,
        limit: 10,
      });

      if (!levels.length) return res.status(404).end();

      return res.status(200).send({ levels });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async show(req, res) {
    const { id } = req.params;
    try {
      const level = await Level.findByPk(id);
      if (!level) return res.status(404).send({ error: 'level not found' });

      return res.status(200).send({ level });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
}

module.exports = LevelController;
