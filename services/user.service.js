const boom = require('@hapi/boom');
const { sequelize } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const [data] = await sequelize.query('SELECT * FROM tasks');
    return data;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
