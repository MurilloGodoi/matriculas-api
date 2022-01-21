const { Op } = require('sequelize');
const sequelize = require('../models/sequelizeinstance');
const User = require('../models/users');

class UserRepository {
  static async findAll(name, page) {
    const users = name ? await User.findAll({
      where: {
        name: { [Op.like]: `%${name}%` },
      },
      offset: (page - 1) * 10,
      limit: 10,
    }) : await User.findAll({
      offset: (page - 1) * 10,
      limit: 10,
    });

    return users;
  }
}

module.exports = UserRepository;
