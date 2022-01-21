/* eslint-disable consistent-return */
const { Op, where } = require('sequelize');
const sequelize = require('../models/sequelizeinstance');
const Inscription = require('../models/inscriptions');
const User = require('../models/users');
const Class = require('../models/classes');

class AdminController {
  static async store(req, res) {
    try {
      await sequelize.transaction(async (t) => {
        const newInscription = await Inscription.create(req.body, { transaction: t });
        return res.status(201).send({ newInscription });
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
}

module.exports = AdminController;
