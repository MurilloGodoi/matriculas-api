const Level = require('../models/levels');
const User = require('../models/users');
const Class = require('../models/classes');

class ClassController {
  static async index(req, res) {
    const { page = 1 } = req.query;
    try {
      const classes = await Class.findAll({
        offset: (page - 1) * 10,
        limit: 10,
      });

      if (!classes.length) return res.status(404).end();

      return res.status(200).send({ classes });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async show(req, res) {
    const { id } = req.params;
    try {
      const classe = await Class.findByPk(id);
      if (!classe) return res.status(404).send({ error: 'class not found' });

      return res.status(200).send({ classe });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async getByTeacherId(req, res) {
    const { teacherId } = req.params;
    try {
      const teacher = await User.findByPk(teacherId);
      if (!teacher) return res.status(404).send({ error: 'teacher not found' });

      const classes = await Class.findAll({ where: { teacher_id: teacherId } });
      if (!classes.length) return res.status(404).send({ error: 'classes not found' });

      return res.status(200).send({ classes });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async getByLevelId(req, res) {
    const { levelId } = req.params;
    try {
      const level = await Level.findByPk(levelId);
      if (!level) return res.status(404).send({ error: 'level not found' });

      const classes = await Class.findAll({ where: { level_id: levelId } });
      if (!classes.length) return res.status(404).send({ error: 'classes not found' });

      return res.status(200).send({ classes });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
}

module.exports = ClassController;
