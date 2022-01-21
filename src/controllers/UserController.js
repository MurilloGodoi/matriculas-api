/* eslint-disable consistent-return */
const { Op, where } = require('sequelize');
const sequelize = require('../models/sequelizeinstance');
const User = require('../models/users');
const Inscription = require('../models/inscriptions');
const Class = require('../models/classes');
const UserRepository = require('../repositories/UserRepository');

class UserController {
  static async index(req, res) {
    const { name = '', page = 1 } = req.query;
    try {
      const users = await UserRepository.findAll(name, page);
      if (!users.length) return res.status(404).end();

      return res.status(200).send({ users });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async show(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) return res.status(404).send({ error: 'user not found' });

      return res.status(200).send({ user });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async store(req, res) {
    try {
      await sequelize.transaction(async (t) => {
        const user = await User.create(req.body, { transaction: t });
        return res.status(201).send({ user });
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async updateComplete(req, res) {
    const { id } = req.params;
    const {
      name, status, email, role,
    } = req.body;
    try {
      const user = await User.findByPk(id);
      if (!user) return res.status(404).send({ error: 'user not found' });

      await sequelize.transaction(async (t) => {
        const updatedUser = await user.update({
          name, status, email, role,
        }, { transaction: t });
        return res.status(200).send({ updatedUser });
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async updateParcial(req, res) {
    const { id } = req.params;
    const {
      name, status, email, role,
    } = req.body;

    const payload = {};

    if (name) payload.name = name;
    if (status) payload.status = status;
    if (email) payload.email = email;
    if (role) payload.role = role;

    try {
      const user = await User.findByPk(id);
      if (!user) return res.status(404).send({ error: 'user not found' });

      await sequelize.transaction(async (t) => {
        const updatedUser = await user.update({ payload }, { transaction: t });
        return res.status(200).send({ updatedUser });
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) return res.status(404).send({ error: 'user not found' });

      await sequelize.transaction(async (t) => {
        await user.destroy({ transaction: t });
        return res.status(200).send({ success: 'deleted user' });
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async getInscriptions(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) return res.status(404).send({ error: 'user not found' });

      const inscriptions = await Inscription.findAll({
        where: {
          student_id: id,
        },
      });

      if (!inscriptions.length) return res.status(404).end();

      return res.status(200).send({ inscriptions });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async getClasses(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) return res.status(404).send({ error: 'user not found' });

      const classes = await Class.findAll({
        where: {
          teacher_id: id,
        },
      });

      if (!classes.length) return res.status(404).end();

      return res.status(200).send({ classes });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
}

module.exports = UserController;
