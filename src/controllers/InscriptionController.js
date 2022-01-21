const Inscription = require('../models/inscriptions');
const User = require('../models/users');
const Class = require('../models/classes');

class InscriptionController {
  static async index(req, res) {
    const { page = 1 } = req.query;
    try {
      const inscriptions = await Inscription.findAll({
        offset: (page - 1) * 10,
        limit: 10,
      });

      if (!inscriptions.length) return res.status(404).end();

      return res.status(200).send({ inscriptions });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async show(req, res) {
    const { id } = req.params;
    try {
      const inscription = await Inscription.findByPk(id);
      if (!inscription) return res.status(404).send({ error: 'inscription not found' });

      return res.status(200).send({ inscription });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async getConfirmeds(req, res) {
    try {
      const confirmedsInscriptions = await Inscription.findAll({ where: { status: 'confirmed' } });
      if (!confirmedsInscriptions.length) return res.status(404).end();

      return res.status(200).send({ confirmedsInscriptions });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async getCanceleds(req, res) {
    try {
      const canceledsInscriptions = await Inscription.findAll({ where: { status: 'canceled' } });
      if (!canceledsInscriptions.length) return res.status(404).end();

      return res.status(200).send({ canceledsInscriptions });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async getByStudentId(req, res) {
    const { studentId } = req.params;
    try {
      const student = await User.findByPk(studentId);
      if (!student) return res.status(404).send({ error: 'student not found' });

      const inscriptions = await Inscription.findAll({ where: { student_id: studentId } });
      if (!inscriptions.length) return res.status(404).send({ error: 'inscriptions not found' });

      return res.status(200).send({ inscriptions });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async getByClassId(req, res) {
    const { classId } = req.params;
    try {
      const classe = await Class.findByPk(classId);
      if (!classe) return res.status(404).send({ error: 'class not found' });

      const inscriptions = await Inscription.findAll({ where: { class_id: classId } });
      if (!inscriptions.length) return res.status(404).send({ error: 'inscriptions not found' });

      return res.status(200).send({ inscriptions });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
}

module.exports = InscriptionController;
